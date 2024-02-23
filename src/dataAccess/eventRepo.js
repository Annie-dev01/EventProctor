const BaseRepo = require('./base')
const EventModel = require('../models/event')

const eventRepo = new BaseRepo(EventModel)

module.exports = eventRepo

