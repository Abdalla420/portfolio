const mongoose = require("mongoose");

const titleSchema = new mongoose.Schema({
    content: {type: String, maxlength: 50}
}, {timestamps: true});


module.exports = mongoose.model("Title", titleSchema);