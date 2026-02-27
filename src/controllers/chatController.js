const Message = require('../models/Message');
const { successResponse, errorResponse } = require('../utils/responseHandler');

// Get chat history for a room
exports.getChatHistory = async (req, res) => {
    try {
        const { room } = req.params;
        const messages = await Message.find({ room }).sort({ createdAt: 1 }).limit(100);
        return successResponse(res, 'Chat history fetched successfully', messages);
    } catch (error) {
        return errorResponse(res, 'Failed to fetch chat history', error);
    }
};

// Clear chat history (Optional)
exports.clearChat = async (req, res) => {
    try {
        const { room } = req.params;
        await Message.deleteMany({ room });
        return successResponse(res, 'Chat history cleared successfully');
    } catch (error) {
        return errorResponse(res, 'Failed to clear chat history', error);
    }
};
