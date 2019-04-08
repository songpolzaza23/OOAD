const express = require('express');
const app = express.Router();
var bodyParser = require('body-parser')
var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var url = "mongodb://admin:admin123@ds145669.mlab.com:45669/ooad";
app.use(bodyParser.json());

app.post("/main/exam/getRoom", (req, res) => {
    console.log("getRoom")
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("ooad");
        // console.log(exam)
        dbo.collection("Rooms").find({}).toArray(function (err, result) {
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

app.post("/main/exam/updateRoom", (req, res) => {
    console.log("updateRoom")
    console.log(req.body.room_ID)
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("ooad");
        var data = req.body
        dbo.collection("Rooms").find({ room_ID: data.room_ID }).toArray(function (err, result) {
            if (err) {
                res.sendStatus(404)
                console.log(result)
            } else {
                if (result.length > 0) {
                    // res.send(result)
                    console.log(result.length)
                    var newvalues = { $set: { build: data.build, room: data.room, examTime: data.examTime, students: data.students } };
                    dbo.collection("Rooms").updateOne({ room_ID: data.room_ID }, newvalues, function (err, result) {
                        if (err) throw err;
                        console.log("1 document updated");
                        db.close();
                    });
                } else {
                    var newvalues = { room_ID: data.room_ID , build: data.build, room: data.room, examTime: data.examTime, students: data.students };
                    dbo.collection("Rooms").insertOne(newvalues, function (err, result) {
                        if (err) throw err;
                        console.log("1 insert updated");
                        db.close();
                    });
                    res.send('false')
                }
            }
        })
    });
})

app.post("/main/exam/deleteRoom", (req, res) => {
    console.log("deleteRoom")
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("ooad");
        // console.log(exam)
        var data = req.body.room_ID
        console.log(data)
        dbo.collection("Rooms").deleteOne({ room_ID: data }, function (err, result) {
            if (err) {
                res.sendStatus(404)
                console.log("delete : -> " + result)
                res.send('false')

                db.close();
            } else {
                // console.log(result)
                // if (result.length > 0) {
                // res.send(result)
                db.close();
                // } else {
                res.send('true')
                // }
            }
        })
    });
})

module.exports = app;