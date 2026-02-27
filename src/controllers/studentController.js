const Student = require('../models/Student');
const { successResponse, errorResponse } = require('../utils/responseHandler');
const { emitEvent } = require('../sockets/socketService');

// Create Student
exports.createStudent = async (req, res) => {
    try {
        const student = await Student.create(req.body);
        emitEvent('student_enrolled', student);
        return successResponse(res, 'Student enrolled successfully', student, 201);
    } catch (error) {
        return errorResponse(res, 'Failed to enroll student', error, 400);
    }
};

// Get All Students
exports.getAllStudents = async (req, res) => {
    try {
        const students = await Student.find();
        return successResponse(res, 'Students fetched successfully', students);
    } catch (error) {
        return errorResponse(res, 'Failed to fetch students', error);
    }
};

// Get Single Student
exports.getStudentById = async (req, res) => {
    try {
        const student = await Student.findById(req.params.id);
        if (!student) return errorResponse(res, 'Student not found', null, 404);
        return successResponse(res, 'Student fetched successfully', student);
    } catch (error) {
        return errorResponse(res, 'Failed to fetch student', error);
    }
};

// Update Student
exports.updateStudent = async (req, res) => {
    try {
        const student = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!student) return errorResponse(res, 'Student not found', null, 404);
        emitEvent('student_updated', student);
        return successResponse(res, 'Student updated successfully', student);
    } catch (error) {
        return errorResponse(res, 'Failed to update student', error, 400);
    }
};

// Delete Student
exports.deleteStudent = async (req, res) => {
    try {
        const student = await Student.findByIdAndDelete(req.params.id);
        if (!student) return errorResponse(res, 'Student not found', null, 404);
        emitEvent('student_deleted', { id: req.params.id });
        return successResponse(res, 'Student record deleted successfully');
    } catch (error) {
        return errorResponse(res, 'Failed to delete student', error);
    }
};
