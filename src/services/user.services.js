const bcrypt = require ("bcrypt");
const jwt = require ("jsonwebtoken");

const userRepo = require("../dataAccess/userRepo");
const responses = require ("../utils/response");

const createUser = async (payload) => {
    try {
        const foundEmail = await userRepo.findOne({ email: payload.email});
        if(foundEmail) {
            return responses.buildFailureResponse("User already exists", 400);
    }
    const saltRounds = 10;
    const generatedSalt = await bcrypt.genSalt(saltRounds);

    payload.password = await bcrypt.hash(payload.password, generatedSalt);

    const newUser = await userRepo.create(payload)
    const saveUser = await userRepo.save(newUser);
    return responses.buildSuccessResponse("User created successfully", 201, saveUser);
}  catch (error) {
        return responses.buildFailureResponse(error.message, error.statusCode)
        
}
};

const login = async (payload) => {
    try {
    const foundUser = await userRepo.findOne({email: payload.email});
    if(!foundUser) {
        return responses.buildFailureResponse("Invalid email address", 400)
    }
    const validPassword = await bcrypt.compare(payload.password, foundUser.password)
    if(!validPassword) {
        return responses.buildFailureResponse("Invalid password", 400)
    }
    const token = jwt.sign({email: foundUser.email}, process.env.JWT_SECRET, {
        expiresIn: '15minutes'
    })
    foundUser.accessToken = token;
    return responses.buildSuccessResponse("Login successful", 200, foundUser);
} catch (error) {
    return responses.buildFailureResponse(error.message, error.statusCode)
}};


module.exports = { createUser,
    login
}