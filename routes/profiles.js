var express = require("express");
var router = express.Router();
var passport = require("passport");
var multer = require('multer');
var User = require("../models/user");
var Pic = require("../models/pictures");

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './uploads/');
  },
  filename: function(req, file, cb) {
    cb(null, new Date().toISOString() + file.originalname);
  }
});

const fileFilter = (req, file, cb) => {
  // reject a file
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5
  },
  fileFilter: fileFilter
});

router.get("/", function(req, res){
  res.render("profile");
});

router.get("/:id", function(req, res){
  User.findById(req.params.id).exec(function(err, foundUser){
    if(err){
      console.log(err);
    }else{
      res.render("profile", {user: foundUser})
    }
  });

});

//add desc to profile route
router.get("/:id/new", function(req, res){
 User.findById(req.params.id).exec(function(err, foundUser){
  if(err){
    console.log(err);
  }else{
    res.render("new", {user: foundUser});
  }
});
});

//customize profile route
router.put("/:id", function(req, res){
  User.findByIdAndUpdate(req.params.id, req.body.user, function(err, updatedUser){
    if(err){
      res.redirect("/home");
    }else{
     res.redirect("/profile/" + req.params.id);
   }
 });
})

//edit profile
router.get("/:id/edit", function(req, res){
  User.findById(req.params.id).exec(function(err, foundUser){
    if(err){
      res.redirect("/home");
    }else{
      res.render("edit", {user: foundUser});
    }
  });
});

router.put("/:id", function(req, res){
  User.findByIdAndUpdate(req.params.id, req.body.user, function(err, updatedUser){
    if(err){
      res.redirect("/home");
    }else{
      res.redirect("/profile/" + req.params.id);
    }
  });
});

//Add profile pic
router.get("/:id/newpic", function(req, res){
  User.findById(req.params.id).exec(function(err, foundUser){
    if(err){
      res.redirect("back");
    }else{
      res.render("newpic", {user: foundUser});
    }
  });
});

router.post("/:id", upload.single('img'), (req, res, next) => {
  User.findById(req.params.id, function(err, user){
    if(err){
      res.redirect("/home");
    }else{
      var x = new Pic({img: req.file.path});
      Pic.create(x, function(err, pic){
        if(err){
          console.log(err);
        }else{
                    //add username and id to pic
                    pic.author.id = req.user._id;
                    pic.author.username = req.user.username;
                    //save pic
                    pic.save();
                    user.comments.push(pic);
                    user.save();
                    res.redirect("/profile/" + user._id);
                  }
                });
    }
  });
});

//middleware
function isLoggedIn(req, res, next){
  if(req.isAuthenticated()){
    return next();
  }else{
    res.redirect("/login");
  }
}

module.exports = router;