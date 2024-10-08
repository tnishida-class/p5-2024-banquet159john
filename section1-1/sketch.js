function setup() 
{createCanvas(128,128);}

function draw() {
  background(120, 0, 0);
  strokeWeight(12);
  fill(0, 120, 0);
  triangle(19,121,117,121,140,10);
  fill(0, 0, 120);
  triangle(0,108,106,108,106,0);
  fill(255);
  textSize(32);
  textFont("serif");
  text("raven", 68, 100);
}
