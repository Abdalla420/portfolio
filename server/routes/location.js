const express = require("express");
const router = express.Router();
const Location = require("../models/Location.js");

router.get("/", async (req, res) => {
    try {
        const location = await Location.findOne();
        if(!location){
            return res.status(404).json({message: "Location not found"});
        };
        res.status(200).json(location);
    }catch (error) {
        res.status(500).json({message: "Server error"});
    };
});

router.put("/", async (req, res) => {
    try {
        const { content } = req.body;
        const location = await Location.findOneAndUpdate({}, { content }, { new: true, upsert: true });
        res.status(200).json(location);
    } catch(error) {
        res.status(500).json({message: "Server error"});
    };
});

module.exports = router;