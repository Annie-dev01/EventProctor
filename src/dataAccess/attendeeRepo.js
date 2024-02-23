const BaseRepo = require('./base')
const AttendeeModel = require('../models/attendee')

const attendeeRepo = new BaseRepo(AttendeeModel)

module.exports = attendeeRepo

