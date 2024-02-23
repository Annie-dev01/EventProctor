const mongoose = require('mongoose');
const eventSchema = mongoose.Schema({
    eventName: {
        type: String,
    },

    time: {
        type: Date,
    },

    venue: {
        type: String,
    },

    description: {
        type: String,
    },

    createdBy: {
        type: mongoose.Types.ObjectId,
        ref: "User"
    },

    closedAt: {
        type: Date,
    }

}, {
    timestamps: true
});

module.exports = mongoose.model("Event", eventSchema);