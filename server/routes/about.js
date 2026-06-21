const express = require("express");
const router = express.Router();
const About = require("../models/About.js");

router.get("/", async (req, res) => {
    try {
        const about = await About.findOne();
        if(!about){
            return res.status(404).json({message: "About not found"});
        };
        res.status(200).json(about);
    }catch (error) {
        res.status(500).json({message: "Server error"});
    };
});

router.put("/", async (req, res) => {
    try {
        const { content } = req.body;
        const about = await About.findOneAndUpdate({}, { content }, { new: true, upsert: true });
        res.status(200).json(about);
    } catch(error) {
        res.status(500).json({message: "Server error"});
    };
});

module.exports = router;