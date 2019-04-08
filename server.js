const express = require('express')
const app = express()
const bodyParser = require('body-parser')
var login = require('./router/login')
var addStudent = require('./router/chooseManageUser')
var getStudent = require('./router/manageStudent')
var manageTerm = require('./router/manageTerm')
var path = require('path');

app.use(express.static('public'));
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname,'public', 'login.html'));
});

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(login)
app.use(addStudent)
app.use(getStudent)
app.use(manageTerm)

app.listen(process.env.PORT || 8000, () => {
  console.log('Start server at port 8000.')
})