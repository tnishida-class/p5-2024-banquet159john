function setup() 
{createCanvas(128,128);}

function draw() {
  background(0);
  strokeWeight(12);
  fill(178, 120, 162);
  triangle(19,121,117,121,140,10);
  fill(94, 185, 84);
  triangle(0,108,106,108,106,0);
  fill(255);
  textSize(32);
  textFont("serif");
  text("46", 68, 100);
}
