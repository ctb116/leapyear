$(document).ready(function(){
  $("form#leap-year").submit(function(event){
  event.preventDefault();

  var year = parseInt($("input#year").val());
  // var result = leapyear(year);

  $("#result").text(year);





  });

});
