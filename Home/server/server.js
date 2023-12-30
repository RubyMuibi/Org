const express = require("express");
const cors = require("cors");

const mongoose = require("mongoose");
const appDB = require("./database/appModel.js");

const app = express();
const port = 4000;

app.use(express.json());
app.use(cors());

require("dotenv").config();
const secretKey = process.env.SecretKey;

app.get("/", (req, res) => {
    try {}
    catch (error) {console.log ("Server Error:", error)}
})

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});




