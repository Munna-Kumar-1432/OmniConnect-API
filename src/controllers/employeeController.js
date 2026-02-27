const Employee = require('../models/Employee');
const { successResponse, errorResponse } = require('../utils/responseHandler');
const { emitEvent } = require('../sockets/socketService');

// Create Employee
exports.createEmployee = async (req, res) => {
    try {
        const employee = await Employee.create(req.body);
        emitEvent('employee_created', employee);
        return successResponse(res, 'Employee created successfully', employee, 201);
    } catch (error) {
        return errorResponse(res, 'Failed to create employee', error, 400);
    }
};

// Get All Employees
exports.getAllEmployees = async (req, res) => {
    try {
        const employees = await Employee.find();
        return successResponse(res, 'Employees fetched successfully', employees);
    } catch (error) {
        return errorResponse(res, 'Failed to fetch employees', error);
    }
};

// Get Single Employee
exports.getEmployeeById = async (req, res) => {
    try {
        const employee = await Employee.findById(req.params.id);
        if (!employee) return errorResponse(res, 'Employee not found', null, 404);
        return successResponse(res, 'Employee fetched successfully', employee);
    } catch (error) {
        return errorResponse(res, 'Failed to fetch employee', error);
    }
};

// Update Employee
exports.updateEmployee = async (req, res) => {
    try {
        const employee = await Employee.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!employee) return errorResponse(res, 'Employee not found', null, 404);
        emitEvent('employee_updated', employee);
        return successResponse(res, 'Employee updated successfully', employee);
    } catch (error) {
        return errorResponse(res, 'Failed to update employee', error, 400);
    }
};

// Delete Employee
exports.deleteEmployee = async (req, res) => {
    try {
        const employee = await Employee.findByIdAndDelete(req.params.id);
        if (!employee) return errorResponse(res, 'Employee not found', null, 404);
        emitEvent('employee_deleted', { id: req.params.id });
        return successResponse(res, 'Employee deleted successfully');
    } catch (error) {
        return errorResponse(res, 'Failed to delete employee', error);
    }
};
