const express = require("express");
const bodyParser = require("body-parser")
const fs = require("fs");
const { error } = require("console");
const app = new express();
const portnr = 8081;
const jsonFilePath = "./data.json";

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.listen(portnr, () => {
    console.log("server ligger nu på 8081")
});
//skapa en get metod som returnerar index.html
app.get("/", (req, res) =>{
    res.sendFile("index.html", {root: __dirname});
});

app.get("/Login", (req, res) =>{
    res.sendFile("login.html", {root: __dirname});
});

app.get("/about", (req, res) => {
    res.redirect("/");

});

//skapa en post metod som return body data som en json string
app.post("/", (req, res) => {
    let data = req.body;
    data.age = parseInt(data.age);
    let jsondata = JSON.stringify(data, null, 2);
    console.log(jsondata);
    fs.writeFile(jsonFilePath, jsondata, (err) => {
        if(err) console.log(err);
    });

    res.send('Data recieved: ' + jsondata);
    
});