const mongoose = require("mongoose");

const locationSchema = new mongoose.Schema({
    content: {type: String, maxlength: 50}
}, {timestamps: true});


module.exports = mongoose.model("Location", locationSchema);