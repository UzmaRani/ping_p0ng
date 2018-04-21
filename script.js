//Business Logic
var myNumber = function(ab){
  var result = [];
  for(var i = 1; i <= ab; i++){
     
      if(i % 15 === 0) {
       
        result.push('pingpong');
      }else if(i % 5 === 0) {
       
        result.push('pong');
      }else if(i % 3 === 0) {
     
        result.push('ping');
      }else{
        result.push(i);
      }
  }

  return result;
};

//User Interface Logic
$(document).ready(function(){
  $("#cd").submit(function(event){
    $("#output").empty();

    var countTo = parseInt($("input#ab").val());
	if (countTo<=0){
	alert("please enter a +iv number  starting from 1");
}
    var output = myNumber(countTo);

    output.forEach(function(num){
      $("#output").append('<li>' + num + '</li>');
    });
    event.preventDefault();
  });
});