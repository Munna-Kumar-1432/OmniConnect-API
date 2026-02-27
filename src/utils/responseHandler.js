const successResponse = (res, message, data = {}, statusCode = 200) => {
    return res.status(statusCode).json({
        success: true,
        message,
        data,
    });
};

const errorResponse = (res, message, error = null, statusCode = 500) => {
    return res.status(statusCode).json({
        success: false,
        message,
        error: error ? error.message : null,
    });
};

module.exports = { successResponse, errorResponse };
