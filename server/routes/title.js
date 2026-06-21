const express = require("express");
const router = express.Router();
const Title = require("../models/Title.js");

router.get("/", async (req, res) => {
    try {
        const title = await Title.findOne();
        if(!title){
            return res.status(404).json({message: "Title not found"});
        };
        res.status(200).json(title);
    }catch (error) {
        res.status(500).json({message: "Server error"});
    };
});

router.put("/", async (req, res) => {
    try {
        const { content } = req.body;
        // note to my self,
        //  {} since there is only one title,
        //  { new: true } tells mongoose to return the updated document, 
        //  { upsert: true } if nothing matches create it instead of returning null
        const title = await Title.findOneAndUpdate({}, { content }, { new: true, upsert: true });
        res.status(200).json(title);
    } catch(error) {
        res.status(500).json({message: "Server error"});
    };
});

module.exports = router;