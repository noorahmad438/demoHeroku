var express = require('express');
var router = express.Router();

const asanaRoute = require('./asana/asanaRoute');

//========================== Export Module Start ==========================

//API version 1

router.use('/asana', asanaRoute);

module.exports = router;
//========================== Export Module End ============================