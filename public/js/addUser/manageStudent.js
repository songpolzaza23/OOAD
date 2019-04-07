$(document).ready(function () {
  $('[data-toggle="tooltip"]').tooltip();
  var actions = $("table td:last-child").html();
  // Append table with add row form on add new button click
  $(".add-new").click(function () {
      $(this).attr("disabled", "disabled");
      var index = $("table tbody tr:last-child").index();
      var row = '<tr>' +
          '<td><input type="text" class="form-control" name="name" id="name"></td>' +
          '<td><input type="text" class="form-control" name="factuly" id="factuly"></td>' +
          '<td><input type="text" class="form-control" name="phone" id="phone"></td>' +
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
      var name = $(this).parents("tr").find('input[name="name"]')
      var id = $(this).parents("tr").find('input[name="factuly"]')
      var pop = $(this).parents("tr").find('input[name="phone"]')
      // console.log(name.val())
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
          input.each(function () {
              $(this).parent("td").html($(this).val());
              console.log(name.val() + " " + id.val() + " " + pop.val())
          });
          $(this).parents("tr").find(".add, .edit").toggle();
          $(".add-new").removeAttr("disabled");
          // refreshPage()
          // getStudent()
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
      $(this).parents("tr").remove();
      //
      $(".add-new").removeAttr("disabled");
  });
});

function editStudent() {
  //เอาไว้แก้
}

function refreshPage() {
  window.location.reload();
} 

function addStudent() {

}

function getStudent() {
  $.ajax({
    type: "POST",
    contentType: "application/json",
    url: "http://localhost:8000/main/user/getStudent",
    dataType: "json",
    success: function (customer) {
      // var result = JSON.stringify(customer);
      console.log(customer);
      if (customer != "") {
        alert("Login Successful!");
        for (var i = 0; i < customer.length ; i++) {
          var row = '<tr>' +
            '<td>' + customer[i]._id + '</td>' +
            '<td>' + customer[i].student_ID + '</td>' +
            '<td>' + customer[i].firstName + '</td>' +
            '<td>' +
            '<a class="add" title="Add" data-toggle="tooltip"onclick="editStudent()"><i class="material-icons">&#xE03B;</i></a>' +
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