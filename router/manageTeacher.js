const express = require('express');
const app = express.Router();
var bodyParser = require('body-parser')
var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var url = "mongodb://admin:admin123@ds145669.mlab.com:45669/ooad";
app.use(bodyParser.json());

app.post("/main/user/getTeacher", (req, res) => {
    console.log("getTeacher")
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("ooad");
        // console.log(user)
        dbo.collection("Teachers").find({}).toArray(function (err, result) {
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

app.post("/main/user/updateTeacher", (req, res) => {
    console.log("updateTeacher")
    console.log(req.body.teacher_ID)
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("ooad");
        var data = req.body
        dbo.collection("Teachers").find({ teacher_ID: data.teacher_ID }).toArray(function (err, result) {
            if (err) {
                res.sendStatus(404)
                console.log(result)
            } else {
                if (result.length > 0) {
                    // res.send(result)
                    console.log(result.length)
                    var newvalues = { $set: { firstName: data.firstName, lastName: data.lastName, facultry: data.facultry, major: data.major, tel: data.tel, email: data.email } };
                    dbo.collection("Teachers").updateOne({ teacher_ID: data.teacher_ID }, newvalues, function (err, result) {
                        if (err) throw err;
                        console.log("1 document updated");
                        db.close();
                    });
                } else {
                    var newvalues = {teacher_ID: data.teacher_ID, firstName: data.firstName, lastName: data.lastName, facultry: data.facultry, major: data.major, tel: data.tel, email: data.email};
                    dbo.collection("Teachers").insertOne(newvalues, function (err, result) {
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

app.post("/main/user/deleteTeacher", (req, res) => {
    console.log("deleteTeacher")
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("ooad");
        // console.log(user)
        var data = req.body.student_ID
        console.log(data)
        dbo.collection("Teachers").deleteOne({ teacher_ID: data }, function (err, result) {
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