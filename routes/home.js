var express = require("express");
var router = express.Router();
var passport = require("passport");
var User = require("../models/user")

router.get("/home", isLoggedIn, function(req, res){
	User.findById(req.params.id).exec(function(err, foundUser){
    if(err){
        console.log(err);
    }else{
    	var date = new Date()
        res.render("home", {user: foundUser, date: date})
    }
});
});

function isLoggedIn(req, res, next){
	if(req.isAuthenticated()){
		return next();
	}
	res.redirect("/");
}

module.exports = router;