$(document).ready(function() {
  $(".clickable").click(function() {
    $("#castle4-showing").fadeToggle();
    $("#castle4-hidden").fadeToggle();
  });

  $(".clickable").click(function() {
    $("#castle3-showing").slideToggle();
    $("#castle3-hidden").slideToggle();
  });

  $(".clickable").click(function() {
    $("#castle2-showing").Toggle();
    $("#castle2-hidden").Toggle();
  });

  $(".clickable").click(function() {
    $("#castle1-showing").Toggle();
    $("#castle1-hidden").Toggle();
  });
});
