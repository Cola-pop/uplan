var express = require("express");
var router = express.Router();
var passport = require("passport");
var Types = require("../models/types");
var User = require("../models/user")

router.get("/flowers", function(req, res){
    User.find({type: "Flowers"}, function(err, allUsers){
        if(err){
            console.log(err)
        }else{
            res.render("list", {user: allUsers, type: "Flowers", currentUser: req.user})
        }
    });
});

router.get("/photography", function(req, res){
    User.find({type: "Photography"}, function(err, allUsers){
        if(err){
            console.log(err)
        }else{
            res.render("list", {user: allUsers, type: "Photography", currentUser: req.user})
        }
    });
});

router.get("/catering", function(req, res){
    User.find({type: "Catering"}, function(err, allUsers){
        if(err){
            console.log(err)
        }else{
            res.render("list", {user: allUsers, type: "Catering", currentUser: req.user})
        }
    });
});

router.get("/cars", function(req, res){
    User.find({type: "Wedding Cars"}, function(err, allUsers){
        if(err){
            console.log(err)
        }else{
            res.render("list", {user: allUsers, type: "Wedding Cars", currentUser: req.user})
        }
    });
});

router.get("/parade", function(req, res){
    User.find({type: "Parade"}, function(err, allUsers){
        if(err){
            console.log(err)
        }else{
            res.render("list", {user: allUsers, type: "Parade", currentUser: req.user})
        }
    });
});

router.get("/chocolate", function(req, res){
    User.find({type: "Chocolate Decoration"}, function(err, allUsers){
        if(err){
            console.log(err)
        }else{
            res.render("list", {user: allUsers, type: "Chocolate Decoration", currentUser: req.user})
        }
    });
});

router.get("/venues", function(req, res){
    User.find({type: "Venues"}, function(err, allUsers){
        if(err){
            console.log(err)
        }else{
            res.render("list", {user: allUsers, type: "Venues", currentUser: req.user})
        }
    });
});

router.get("/planner", function(req, res){
    User.find({type: "Planners"}, function(err, allUsers){
        if(err){
            console.log(err)
        }else{
            res.render("list", {user: allUsers, type: "Planners", currentUser: req.user})
        }
    });
});

router.get("/sound", function(req, res){
    User.find({type: "Sound & Light"}, function(err, allUsers){
        if(err){
            console.log(err)
        }else{
            res.render("list", {user: allUsers, type: "Sound & Light", currentUser: req.user})
        }
    });
});

// router.get("/", function(req, res){
	// var flowers = req.body.flowers;
	// photography = req.body.photography.constructor.name,
	// catering = req.body.catering.constructor.name,
	// cars = req.body.cars.constructor.name,
	// parade = req.body.parade.constructor.name.
	// chocolate = req.body.chocolate.constructor.name,
	// venues = req.body.venues.constructor.name,
	// planner = req.body.planner.constructor.name,
	// sound = req.body.sound.constructor.name;

// var flowers = req.body.flowers;

// 		res.render("list");
// });

// router.post("/", function(req, res){
//     var newTypes = new Types({
//         flowers: "flowers",
//         photography: "photography",
//         catering: "catering",
//         cars: "cars",
//         parade: "parade",
//         chocolate: "chocolate",
//         venues: "venues",
//         planner: "planner",
//         sound: "sound"
//     });

//     Types.create(newTypes, function(err, types){
//         if(err){
//             console.log(err);
//             return res.render("landing");
//         }
//         passport.authenticate("local")(req, res, function(){
//             res.redirect("/list");
//         });
//     });
// });

module.exports = router;