var mongoose = require("mongoose");
var User = require("./user");

var taskSchema = new mongoose.Schema({
	name: String,
	date: String,
	checked: Boolean,
	finished: Boolean,
	users: [{type: mongoose.Schema.Types.ObjectId, ref: 'Task'}]

});

module.exports = mongoose.model("Task", taskSchema);