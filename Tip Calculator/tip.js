function calculate(){ 
  // $ it indecate jqury libary which can call and sent the value of function
  var amount=$('#amount').val();
  var percentage=$('#percentage').val();
  var tip=amount*(percentage/100);
  var total= Number(amount) + tip;
  
  $('#tip').val(tip.toFixed(2));
  $('#total').val(total.toFixed(2));
  //return false;
  $('#calculator').submit(calculate);
}
