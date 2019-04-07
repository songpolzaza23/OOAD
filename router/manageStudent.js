const express = require('express');
const app = express.Router();
var bodyParser = require('body-parser')
var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var url = "mongodb://admin:admin123@ds145669.mlab.com:45669/ooad";
app.use(bodyParser.json());

app.post("/main/user/getStudent", (req, res) => {
    console.log("getStudent")
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("ooad");
        // console.log(user)
        dbo.collection("Students").find({}).toArray(function (err, result) {
            if (err) {
                res.sendStatus(404)
                console.log(result)
            } else {
                // console.log(result)
                // if (result.length > 0) {
                res.send(result)
                // } else {
                //     res.send('false')
                // }
            }
        })
    });
})

module.exports = app;