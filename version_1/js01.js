var x = document.querySelectorAll('.clickStart');
console.log(x);
var count = 0;
var printXO = ['X','O'];
console.log(printXO[0]);
var i = 0;
var n = 9;
for(i = 0; i < n; i++){
x[i].addEventListener('click',function(){
  var xo = 0;
  if(count % 2 == 1){xo = 1;}
  count++;
  this.textContent = printXO[xo];
});
}
var btn = document.querySelector('#buttonRestart');
console.log(btn);
btn.addEventListener('click',function(){

for(i=0; i<n; i++){
  x[i].textContent = "";
}

});
