const BaseRepo = require('./base')
const UserModel = require('../models/user')

const userRepo = new BaseRepo(UserModel)

module.exports = userRepo

