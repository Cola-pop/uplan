var express = require("express");
var router = express.Router();
var passport = require("passport");
var User = require("../models/user");
var Types = require("../models/types");

router.get("/", function(req, res){
	res.render("landing");
});

//REGISTER ROUTES
router.get("/register", function(req, res){
	res.render("landing");
});

router.post("/register", function(req, res){
    var newUser = new User({
        username: req.body.username,
        email: req.body.email,
        fname: req.body.fname,
        lname: req. body.lname,
        type: req.body.type,
        phone: "",
        desc: "",
        location: "",
        img: ""
    });

    User.register(newUser, req.body.password, function(err, user){
        if(err){
            console.log(err);
            return res.render("landing");
        }
        passport.authenticate("local")(req, res, function(){
            res.redirect("/home");
        });
    });
});

//LOGIN ROUTES
router.get("/login", function(req, res){
    res.render("home");
});

router.post("/login", passport.authenticate("local", 
{
    successRedirect: "/home", 
    failureRedirect: "/"
}), function(req, res){});

//LOGOUT ROUTES
router.get("/logout", function(req, res){
    req.logout();
    res.redirect("/");
});

//MIDDLEWARE FUNCTIONS
function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){       
       return next();
   }else{
    res.redirect("/");
}
}

module.exports = router;