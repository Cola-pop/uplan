var express = require("express");
var router = express.Router();
var passport = require("passport");

router.get("/", function(req, res){
	res.render("catagories");
});

router.post("/", function(req, res){
	res.render("THIS IS THE POST ROUTE.");
});

module.exports = router;