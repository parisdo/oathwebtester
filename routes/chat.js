// var models = require("../models");

exports.view = function(req, res) {

    /* TODO */
    if(!req.user)
  	{
      console.log("not logged in");
      res.redirect('/');
  	}
    else {
      console.log("logged in as user " + req.user);
      res.render("chat");
    }
};
