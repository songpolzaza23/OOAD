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
      '<td><input type="text" class="form-control" name="room_ID" id="room_ID"></td>' +
      '<td><input type="text" class="form-control" name="build" id="build"></td>' +
      '<td><input type="text" class="form-control" name="room" id="room"></td>' +
      '<td><input type="text" class="form-control" name="examTime" id="examTime"></td>' +
      '<td><input type="text" class="form-control" name="students" id="students"></td>' +
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
      updateRoom()
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
        room_ID: keepData
      }
      $.ajax({
        type: "POST",
        contentType: "application/json",
        url: "http://localhost:8000/main/exam/deleteRoom",
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

function getRoom() {
  $.ajax({
    type: "POST",
    contentType: "application/json",
    url: "http://localhost:8000/main/exam/getRoom",
    dataType: "json",
    success: function (customer) {
      // var result = JSON.stringify(customer);
      console.log(customer);
      if (customer != "") {
        // alert("Login Successful!");
        for (var i = 0; i < customer.length; i++) {
          var row = '<tr>' +
            '<td>' + customer[i].room_ID + '</td>' +
            '<td>' + customer[i].build + '</td>' +
            '<td>' + customer[i].room + '</td>' +
            '<td>' + customer[i].examTime + '</td>' +
            '<td>' + customer[i].students + '</td>' +
            '<td>' +
            '<a class="add" title="Add" data-toggle="tooltip"><i class="material-icons">&#xE03B;</i></a>' +
            '<a class="edit" title="Edit" data-toggle="tooltip"><i class="material-icons">&#xE254;</i></a>' +
            '<a class="delete" title="" data-toggle="tooltip"><i class="material-icons">&#xE872;</i></a>' +
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

function updateRoom() {
  data1 = {
    room_ID: ar[0],
    build: ar[1],
    room: ar[2],
    examTime: ar[3],
    students: ar[4]
  }

  console.log(data1)
  $.ajax({
    type: "POST",
    contentType: "application/json",
    url: "http://localhost:8000/main/exam/updateRoom",
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