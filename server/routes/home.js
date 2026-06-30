const express = require("express");
const router = express.Router();
const Home = require("../models/Home.js");

router.get("/", async (req, res) => {
    try {
        const home = await Home.findOne();
        if(!home){
            return res.status(404).json({message: "Home not found"});
        };
        res.status(200).json(home);
    }catch (error) {
        res.status(500).json({message: "Server error"});
    };
});

router.put("/", async (req, res) => {
    try {
        const { greeting, name, title, summary } = req.body;
        const home = await Home.findOneAndUpdate({}, { greeting, name, title, summary }, { new: true, upsert: true });
        res.status(200).json(home);
    } catch(error) {
        res.status(500).json({message: "Server error"});
    };
});

module.exports = router;