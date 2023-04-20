const express = require('express');
const { route } = require('express/lib/application');
const router = express.Router();
const commonFile = require('./common')
const loggerfile = require('../logger/logger')
const utilFile = require('../util/helper')
const formatterFile = require('../validator/formatter');
const lodash = require('../lodash_/lodash_')


router.get('/test-me', function (req, res) {
    loggerfile.welcome();
    utilFile.printDate();
    utilFile.printMonth();
    utilFile.getBatchInfo();
    console.log(formatterFile.trimmedStr);
    console.log(formatterFile.changetoLowerCase);
    console.log(formatterFile.changeToUpperCase);

    console.log(lodash.splitArr);
    console.log(lodash.oddLastNinelm);
    console.log(lodash.uniqueArr);
    console.log(lodash.keyValuePair);
    res.send('This should be working!')
});

router.get('/test-you', function (req, res) {
    console.log('This is the constant I created', commonFile.doSomething)
    commonFile.doSomething();
    res.send('Hello there, welcome to this application!')
});

module.exports = router;