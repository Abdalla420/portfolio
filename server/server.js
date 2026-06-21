const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");

const app = express();

const port = 5000;
app.use(cors());
app.use(express.json())
app.use(morgan("dev"));


app.listen(port, _ => console.log(`Server started at ${port}`));