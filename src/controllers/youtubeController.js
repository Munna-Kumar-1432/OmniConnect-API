const YouTubeContent = require('../models/YouTubeContent');
const { successResponse, errorResponse } = require('../utils/responseHandler');
const { emitEvent } = require('../sockets/socketService');

// Upload Video/Photo
exports.uploadContent = async (req, res) => {
    try {
        if (!req.file) {
            return errorResponse(res, 'No file uploaded', null, 400);
        }

        const { title, description, category, tags } = req.body;

        const content = await YouTubeContent.create({
            title,
            description,
            category,
            tags: tags ? tags.split(',') : [],
            videoUrl: req.file.path, // Cloudinary URL
            thumbnailUrl: req.file.path, // Using same for now or separate
            uploadStatus: 'completed'
        });

        emitEvent('content_uploaded', content);
        return successResponse(res, 'Content uploaded successfully', content, 201);
    } catch (error) {
        return errorResponse(res, 'Failed to upload content', error, 500);
    }
};

// Get All YouTube Content
exports.getAllContent = async (req, res) => {
    try {
        const contents = await YouTubeContent.find();
        return successResponse(res, 'Content fetched successfully', contents);
    } catch (error) {
        return errorResponse(res, 'Failed to fetch content', error);
    }
};

// Delete Content
exports.deleteContent = async (req, res) => {
    try {
        const content = await YouTubeContent.findByIdAndDelete(req.params.id);
        if (!content) return errorResponse(res, 'Content not found', null, 404);

        // Note: In real app, also delete from Cloudinary using content.videoUrl/publicId

        emitEvent('content_deleted', { id: req.params.id });
        return successResponse(res, 'Content deleted successfully');
    } catch (error) {
        return errorResponse(res, 'Failed to delete content', error);
    }
};
