var express = require('express');
var router = express.Router();
var controllers = require('../controllers')
router.use(function (req, res, next) {
    var user = req.session.user;
    console.log('user=',user);
    var originalUrl = req.originalUrl;
    if (originalUrl === '/login'||originalUrl === '/login/auth') {
      next();
    } else {
      if (!user) {
        res.redirect('/login');
      }else{
        next();
      }
     
    }

  })
  /* GET home page. */
router.get('/', controllers.home.index);
/*login page*/
router.get('/login', controllers.login.index);
router.post('/login/auth', controllers.login.auth);
module.exports = router;
