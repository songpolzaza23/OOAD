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
            window.location = "./../../main/user/addStudent.html?"+customer[0].username+" "+customer[0].type;
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
            window.location = "./../../main/user/addTeacher.html?"+customer[0].username+" "+customer[0].type;
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
            window.location = "./../../main/user/addStaff.html?"+customer[0].username+" "+customer[0].type;
          } else {
            alert("Login Incorrect!");
          }
        },
        error: function (e) {
          console.log("ERROR: ", e);
        }
      });
}


