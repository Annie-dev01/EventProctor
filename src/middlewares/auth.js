const jwt = require('jsonwebtoken');
const User = require('../models/user');
const userRepo = require('../dataAccess/userRepo');

async function authenticate(req, res, next) {
    try {
        const authorization = req.headers.authorization
        if(!authorization || !authorization.startsWith('Bearer ')) {
            return res.status(400).json({
                message: "Authorization header must start with 'Bearer '",
                status: "failure",
            })
        }
        const token= authorization.substring(7)

        const decodedUser = await jwt.decode(token)

        const foundUser = await userRepo.findOne({_id: decodedUser._id})

        if (foundUser.role !== 'user') {
            return res.status(400).json({
                message: "Only registered users are allowed to login",
                status: "failure",
            })
        }
        request.user = foundUser
        next()
    } catch (error) {
        return res.status(error.statusCode || 500).send(error.message || "unable to authenticate")
        
    }
}

module.exports = {
    authenticate
}