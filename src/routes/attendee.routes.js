const express = require('express');
const router = express.Router();
const attendeeController = require('../controllers/attendee.controllers');
const {authenticate} = require('../middlewares/auth');


const multer = require("multer");
const upload = multer({dest: "uploads/"});


// Route for adding attendees from CSV file
router.post('/import', [
    authenticate,
    upload.single('csv'),
],attendeeController.addAttendees);



module.exports = router;
