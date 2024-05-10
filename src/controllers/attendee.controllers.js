const attendeeServices = require("../services/attendee.services");
const csv = require('csv-parser');
const fs = require('fs');

const addAttendees = async (req, res) => {

    const { event_id} = req.body;
    if (!req.file) {
        return res.status(422).send('No file uploaded.')
    }
    if (!event_id) {    
        return res.status(422).send('No event id.')
    }

    try {
        const attendees = await attendeeServices.addAttendees(req.file.path, event_id);
        return res.status(200).json({ message: 'Attendees added successfully'});
    } catch (error) {
        console.error('Error adding attendees:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}



module.exports = {
    addAttendees
};