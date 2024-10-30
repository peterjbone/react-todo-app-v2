const { Schema, model, models } = require("mongoose");

const userSchema = new Schema({
	firstName: String,
	lastName: String,
	username: { type: String, required: true },
	password: { type: String, required: true }
});

const User = models.User || model("User", userSchema);

module.exports = User;
