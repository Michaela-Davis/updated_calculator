$(document).ready(function() {

  // Add Form
  // use jQuery to grab the addForm and attach submit event
  $("#addForm").submit(function(event) {
    // Collect input from form
    var inputOne = $("#addInputOne").val();
    var inputTwo = $("#addInputTwo").val();

    // Add inputs together
    // Declaring a third variable called result
    var result = parseInt(inputOne) + parseInt(inputTwo);

    // Use jQuery to display result
    $("#addOutput").text(result);

    event.preventDefault();
  });

  // Subraction Form
  // use jQuery to grab the subtractForm and attach submit event
  $("#subtractForm").submit(function(event) {
    // Collect input from form
    var inputOne = $("#subtractInputOne").val();
    var inputTwo = $("#subtractInputTwo").val();

    // Add inputs together
    // Declaring a third variable called result
    var result = parseInt(inputOne) - parseInt(inputTwo);

    // Use jQuery to display result
    $("#subtractOutput").text(result);

    event.preventDefault();
  });

});
