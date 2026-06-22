const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
    text: {type: String, maxlength: 50},
    image: {type: String},
    link: {type: String}
}, {timestamps: true});


module.exports = mongoose.model("Project", projectSchema);