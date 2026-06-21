const mongoose = require("mongoose");

const greetingSchema = mongoose.Schema({
    content: {type: String, maxLength: 100}
}, {timestamps: true});

module.exports = mongoose.model("Greeting", greetingSchema);