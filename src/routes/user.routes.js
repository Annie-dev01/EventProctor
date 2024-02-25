const express = require('express');
const userControllers = require("../controllers/user.controllers");

const router = express.Router();

router.post('/signUp', userControllers.createUser);
router.post('/login', userControllers.login);


module.exports = router;