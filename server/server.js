const connectDB = require("./config/db.js");
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");

const app = express();

const port = 5000;
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

connectDB();

const titleRouter = require("./routes/title");
const greetingRouter = require("./routes/greeting");
const aboutRouter = require("./routes/about");
const locationRouter = require("./routes/location");
const skillRouter = require("./routes/skill");
const projectRouter = require("./routes/project");

app.use("/api/title", titleRouter);
app.use("/api/greeting", greetingRouter);
app.use("/api/about", aboutRouter);
app.use("/api/location", locationRouter);
app.use("/api/skill", skillRouter);
app.use("/api/project", projectRouter);


app.listen(port, _ => console.log(`Server started at ${port}`));