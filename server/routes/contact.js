const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");



router.get("/", async (req, res) => {
    try {
        const contact = await Contact.findOne();
        if(!contact){
            return res.status(404).json({message: "Contact not found"});
        };
        res.status(200).json(contact);
    }catch (error) {
        res.status(500).json({message: "Server error"})
    };
});

router.put("/", async (req, res) => {
    try {
        const { phone, email, linkedinUrl, githubUrl } = req.body;
        const contact = await Contact.findOneAndUpdate({}, { phone, email, linkedinUrl, githubUrl }, { new: true, upsert: true });
        res.status(200).json(contact);
    }catch (error) {
        res.status(500).json({message: "Server error"})
    };
});

module.exports = router;