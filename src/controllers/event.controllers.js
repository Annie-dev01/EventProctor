const eventServices = require('../services/event.services');

const createEvent = async(req, res) => {
    try {
        const data = await eventServices.createEvent(req.body);
        res.status(data.statusCode).json(data);
    } catch (error) {
        res.status(500).send(error);
    }
};


const getEvents = async(req, res) => {
    try {
        const data = await eventServices.getEvents(req.query);
        console.log(data);
        res.status(data.statusCode).json(data);
    } catch (error) {
        res.status(500).send(error);
    }
};

module.exports = {
    createEvent,
    getEvents
}