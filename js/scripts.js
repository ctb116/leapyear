
$(document).ready(function(){ //frontend logic
  $("form#leap-year").submit(function(event){
  event.preventDefault();
  var year = parseInt($("input#year").val());
  var result = leapyear(year);

  $(".year").text(year);

  if (!result) {
    $(".not").text("not");
  } else {
    $(".not").text("");
  }
  $("#result").show();

  }); //backend logic
  var leapyear = function(year) {
    if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
      return true;
    } else {
      return false;
    }
  };
});
