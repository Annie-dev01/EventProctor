const eventRepo = require('../dataAccess/eventRepo');
const responses = require('../utils/response');

const createEvent = async (payload) => {
    try {
        const newEvent = await eventRepo.create(payload);
        console.log(newEvent);
        const saveEvent = await eventRepo.save(newEvent);

        return responses.buildSuccessResponse("Event created successfully", 201, saveEvent);
    } catch (error) {
        return responses.buildFailureResponse("Failed to create event", 500);
    }
};

const getEvents = async (query) => {
    try {
        const events = await eventRepo.findAll(query);
        return responses.buildSuccessResponse("Successfully fetched all events", 200, events);
    } catch (error) {
        return responses.buildFailureResponse("Failed to fetch events", 500);
    }
}


module.exports = {
    createEvent,
    getEvents
}