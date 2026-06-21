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

app.use("/api/title", titleRouter);
app.use("/api/greeting", greetingRouter);
app.use("/api/about", aboutRouter);

app.listen(port, _ => console.log(`Server started at ${port}`));