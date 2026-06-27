const express = require("express");
const router = express.Router();
const Education = require("../models/Education");



router.get("/", async (req, res) => {
    try {
        const education = await Education.findOne();
        if(!education){
            return res.status(404).json({message: "Education not found"});
        };
        res.status(200).json(education);
    }catch (error) {
        res.status(500).json({message: "Server error"})
    };
});

router.put("/", async (req, res) => {
    try {
        const { school, degree, fieldOfStudy } = req.body;
        const education = await Education.findOneAndUpdate({}, { school, degree, fieldOfStudy }, { new: true, upsert: true });
        res.status(200).json(education);
    }catch (error) {
        res.status(500).json({message: "Server error"})
    };
});

module.exports = router;