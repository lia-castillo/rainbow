var myRed = 10;
var myGreen = 0;
var myBlue = 255;

function circle(x, y, diameter) {
  ellipse(x, y, diameter, diameter);
}

function setup() {
  createCanvas(1000,1000);
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