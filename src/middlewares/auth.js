const jwt = require('jsonwebtoken');
const User = require('../models/user');

async function authenticate(req, res, next) {
    try {
        const authorization = req.headers.authorization;
        if (!authorization || !authorization.startsWith('Bearer ')) {
            return res.status(400).json({
                message: "Authorization header must start with 'Bearer '",
                status: "failure"
            });
        }
        const token = authorization.substring(7);

        const decodedUser = jwt.verify(token, process.env.JWT_SECRET);

        const foundUser = await User.findOne(decodedUser._id);
        if (!foundUser) {
            throw new Error('User not found');
        }

        // if (foundUser.role !== 'user') {
        //     return res.status(403).json({
        //         message: "Only registered users are allowed to use this service",
        //         status: "failure"
        //     });
        // }

        req.user = foundUser;
        next();
    } catch (error) {
        return res.status(error?.statusCode || 500).send(error?.message || "Unable to authenticate");
    }
}

module.exports = {
    authenticate
};
