const mongoose = require('mongoose');

const youtubeContentSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    videoUrl: { type: String, required: true }, // Cloudinary/YouTube URL
    thumbnailUrl: { type: String },
    category: { type: String },
    tags: [{ type: String }],
    uploadStatus: { type: String, enum: ['pending', 'completed', 'failed'], default: 'pending' }
}, { timestamps: true });

module.exports = mongoose.model('YouTubeContent', youtubeContentSchema);
