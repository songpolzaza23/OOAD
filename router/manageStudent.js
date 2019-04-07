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

app.post("/main/user/updateStudent", (req, res) => {
    console.log("updateStudent")
    console.log(req.body.student_ID)
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("ooad");
        var data = req.body
        dbo.collection("Students").find({ student_ID: data.student_ID }).toArray(function (err, result) {
            if (err) {
                res.sendStatus(404)
                console.log(result)
            } else {
                if (result.length > 0) {
                    // res.send(result)
                    console.log(result.length)
                    var newvalues = { $set: { firstName: data.firstName, lastName: data.lastName, facultry: data.facultry, major: data.major, tel: data.tel, email: data.email } };
                    dbo.collection("Students").updateOne({ student_ID: data.student_ID }, newvalues, function (err, result) {
                        if (err) throw err;
                        console.log("1 document updated");
                        db.close();
                    });
                } else {
                    var newvalues = {student_ID: data.student_ID, firstName: data.firstName, lastName: data.lastName, facultry: data.facultry, major: data.major, tel: data.tel, email: data.email};
                    dbo.collection("Students").insertOne(newvalues, function (err, result) {
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

app.post("/main/user/deleteStudent", (req, res) => {
    console.log("deleteStudent")
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("ooad");
        // console.log(user)
        var data = req.body.student_ID
        console.log(data)
        dbo.collection("Students").deleteOne({ student_ID: data }, function (err, result) {
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