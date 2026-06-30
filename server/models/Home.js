const mongoose = require("mongoose");

const homeSchema = new mongoose.Schema({
    greeting: {type: String, maxlength: 20},
    name: {type: String},
    title: {type: String},
    summary: {type: String}
}, {timestamps: true});


module.exports = mongoose.model("Home", homeSchema);