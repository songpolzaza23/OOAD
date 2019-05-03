var username = ""
var type = ""

function setuser() {

  var query = location.search.substring(1);
  var dataText = query.split("%20")
  $('#userText').text(dataText[0] + ": " + dataText[1])

  username = dataText[0]
  type = dataText[1]

  console.log(dataText)

}
function manageStudent() {
  var data = {
    username: username,
    type: type
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
        window.location = "./../../main/user/manageStudent.html?" + customer[0].username + " " + customer[0].type;
      } else {
        alert("Login Incorrect!");
      }
    },
    error: function (e) {
      console.log("ERROR: ", e);
    }
  });
}

function manageTeacher() {
  var data = {
    username: username,
    type: type
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
        window.location = "./../../main/user/manageTeacher.html?" + customer[0].username + " " + customer[0].type;
      } else {
        alert("Login Incorrect!");
      }
    },
    error: function (e) {
      console.log("ERROR: ", e);
    }
  });
}

function manageStaff() {
  var data = {
    username: username,
    type: type
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
        window.location = "./../../main/user/manageStaff.html?" + customer[0].username + " " + customer[0].type;
      } else {
        alert("Login Incorrect!");
      }
    },
    error: function (e) {
      console.log("ERROR: ", e);
    }
  });
}

function manageTerm() {
  var data = {
    username: username,
    type: type
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
        window.location = "./../../main/manageTerm/term.html?" + customer[0].username + " " + customer[0].type;
      } else {
        alert("Login Incorrect!");
      }
    },
    error: function (e) {
      console.log("ERROR: ", e);
    }
  });
}

function manageExam() {
  var data = {
    username: username,
    type: type
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
        window.location = "./../../main/manageExam/manageExamMain.html?" + customer[0].username + " " + customer[0].type;
      } else {
        alert("Login Incorrect!");
      }
    },
    error: function (e) {
      console.log("ERROR: ", e);
    }
  });
}

function searchRoom() {
  var data = {
    username: username,
    type: type
  }
  console.log("go to searchRoom")
  $.ajax({
    type: "POST",
    contentType: "application/json",
    url: "http://localhost:8000/main/login",
    data: JSON.stringify(data),
    dataType: "json",
    success: function (res) {
      console.log(res);
      if (res != "") {
        alert("now searchRoom page");
        window.location = "./../../main/manageSearchRoom/searchRoom.html?" + res[0].username + " " + res[0].type;
      } else {
        alert("Login Incorrect!");
      }
    },
    error: function (e) {
      console.log("ERROR: ", e);
    }
  });
}

function manageRoom() {
  var data = {
    username: username,
    type: type
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
        window.location = "./../../main/manageExam/manageRoom.html?" + customer[0].username + " " + customer[0].type;
      } else {
        alert("Login Incorrect!");
      }
    },
    error: function (e) {
      console.log("ERROR: ", e);
    }
  });
}

function manageSubject() {
  var data = {
    username: username,
    type: type
  }
  console.log(data)
  $.ajax({
    type: "POST",
    contentType: "application/json",
    url: "http://localhost:8000/main/user/manageSubject",
    data: JSON.stringify(data),
    dataType: "json",
    success: function (customer) {
      // var result = JSON.stringify(customer);
      console.log(customer);
      if (customer != "") {
        alert("Login Successful!");
        window.location = "./../../main/subjects/manageSubject.html?" + customer[0].username + " " + customer[0].type;
      } else {
        alert("Login Incorrect!");
      }
    },
    error: function (e) {
      console.log("ERROR: ", e);
    }
  });
}

function manageUser() {
  var data = {
    username: username,
    type: type
  }
  console.log(data)
  $.ajax({
    type: "POST",
    contentType: "application/json",
    url: "http://localhost:8000/main/user/manageUser",
    data: JSON.stringify(data),
    dataType: "json",
    success: function (customer) {
      // var result = JSON.stringify(customer);
      console.log(customer);
      if (customer != "") {
        alert("Login Successful!");
        window.location = "./../../main/index.html?" + customer[0].username + " " + customer[0].type;
      } else {
        alert("Login Incorrect!");
      }
    },
    error: function (e) {
      console.log("ERROR: ", e);
    }
  });
}

  function manageCourse() {
    var data = {
      username: username,
      type: type
    }
    console.log(data)
    $.ajax({
      type: "POST",
      contentType: "application/json",
      url: "http://localhost:8000/main/login",
      data: JSON.stringify(data),
      dataType: "json",
      success: function (customer) {
        // var result = JSON.stringify(customer);
        console.log(customer);
        if (customer != "") {
          alert("Login Successful!");
          window.location = "./../../main/manageCourse/manageCourse.html?" + customer[0].username + " " + customer[0].type;
        } else {
          alert("Login Incorrect!");
        }
      },
      error: function (e) {
        console.log("ERROR: ", e);
      }
    });
}

function manageBuilding() {
  var data = {
    username: username,
    type: type
  }
  console.log(data)
  $.ajax({
    type: "POST",
    contentType: "application/json",
    url: "http://localhost:8000/main/login",
    data: JSON.stringify(data),
    dataType: "json",
    success: function (customer) {
      // var result = JSON.stringify(customer);
      console.log(customer);
      if (customer != "") {
        alert("Login Successful!");
        window.location = "./../../main/manageBuilding/manageBuilding.html?" + customer[0].username + " " + customer[0].type;
      } else {
        alert("Login Incorrect!");
      }
    },
    error: function (e) {
      console.log("ERROR: ", e);
    }
  });
}

function checkExamer() {
  var data = {
    username: username,
    type: type
  }
  console.log(data)
  $.ajax({
    type: "POST",
    contentType: "application/json",
    url: "http://localhost:8000/main/login",
    data: JSON.stringify(data),
    dataType: "json",
    success: function (customer) {
      // var result = JSON.stringify(customer);
      console.log(customer);
      if (customer != "") {
        alert("Login Successful!");
        window.location = "./../../main/checkExamer/checkMain.html?" + customer[0].username + " " + customer[0].type;
      } else {
        alert("Login Incorrect!");
      }
    },
    error: function (e) {
      console.log("ERROR: ", e);
    }
  });
}

function checkExamScore() {
  var data = {
    username: username,
    type: type
  }
  console.log(data)
  $.ajax({
    type: "POST",
    contentType: "application/json",
    url: "http://localhost:8000/main/login",
    data: JSON.stringify(data),
    dataType: "json",
    success: function (customer) {
      // var result = JSON.stringify(customer);
      console.log(customer);
      if (customer != "") {
        alert("Login Successful!");
        window.location = "./../../main/checkExamScore/checkExamScore.html?" + customer[0].username + " " + customer[0].type;
      } else {
        alert("Login Incorrect!");
      }
    },
    error: function (e) {
      console.log("ERROR: ", e);
    }
  });
}

function viewExamList() {
  var data = {
    username: username,
    type: type
  }
  console.log(data)
  $.ajax({
    type: "POST",
    contentType: "application/json",
    url: "http://localhost:8000/main/login",
    data: JSON.stringify(data),
    dataType: "json",
    success: function (customer) {
      // var result = JSON.stringify(customer);
      console.log(customer);
      if (customer != "") {
        alert("Login Successful!");
        window.location = "./../../main/viewExamList/viewExamList.html?" + customer[0].username + " " + customer[0].type;
      } else {
        alert("Login Incorrect!");
      }
    },
    error: function (e) {
      console.log("ERROR: ", e);
    }
  });
}