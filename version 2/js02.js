var row = document.querySelectorAll('tr');
var i = 0;
var whowon = "";
var j = 0;
var count = 0;
var printXO = ['X','O'];
var play = false;
for(i = 0; i < 3; i++){
  for(j = 0; j < 3; j++){

    row[i].querySelectorAll('td')[j].addEventListener('click',function(){
      if(play == false){
      var xo = 0;
      if(count % 2 == 1){xo = 1;}
      if(this.textContent==''){
        count++;
        console.log(count);
        this.textContent = printXO[xo];
      }
    play = checkWin9();
    displayResult();
  }
    });

  }
}

function displayResult(){

  if(whowon != ""){
    var displayOn = document.querySelector('#resultScoreBoard');
    displayOn.textContent = whowon + " wins.............Restart to play again.";
    setInterval("changeHeaderColor()",500);
  }else{

  if(count == 9){
    var draw = document.querySelector('#drawDisplay');
    draw.textContent = "Its a draw, resetting in a second.........";
    setTimeout(reset, 1000);
  }
}
}

function reset(){
$('#buttonRestart').trigger('click');
var draw = document.querySelector('#drawDisplay');
draw.textContent = "";
}

function checkWin9(){
  var box00 = row[0].querySelectorAll('td')[0].textContent;
  var box01 = row[0].querySelectorAll('td')[1].textContent;
  var box02 = row[0].querySelectorAll('td')[2].textContent;
  var box10 = row[1].querySelectorAll('td')[0].textContent;
  var box11 = row[1].querySelectorAll('td')[1].textContent;
  var box12 = row[1].querySelectorAll('td')[2].textContent;
  var box20 = row[2].querySelectorAll('td')[0].textContent;
  var box21 = row[2].querySelectorAll('td')[1].textContent;
  var box22 = row[2].querySelectorAll('td')[2].textContent;

  var x00 = row[0].querySelectorAll('td')[0];
  var x01 = row[0].querySelectorAll('td')[1];
  var x02 = row[0].querySelectorAll('td')[2];
  var x10 = row[1].querySelectorAll('td')[0];
  var x11 = row[1].querySelectorAll('td')[1];
  var x12 = row[1].querySelectorAll('td')[2];
  var x20 = row[2].querySelectorAll('td')[0];
  var x21 = row[2].querySelectorAll('td')[1];
  var x22 = row[2].querySelectorAll('td')[2];

  var colorr = "#c5c8cc";

  if(box00 === box01 && box01 === box02 && box00 != ""){
    //console.log("winnnnnnn!!!!!");
    whowon = box00;
    x00.style.backgroundColor = colorr;
    x01.style.backgroundColor = colorr;
    x02.style.backgroundColor = colorr;
    return true;
  }

  if(box00 === box10 && box10 === box20 && box20 != ""){
    //console.log("winnnnnnn!!!!!");
    whowon = box00;
    x00.style.backgroundColor = colorr;
    x10.style.backgroundColor = colorr;
    x20.style.backgroundColor = colorr;
    return true;
  }

  if(box00 === box11 && box11 === box22 && box00 != ""){
    //console.log("winnnnnnn!!!!!");
    whowon = box00;
    x00.style.backgroundColor = colorr;
    x11.style.backgroundColor = colorr;
    x22.style.backgroundColor = colorr;
    return true;
  }

  if(box01 === box11 && box11 === box21 && box21 != ""){
    //console.log("winnnnnnn!!!!!");
    whowon = box11;
    x01.style.backgroundColor = colorr;
    x11.style.backgroundColor = colorr;
    x21.style.backgroundColor = colorr;
    return true;
  }

  if(box02 === box11 && box11 === box20 && box20 != ""){
    //console.log("winnnnnnn!!!!!");
    whowon = box11;
    x02.style.backgroundColor = colorr;
    x11.style.backgroundColor = colorr;
    x20.style.backgroundColor = colorr;
    return true;
  }

  if(box02 === box12 && box12 === box22 && box22 != ""){
    //console.log("winnnnnnn!!!!!");
    whowon = box22;
    x02.style.backgroundColor = colorr;
    x12.style.backgroundColor = colorr;
    x22.style.backgroundColor = colorr;
    return true;
  }

  if(box10 === box11 && box11 === box12 && box11 != ""){
    //console.log("winnnnnnn!!!!!");
    whowon = box11;
    x10.style.backgroundColor = colorr;
    x11.style.backgroundColor = colorr;
    x12.style.backgroundColor = colorr;
    return true;
  }

  if(box20 === box21 && box21 === box22 && box22 != ""){
    //console.log("winnnnnnn!!!!!");
    whowon = box22;
    x20.style.backgroundColor = colorr;
    x21.style.backgroundColor = colorr;
    x22.style.backgroundColor = colorr;
    return true;
  }
  whowon = "";
return false;
}



//Random color generator
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
var header = document.querySelector("#resultScoreBoard");

header.style.color = 'red';

function changeHeaderColor(){
  colorInput = getRandomColor();
  header.style.color = colorInput;
}



var x00 = row[0].querySelectorAll('td')[0];
var x01 = row[0].querySelectorAll('td')[1];
var x02 = row[0].querySelectorAll('td')[2];
var x10 = row[1].querySelectorAll('td')[0];
var x11 = row[1].querySelectorAll('td')[1];
var x12 = row[1].querySelectorAll('td')[2];
var x20 = row[2].querySelectorAll('td')[0];
var x21 = row[2].querySelectorAll('td')[1];
var x22 = row[2].querySelectorAll('td')[2];
var n = 9;
var x = document.querySelectorAll('.clickStart');
var btn = document.querySelector('#buttonRestart');
console.log(btn);
btn.addEventListener('click',function(){

for(i=0; i<n; i++){
  x[i].textContent = "";
}
play = false;
count = 0;
header.textContent = "";
console.log("Reset!!");
var color = "white";
x00.style.backgroundColor = color;
x01.style.backgroundColor = color;
x02.style.backgroundColor = color;
x10.style.backgroundColor = color;
x11.style.backgroundColor = color;
x12.style.backgroundColor = color;
x20.style.backgroundColor = color;
x21.style.backgroundColor = color;
x22.style.backgroundColor = color;
});
