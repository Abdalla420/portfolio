const mongoose = require("mongoose");


const educationSchema = mongoose.Schema({
    school: {type: String},
    degree: {type: String},
    fieldOfStudy: {type: String}
}, {timestamps: true});



 module.exports = mongoose.model("Education", educationSchema);