function comploan() {
  var  amount = document.getElementById("amount").value;
  var rate = document.getElementById("rate").value;
  var mon = document.getElementById("months").value;
  //var interest = (amount*(rate*.01))/mon;
 // var payment = ((amount/mon)*interest).toFixed(2); 
  //payment = payment.toString().repeat(/\B(?=\d{3})*(?!\d)/g,",");
  var interest = (amount*(rate*0.01))*mon;
  var payment = Number(amount)+Number(interest);
  payment = payment/mon;
  document.getElementById("payment").innerHTML="Monthly Payment = Rs"+payment;
}