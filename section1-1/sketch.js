function setup() 
{createCanvas(200,200);}

function draw() {
  background(120, 0, 0);
  strokeWeight(4);
  fill(0, 120, 0);
  triangle(19,121,200,121,140,10);
  strokeWeight(6);
  fill(0, 0, 120);
  triangle(0,108,106,108,106,0);
  fill(255);
  textSize(25);
  textFont("serif");
  text("raven", 68, 100);
}
