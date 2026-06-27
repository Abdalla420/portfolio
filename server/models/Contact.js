const mongoose = require("mongoose");


const contactSchema = mongoose.Schema({
    phone: {type: String, maxlength: 15},
    email: {type: String},
    linkedinUrl: {type: String},
    githubUrl: {type: String}
}, {timestamps: true});



 module.exports = mongoose.model("Contact", contactSchema);