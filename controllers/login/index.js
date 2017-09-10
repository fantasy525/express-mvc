var Cookie = require('../../utils/cookies');
module.exports = {
  index: function (req, res, next) {
    res.render("login");
  },
  auth: function (req, res, next) {
    var username, password;
    username = req.body.username;
    password = req.body.password;
    console.log( password);
    if (password !== 'zxf1234') {
      res.redirect('/login')
      return;
    }
    if (!req.session.user) {
     req.session.user=username;
     res.redirect('/')
    }

  }
}
