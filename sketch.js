var r = 0;
var g = 127.5;
var b=255;

function setup() {
  createCanvas(1200, 400);
}

function draw() {
  r = map(mouseX, 0, 600, 0, 255);
  g = map(mouseX, 0, 600, 127.5, 0);
  b = map(mouseX, 0, 600, 255, 0);
  background(r,g,b);
  ellipse(mouseX,mouseY,50,50);
}