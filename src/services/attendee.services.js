const csv = require('csv-parser');
const fs = require('fs');
const attendeeRepo = require("../dataAccess/attendeeRepo");
const { sendEmailWithAttachment } = require('../utils/sendMail');
const {generateQrCode} = require("../utils/qrcode");
const PubSub = require('../subscribers/qrCode_events');



const addAttendees = async (csvFilePath, eventId) => {
   
    return new Promise((resolve, reject) => {
        const attendees = [];
        fs.createReadStream(csvFilePath)
            .pipe(csv())
            .on('data', async (row) => {
                try {
                    const attendee = {
                        firstName: row.firstName,
                        lastName: row.lastName,
                        email: row.email,
                        event: eventId
                    };
                    console.log(attendee);

                    const attendeeInstance = await attendeeRepo.create(attendee)
                    const savedAttendee = await attendeeRepo.save(attendeeInstance);
                    PubSub.emit("qrMail", attendee)

                    attendees.push(savedAttendee);
                } catch (error) {
                    reject(error);
                }
            })
            .on('end', async () => {
                fs.unlinkSync(csvFilePath);

                resolve(attendees);
            })
            .on('error', (error) => {
                reject(error);
            });
    });
};

module.exports = {
    addAttendees
};



