function refreshPage() {
    window.location.reload();
  }
function updateTerm() {
    var year = document.getElementById('year').value;
    var term = document.getElementById('term').value;

    data = {
        year: year,
        term: term
    }
    console.log(data)
    $.ajax({
        type: "POST",
        contentType: "application/json",
        url: "http://localhost:8000/main/user/updateTerm",
        data: JSON.stringify(data),
        dataType: "json",
        success: function (customer) {
            // var result = JSON.stringify(customer);
            console.log(customer);
            if (customer != "") {
                alert("Update Successful!");
                var show = "ปีการศึกษา : " + customer.year + "เทอม : " + customer.term;
                document.getElementById('TY').innerHTML = show; 
               
            } else {
                alert("Update Incorrect!");
            }
        },
        error: function (e) {
            console.log("ERROR: ", e);
        }
    });

}