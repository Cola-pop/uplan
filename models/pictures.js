var mongoose = require("mongoose");

var pictureSchema = new mongoose.Schema({
	path: String,
	img: String,
	author: {
		id: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User"
		},
		username: String
	}
});

// { data: Buffer, contentType: String }

module.exports = mongoose.model("Pic", pictureSchema);