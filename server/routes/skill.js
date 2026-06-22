const express = require("express");

const Skill = require("../models/Skill");

const router = express.Router();


router.post("/", async (req, res) => {
    try {
        const {text, svg} = req.body;
        const skill = await Skill.create({text, svg});
        // note to self, 201 for created 
        res.status(201).json(skill);
    }catch(error) {
        res.status(500).json({message: "Server Error"});
    };
});
router.get("/", async (req, res) => {
    try {
        const skill = await Skill.find();
        // note to self, since find return and empty array if empty and not null
        //  we add a checker if it is empty
        if(!skill || skill.length === 0){
            return res.status(404).json({message: "Skill not found"});
        };
        res.status(200).json(skill);
    }catch(error){
        res.status(500).json({message: "Server Error"});
    };
});


router.put("/:id", async (req, res) => {
    try{
        const {text, svg} = req.body;
        const skill = await Skill.findByIdAndUpdate(req.params.id, {text, svg}, {new: true});
        if(!skill){
            return res.status(404).json({message: "Skill not found"})
        };
        res.status(200).json(skill);
    }catch(error){
        res.status(500).json({message: "Server Error"})
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const skill = await Skill.findByIdAndDelete(req.params.id);
        if(!skill){
            return res.status(404).json({message: "Skill not found"})
        };
        res.status(200).json(skill);
    }catch (error){
        res.status(500).json({message: "Server Error"});
    };
});

module.exports = router;