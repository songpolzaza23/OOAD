var ar = []
var r ;
var keepData = ""
$(document).ready(function () {
  $('[data-toggle="tooltip"]').tooltip();
  var actions = $("table td:last-child").html();
  // Append table with add row form on add new button click
  $(".add-new").click(function () {
    $(this).attr("disabled", "disabled");
    var index = $("table tbody tr:last-child").index();
    var row = '<tr>' +
      '<td><input type="text" class="form-control" name="studentID" id="studentID"></td>' +
      '<td><input type="text" class="form-control" name="fristName" id="fristName"></td>' +
      '<td><input type="text" class="form-control" name="lastName" id="lastName"></td>' +
      '<td><input type="text" class="form-control" name="facultry" id="facultry"></td>' +
      '<td><input type="text" class="form-control" name="major" id="major"></td>' +
      '<td><input type="text" class="form-control" name="tel" id="tel"></td>' +
      '<td><input type="text" class="form-control" name="email" id="email"></td>' +
      '<td>' + actions + '</td>' +
      '</tr>';
    $("table").append(row);
    $("table tbody tr").eq(index + 1).find(".add, .edit").toggle();
    $('[data-toggle="tooltip"]').tooltip();

  });
  // Add row on add button click
  $(document).on("click", ".add", function () {
    var empty = false;
    var input = $(this).parents("tr").find('input[type="text"]');
    input.each(function () {
      if (!$(this).val()) {
        $(this).addClass("error");
        empty = true;
      } else {
        $(this).removeClass("error");
      }
    });

    $(this).parents("tr").find(".error").first().focus();
    if (!empty) {
      ar = []
      input.each(function () {
        $(this).parent("td").html($(this).val());
        ar.push($(this).val())
      });
      updateStudents()
      console.log(ar)
      $(this).parents("tr").find(".add, .edit").toggle();
      $(".add-new").removeAttr("disabled");

    }

  });
  // Edit row on edit button click
  $(document).on("click", ".edit", function () {
    $(this).parents("tr").find("td:not(:last-child)").each(function () {
      $(this).html('<input type="text" class="form-control" value="' + $(this).text() + '">');
    });
    $(this).parents("tr").find(".add, .edit").toggle();
    $(".add-new").attr("disabled", "disabled");
  });
  // Delete row on delete button click
  $(document).on("click", ".delete", function () {
    //คอยเรียกใช้ function del
    
    var x = document.getElementsByTagName("tr");
    var table = document.getElementById('table'), rIndex;
    for (var i = 2; i < table.rows.length; i++) {
      table.rows[i].onclick = function () {
        rIndex = this.rowIndex;
        r = rIndex
        keepData = this.cells[0].innerHTML
      }
    }
    console.log(keepData)
    if (keepData != ""){
      data = {
        student_ID: keepData
      }
      $.ajax({
        type: "POST",
        contentType: "application/json",
        url: "http://localhost:8000/main/exam/deleteStudent",
        data: JSON.stringify(data),
        dataType: "json",
        success: function (customer) {
          console.log(customer);
          if (customer != null ) {
            alert("Delete Successful!");
            refreshPage()
    
          } else {
            alert("Delete Incorrect!");
          }
        },
        error: function (e) {
          console.log("ERROR: ", e);
        }
      });
    }
    $(".add-new").removeAttr("disabled");

  });
});

function refreshPage() {
  window.location.reload();
}

function getStudent() {
  $.ajax({
    type: "POST",
    contentType: "application/json",
    url: "http://localhost:8000/main/exam/getStudent",
    dataType: "json",
    success: function (customer) {
      // var result = JSON.stringify(customer);
      console.log(customer);
      if (customer != "") {
        // alert("Login Successful!");
        for (var i = 0; i < customer.length; i++) {
          var row = '<tr>' +
            '<td>' + customer[i].student_ID + '</td>' +
            '<td>' + customer[i].firstName + '</td>' +
            '<td>' + customer[i].lastName + '</td>' +
            '<td>' + customer[i].facultry + '</td>' +
            '<td>' + customer[i].major + '</td>' +
            '<td>' + customer[i].tel + '</td>' +
            '<td>' + customer[i].email + '</td>' +
            '<td>' +
            '<a class="add" title="Add" data-toggle="tooltip"><i class="material-icons">&#xE03B;</i></a>' +
            '<a class="edit" title="Edit" data-toggle="tooltip"><i class="material-icons">&#xE254;</i></a>' +
            '<a class="delete" title="" data-toggle="tooltip" onclick="delStudent(this)"><i class="material-icons">&#xE872;</i></a>' +
            '</td>' +
            '</tr>';
          $("table").append(row);
        }
      } else {
        alert("Login Incorrect!");
      }
    },
    error: function (e) {
      console.log("ERROR: ", e);
    }
  });

}

function updateStudents() {
  data1 = {
    student_ID: ar[0],
    firstName: ar[1],
    lastName: ar[2],
    facultry: ar[3],
    major: ar[4],
    tel: ar[5],
    email: ar[6]
  }

  console.log(data1)
  $.ajax({
    type: "POST",
    contentType: "application/json",
    url: "http://localhost:8000/main/exam/updateStudent",
    data: JSON.stringify(data1),
    dataType: "json",
    success: function (customer) {
      // var result = JSON.stringify(customer);
      console.log(customer);
      if (customer != "") {
        alert("Update Successful!");

      } else {
        alert("Insert Successful!");
      }
    },
    error: function (e) {
      console.log("ERROR: ", e);
    }
  });
}