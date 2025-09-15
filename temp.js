$(document).ready(function() {

  // Hide the box when "Hide" button is clicked
  $("#hideBtn").click(function() {
    $("#box").hide();
  });

  // Show the box when "Show" button is clicked
  $("#showBtn").click(function() {
    $("#box").show();
  });

  // Toggle the box (show/hide) when "Toggle" button is clicked
  $("#toggleBtn").click(function() {
    $("#box").toggle();
  });

});