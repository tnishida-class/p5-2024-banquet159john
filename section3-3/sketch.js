const  g = 0.5  ;
const jump = 20;
const ground = 20;
const size = 20;
let x, y,z,vy;

function setup(){
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height - ground - size/2;
  vy = 0;
}

function draw(){
  background(160, 192, 255);
  let gy = height - ground;
  line (0, gy, width, gy);
  rect(gy, width, 255);
  ellipse(x, y, 50);
  if(keyIsDown("A".charCodeAt(0))){ z = 10; }
  else{z = 5;}
  if(keyIsDown(LEFT_ARROW)){ x -= z; }
  if(keyIsDown(RIGHT_ARROW)){ x += z; }

  y +=vy;
  if(y < height - ground - size/2){vy += g;}
  else{
    vy = 0;
    y = height - ground - size/2;
  }
}

function keyPressed(){
  if(y < height - ground - size/2-jump){vy = -0;}
  else if(key === " ") {vy = -jump;}
}
// イベントハンドラを使用するパターン
// function keyPressed(){
//   if(keyCode == LEFT_ARROW){ x -= 5; }
//   else if(keyCode == RIGHT_ARROW){ x+= 5; }
//   else if(keyCode == DOWN_ARROW){ y += 5; }
//   else if(keyCode == UP_ARROW){ y -= 5; }
//   else if(key == "A"){ x += 10; }
// }

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
