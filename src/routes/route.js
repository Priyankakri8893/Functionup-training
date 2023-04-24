const express = require('express');
const { route } = require('express/lib/application');
const router = express.Router();

router.get('/test-me', function (req, res) {
    res.send('This should be working!')
});

router.get('/test-you', function (req, res) {
    res.send('Hello there, welcome to this application!')
});

module.exports = router;