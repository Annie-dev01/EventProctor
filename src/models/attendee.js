const mongoose = require('mongoose');
const attendeeSchema = mongoose.Schema({
    firstName: {
        type: String,
    },

    lastName: {
        type: String,
    },

    email: {
        type: String,
    },

    phoneNumber: {
        type: String,
    },

    event: {
        type: mongoose.Types.ObjectId,
        ref: "Event"
    }
}, {
    timestamps: true
});

module.exports = mongoose.model("Attendee", attendeeSchema);