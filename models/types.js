var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");

var typeSchema = new mongoose.Schema({
	flowers: String,
	photography: String,
	catering: String,
	cars: String,
	parade: String,
	chocolate: String,
	venues: String,
	planner: String,
	sound: String
});

typeSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model("Types", typeSchema);