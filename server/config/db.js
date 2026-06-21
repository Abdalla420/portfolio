const mongoose = require("mongoose");

async function connectDB() {
    try {
        await mongoose.connect("mongodb://localhost:27017/portfolio");
        console.log("Database connected");
    }catch(error) {
        throw error;
    };
};

module.exports = connectDB;