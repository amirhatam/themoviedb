const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    favorites: [{ type: String }],
    created: { type: Date, default: Date.now }
})

const userModel = mongoose.model("User", userSchema)

module.exports = userModel
