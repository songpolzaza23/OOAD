const express = require('express');
const app = express.Router();
var bodyParser = require('body-parser')
var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var url = "mongodb://admin:admin123@ds145669.mlab.com:45669/ooad";
app.use(bodyParser.json());

app.post("/main/user/updateTerm", (req, res) => {
    console.log("updateTerm")
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("ooad");
        var data = req.body
        var newvalues = { $set: { year: data.year, term: data.term} };
        dbo.collection("manageYears").updateOne({}, newvalues, function (err, result) {
            if (err) {
                res.sendStatus(404)
                console.log(result)
            } else {
                console.log(data)
                res.send(data)
            }
        })
    });
})
module.exports = app;