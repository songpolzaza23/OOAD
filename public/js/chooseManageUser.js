function manageStudent(){
    var data = {
        username : username,
        type : type
    }
    console.log(data)
    $.ajax({
        type: "POST",
        contentType: "application/json",
        url: "http://localhost:8000/main/user/manageStudent",
        data: JSON.stringify(data),
        dataType: "json",
        success: function (customer) {
          // var result = JSON.stringify(customer);
          console.log(customer);
          if (customer != "") {
            alert("Login Successful!");
            window.location = "./../../main/user/manageStudent.html?"+customer[0].username+" "+customer[0].type;
          } else {
            alert("Login Incorrect!");
          }
        },
        error: function (e) {
          console.log("ERROR: ", e);
        }
      });
}

function manageTeacher(){
    var data = {
        username : username,
        type : type
    }
    console.log(data)
    $.ajax({
        type: "POST",
        contentType: "application/json",
        url: "http://localhost:8000/main/user/manageTeacher",
        data: JSON.stringify(data),
        dataType: "json",
        success: function (customer) {
          // var result = JSON.stringify(customer);
          console.log(customer);
          if (customer != "") {
            alert("Login Successful!");
            window.location = "./../../main/user/manageTeacher.html?"+customer[0].username+" "+customer[0].type;
          } else {
            alert("Login Incorrect!");
          }
        },
        error: function (e) {
          console.log("ERROR: ", e);
        }
      });
}

function manageStaff(){
    var data = {
        username : username,
        type : type
    }
    console.log(data)
    $.ajax({
        type: "POST",
        contentType: "application/json",
        url: "http://localhost:8000/main/user/manageStaff",
        data: JSON.stringify(data),
        dataType: "json",
        success: function (customer) {
          // var result = JSON.stringify(customer);
          console.log(customer);
          if (customer != "") {
            alert("Login Successful!");
            window.location = "./../../main/user/manageStaff.html?"+customer[0].username+" "+customer[0].type;
          } else {
            alert("Login Incorrect!");
          }
        },
        error: function (e) {
          console.log("ERROR: ", e);
        }
      });
}

function manageTerm(){
  var data = {
    username : username,
    type : type
}
  console.log(data)
  $.ajax({
      type: "POST",
      contentType: "application/json",
      url: "http://localhost:8000/main/user/manageTerm",
      data: JSON.stringify(data),
      dataType: "json",
      success: function (customer) {
        // var result = JSON.stringify(customer);
        console.log(customer);
        if (customer != "") {
          alert("Login Successful!");
          window.location = "./../../main/manageTerm/term.html?"+customer[0].username+" "+customer[0].type;
        } else {
          alert("Login Incorrect!");
        }
      },
      error: function (e) {
        console.log("ERROR: ", e);
      }
    });
}

function manageExam(){
  var data = {
    username : username,
    type : type
}
  console.log(data)
  $.ajax({
      type: "POST",
      contentType: "application/json",
      url: "http://localhost:8000/main/user/manageExamMain",
      data: JSON.stringify(data),
      dataType: "json",
      success: function (customer) {
        // var result = JSON.stringify(customer);
        console.log(customer);
        if (customer != "") {
          alert("Login Successful!");
          window.location = "./../../main/manageExam/manageExamMain.html?"+customer[0].username+" "+customer[0].type;
        } else {
          alert("Login Incorrect!");
        }
      },
      error: function (e) {
        console.log("ERROR: ", e);
      }
    });
}

function manageRoom(){
  var data = {
    username : username,
    type : type
}
  console.log(data)
  $.ajax({
      type: "POST",
      contentType: "application/json",
      url: "http://localhost:8000/main/user/manageRoom",
      data: JSON.stringify(data),
      dataType: "json",
      success: function (customer) {
        // var result = JSON.stringify(customer);
        console.log(customer);
        if (customer != "") {
          alert("Login Successful!");
          window.location = "./../../main/manageExam/manageRoom.html?"+customer[0].username+" "+customer[0].type;
        } else {
          alert("Login Incorrect!");
        }
      },
      error: function (e) {
        console.log("ERROR: ", e);
      }
    });
}
