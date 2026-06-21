const mongoose = require("mongoose");

const aboutSchema = new mongoose.Schema({
    content: {type: String, maxlength: 1500}
}, {timestamps: true});


module.exports = mongoose.model("About", aboutSchema);