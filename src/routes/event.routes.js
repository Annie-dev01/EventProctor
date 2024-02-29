const express = require('express');
const eventController = require('../controllers/event.controllers');

const router = express.Router();

router.post('/create', eventController.createEvent);
router.get('/get', eventController.getEvents);

module.exports = router;
