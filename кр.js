function Add(a, b){
  return a + b;
}
function Sub(a, b){
  return a - b;
}
function Mul(a, b){
  return a * b;
}
function Div(a, b){
  if(b == 0){
   return 'Error';
  } else{
     return a / b;
  }
}
var a = parseInt(prompt('Введите первое число', ' '));
var b = parseInt(prompt('Введите второе число', ' '));
document.write('Add: ' + Add(a, b) + '<br>');
document.write('Sub: ' + Sub(a, b) + '<br>');
document.write('Mul: ' + Mul(a, b) + '<br>');
document.write('Div: ' + Div(a, b) + '<br>');