/* global moment */

$(document).ready(function() {

  // When user clicks add-btn
  $("#btn").on("click", function(event) {
    event.preventDefault();

    // Make a newChirp object
    var newBook = {
      name: $("#name").val().trim(),
      email: $("#email").val().trim(),
      phone: $("#phone").val().trim(),
      date: $("#date").val().trim(),
      address: $("#address").val().trim(),
      hours: $("#hrs").val().trim(),
      // discount: $("#disc").val().trim(),
      deposit: $("#depo").val().trim(),
      totalBal: $("#tot").html().trim(),
      message: $("#msg").val().trim(),
      checkN: $("#checkN").val().trim(),
      mileage: $("#mile").val().trim(),
      created_at: moment().format("YYYY-MM-DD HH:mm:ss")
    };

    console.log(newBook);

    // Send an AJAX POST-request with jQuery
    $.post("/api/new", newBook)
      // On success, run the following code
      .done(function() {

        var row = $("<div>");
        row.addClass("book");

        row.append("<p>" + newBook.name +  " </p>");
        row.append("<p>" + newBook.email + "</p>");
        row.append("<p>" + newBook.phone + "</p>");
        row.append("<p>" + newBook.date + "</p>");
        row.append("<p>" + newBook.address + "</p>");
        // row.append("<p>" + newBook.hours + "</p>");
        // row.append("<p>" + newBook.discount + "</p>");
        row.append("<p>" + newBook.deposit + "</p>");
        row.append("<p>" + newBook.mileage + "</p>");
        row.append("<p>" + newBook.totalBal + "</p>");
        row.append("<p>" + newBook.message + "</p>");
        row.append("<p>At " + moment(newBook.created_at).format("h:mma on dddd") + "</p>");
        

        $("#chirp-area").prepend(row);
    });

    // Empty each input box by replacing the value with an empty string
    $("#name").val("");
    $("#email").val("");
    $("#phone").val("");
    $("#msg").val("");
    $("#tot").html("$" + 0);
    $("#address").val("");
    $("#date").val("");
    $("#checkN").val("");
    $("#mile").val("");
    $("#hrs").val("");
    $("#depo").val("");
    $("#disc").val("");
  });

     // Declare variable

    var pricePerHr = 50;
    var mileage = $("#mile").val();
    var hours = $("#hrs").val();
    var discount = $("#disc").val();
    var deposit = $("#depo").val();
    mileage = mileage * 2;
    var totalBal = pricePerHr * hours - deposit
    

    document.onkeyup = function(event) {
    
      var hours = $("#hrs").val();
      var discount = $("#disc").val();
      var deposit = $("#depo").val();
      var mileage = $("#mile").val();
      var totalBal = pricePerHr * hours - deposit
      totalBal = $("#tot").html(totalBal);
      console.log(totalBal);
    }

  // When the page loads, grab all of our chirps
  $.get("/api/all", function(data) {

    if (data.length !== 0) {

      // for (var i = 0; i < data.length; i++) {

        var row = $("<div>");
        row.addClass("book");

        row.append("<p>" + data[data.length-1].name + " </p>" + "<br>");
        // row.append("<p>" + data[data.length-1].email + "</p>");
        // row.append("<p>" + "Phone#: " + data[data.length-1].phone + "</p>");
        row.append("<p>" + "Event Date: " + data[data.length-1].date + "</p>" + "<br>");
        row.append("<p>" + data[data.length-1].address + "</p>" + "<br>");
        // row.append("<p>" + data[data.length-1].hours + "</p>");
        // row.append("<p>" + data[data.length-1].discount + "</p>");
        row.append("<p>" + "Deposit: " + "$" + data[data.length-1].deposit + "</p>");
        // row.append("<p>" + data[data.length-1].mileage + "</p>");
        row.append("<p>" + "Total Balance: " + "$"+ data[data.length-1].totalBal + "</p>" + "<br>");
        row.append("<p>" + "Message: " + data[data.length-1].message + "</p>");
        // row.append("<p>At " + moment(data[i].created_at).format("h:mma on dddd") + "</p>");


 


        $("#chirp-area").append(row);
      // }
    }
  });
});
