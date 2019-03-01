var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");
var Task = require("./task");

var UserSchema = new mongoose.Schema({
	username: String,
	email: String,
	fname: String,
	lname: String,
	password: String,
	type: String,
	phone: String,
	desc: String,
	location: String,
	img: { data: Buffer, contentType: String },
	tasks: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}]
	
});

UserSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model("User", UserSchema);