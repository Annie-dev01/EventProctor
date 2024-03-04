const express = require('express');
const eventController = require('../controllers/event.controllers');
const {authenticate} = require('../middlewares/auth');

const router = express.Router();

router.post('/', authenticate, eventController.createEvent);
router.get('/', authenticate, eventController.getEvents);

module.exports = router;
