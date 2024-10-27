// 練習問題「心臓の鼓動のように大きくなったり小さくなったりする円」
let count;
let cycle;
let increment = 1 ;
let x, y;
function setup(){
  createCanvas(200, 200);
  count = 0;
  cycle = 200;
  x = width/2
  y = height/2
}

function draw(){
  background(160, 192, 255);
  let size = 50;
  count = (count + increment) % cycle;
  if(keyIsPressed){increment= 5;
  }else{increment = 1;}
  if(count < cycle/2){size = (count + cycle/2);}
  else{size = 200 + (cycle/2 - count);}
  ellipse(x, y, size );
}