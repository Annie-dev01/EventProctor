const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
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

    password: {
        type: String,
    }
}, {
    timestamps: true
});

module.exports = mongoose.model("User", userSchema);