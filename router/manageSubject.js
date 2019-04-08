const express = require('express');
const app = express.Router();
var bodyParser = require('body-parser')
var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var url = "mongodb://admin:admin123@ds145669.mlab.com:45669/ooad";
app.use(bodyParser.json());

app.post("/main/subject/getSubject", (req, res) => {
    console.log("getSubject")
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("ooad");
        // console.log(user)
        dbo.collection("Subjects").find({}).toArray(function (err, result) {
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

app.post("/main/subject/updateSubject", (req, res) => {
    console.log("updateSubject")
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("ooad");
        var data = req.body
        dbo.collection("Subjects").find({ subjectID: data.subjectID }).toArray(function (err, result) {
            if (err) {
                res.sendStatus(404)
                console.log(result)
            } else {
                if (result.length > 0) {
                    // res.send(result)
                    console.log(result.length)
                    var newvalues = { $set: { nameSubject : data.nameSubject , numSuject : data.numSuject , nameTeacher : data.nameTeacher} };
                    dbo.collection("Subjects").updateOne({ subjectID: data.subjectID }, newvalues, function (err, result) {
                        if (err) throw err;
                        console.log("1 document updated");
                        db.close();
                    });
                } else {
                    var newvalues = {subjectID : data.subjectID , nameSubject : data.nameSubject , numSuject : data.numSuject , nameTeacher : data.nameTeacher};
                    dbo.collection("Subjects").insertOne(newvalues, function (err, result) {
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

app.post("/main/subject/deleteSubject", (req, res) => {
    console.log("deleteStudent")
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("ooad");
        // console.log(user)
        var data = req.body.subjectID
        console.log(data)
        dbo.collection("Subjects").deleteOne({ subjectID: data }, function (err, result) {
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