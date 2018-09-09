var countdt= new Date("Oct 16, 2018 12:00:00").getTime();
var x= setInterval(function(){
  var now = new Date().getTime();
  var distance = countdt - now;
  var  days = Math.floor(distance / (1000*60*60*24));
  var hrs=Math.floor((distance%(1000*60*60*24))/(1000*60*60));
  var mins=Math.floor((distance%(1000*60*60))/(1000*60));
  var sec=Math.floor((distance%(1000*60))/1000);
  
  document.getElementById("root").innerHTML= days + "d:" + hrs + "h:" + mins + "m:" + sec + "s";
  if(distance<0){
    clearInterval(x);
    document.getElementById("root").innerHTML="Time Expired"
  }
})