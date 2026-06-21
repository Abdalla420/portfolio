const mongoose = require("mongoose");

const skillSchema = new mongoose.Schema({
    text: {type: String, maxLength: 20},
    svg: {type: String}
}, {timestamps: true});


module.exports = mongoose.model("Skill", skillSchema);