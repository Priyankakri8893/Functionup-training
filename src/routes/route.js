const express = require('express');
const { route } = require('express/lib/application');
const router = express.Router();
const loggerfile = require('../logger/logger')

router.get('/test-me', function (req, res) {
    console.log(loggerfile.welcome);
    loggerfile.welcome();
    res.send('This should be working!')
});

router.get('/test-you', function (req, res) {
    res.send('Hello there, welcome to this application!')
});

module.exports = router;