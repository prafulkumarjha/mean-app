const express = require('express');
const app = express();
const mongoose = require('mongoose');
const crypto = require('crypto');
const dbConfig = require('./config/database');
const path = require("path");


mongoose.Promise = global.Promise;

mongoose.connect(dbConfig.uri, (err) => {

    if (err)
        console.log("could not connect to mongo DB : " + err);
    else
        console.log("Ahahaha!! Connection to database " + dbConfig.db + " estabilished");
});


app.use(express.static(__dirname + "/webapp/dist"));



app.get("/", (req, res) => {

    res.sendFile(path.join(__dirname + "/webapp/dist/index.html"));
});

app.listen(8080, () => {

    console.log("Server listening at port 8080");
});