const express = require("express");
const router = express.Router();
const Greeting = require("../models/Greeting");

router.get("/", async (req, res) => {
    try {
        const greeting = await Greeting.findOne();
        if(!greeting){
            return res.status(404).json({message: "Greeting not found"});
        };
        res.status(200).json(greeting);
    }catch (error) {
        res.status(500).json({message: "Server error"})
    };
});

router.put("/", async (req, res) => {
    try {
        const { content } = req.body;
        const greeting = await Greeting.findOneAndUpdate({}, { content }, { new: true, upsert: true });
        res.status(200).json(greeting);
    }catch (error) {
        res.status(500).json({message: "Server error"})
    };
});

module.exports = router;