/**
 * Created by zxf on 2017/9/8.
 */
var express = require('express');
var router = express.Router();
var controllers =require('../controllers')

/* GET home page. */
router.get('/user', controllers.user.getUser);

module.exports = router;
