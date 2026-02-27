require('dotenv').config();
const http = require('http');
const app = require('./app');
const connectDB = require('./configs/db');
const socketService = require('./sockets/socketService');

const PORT = process.env.PORT || 5000;

// Connect to Database
connectDB();

// Create Server
const server = http.createServer(app);

// Initialize Sockets
socketService.init(server);

// Start Server
server.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV || 'development'} mode on port ${PORT}`);
    console.log(`Swagger docs available at http://localhost:${PORT}/api-docs`);
});
