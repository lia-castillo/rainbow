var myRed = 10;
var myGreen = 0;
var myBlue = 255;

function circle(x, y, diameter) {
  ellipse(x, y, diameter, diameter);
}

function polkaDots(color1, color2) {
  var x = 0;
  var y = 0;
  var dotSize = 30;
  noStroke();
  background(color1);
  while(y < height+dotSize) {
    while(x < width+dotSize) {
      fill(color2);
      circle(x, y, dotSize);
      x = x + 2*dotSize;
    }
    x = 0;
    y = y + 2*dotSize;
  }
}


function setup() {
  createCanvas(1000,1000);
   polkaDots("magenta", "cyan");
}

function draw() {
  noStroke();
  fill(myRed, myGreen, myBlue);
  if (mouseIsPressed){
    fill(255);
    circle(mouseX, mouseY, 50);
  }
  circle(mouseX, mouseY,20);
  myRed = myRed + 0.5;
  if (myRed==350){
    myRed= 0;
  }
  myBlue = myBlue - 1;
  if (myBlue<= 0){
    myBlue=255;
  }
}