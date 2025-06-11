const { AuthError } = require('./errorHandler');


const authMiddleware = (req, res, next) => {
    const apiKey = req.headers['x-api-key'];
    if (!apiKey || apiKey !== process.env.API_KEY) {
        throw new AuthError('Invalid or missing Api key', 401);
    }

    next();

};
class AuthError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode =statusCode;
        this.name  = 'AuthError';
    }
}

module.exports = { authMiddleware, AuthError };