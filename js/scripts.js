$(document).ready(function() {
  $(".clickable").click(function() {
    $("#castle4-showing").fadeToggle();
    $("#castle4").fadeToggle();
  });

  $(".clickable").click(function() {
    $("#castle3-showing").slideToggle();
    $("#castle3").slideToggle();
  });

  $(".clickable").click(function() {
    $("#castle2-showing").Toggle();
    $("#castle2").Toggle();
  });

  $(".clickable").click(function() {
    $("#castle1-showing").Toggle();
    $("#castle1").Toggle();
  });
});
