let io;

const init = (server) => {
    const socketIo = require('socket.io');
    io = socketIo(server, {
        cors: {
            origin: "*",
            methods: ["GET", "POST"]
        }
    });

    io.on('connection', (socket) => {
        console.log('A user connected:', socket.id);

        // Chat Logic
        socket.on('join_room', (room) => {
            socket.join(room);
            console.log(`User ${socket.id} joined room: ${room}`);
        });

        socket.on('send_message', async (data) => {
            const { sender, content, room } = data;

            // Save to DB
            const Message = require('../models/Message');
            try {
                const newMessage = await Message.create({ sender, content, room });

                // Broadcast to Everyone in the room
                io.to(room).emit('receive_message', newMessage);
            } catch (err) {
                console.error('Error saving message:', err);
            }
        });

        socket.on('disconnect', () => {
            console.log('User disconnected');
        });
    });

    return io;
};

const getIO = () => {
    if (!io) {
        throw new Error("Socket.io not initialized!");
    }
    return io;
};

const emitEvent = (event, data) => {
    if (io) {
        io.emit(event, data);
    }
};

module.exports = { init, getIO, emitEvent };
