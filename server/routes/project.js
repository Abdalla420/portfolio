const express = require("express");

const Project = require("../models/Project");

const router = express.Router();

const uploads = require("../config/multer")


router.post("/", uploads.single("image"), async (req, res) => {
    try{
        const {text, link} = req.body;
        const image = req.file ? req.file.filename : undefined;
        const project = await Project.create({text, image, link});
        res.status(201).json(project);
    }catch(error){
        res.status(500).json({message: "Server error"});
    }
});
router.get("/", async (req, res) => {
    try{
        const project = await Project.find();
        if(!project || project.length === 0){
            return res.status(404).json({message: "Project not found"});
        }
        res.status(200).json(project);
    }catch(error){
        res.status(500).json({message: "Server error"});
    }
});
router.put("/:id", uploads.single("image"), async (req, res) => {
    try{
        const {text, link} = req.body;
        const image = req.file ? req.file.filename : undefined;
        const project = await Project.findByIdAndUpdate(req.params.id, {text, image, link}, {new: true});
        if(!project){
            res.status(404).json({message: "Project not found"});
        };
        res.status(200).json(project);
    }catch(error){
        res.status(500).json({message: "Server error"});
    }
})
router.delete("/:id", async (req, res) => {
    try{
        const project = await Project.findByIdAndDelete(req.params.id);
        if(!project){
            return res.status(404).json({message: "Project not found"});
        };
        res.status(200).json(project);
    }catch(error){
        res.status(500).json({message: "Server error"})
    }
});




module.exports = router;