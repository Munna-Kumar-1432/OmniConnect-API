const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    enrollmentDate: { type: Date, default: Date.now },
    course: { type: String, required: true },
    studentId: { type: String, required: true, unique: true },
    status: { type: String, enum: ['enrolled', 'graduated', 'dropped'], default: 'enrolled' }
}, { timestamps: true });

module.exports = mongoose.model('Student', studentSchema);
