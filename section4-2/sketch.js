//　テキスト「オブジェクト」
// 練習問題：ボールのサイズをランダムに変更してみよう
// 練習問題：何も操作しなくてもボールが湧いてくる機能を追加しよう

let balls;

function setup(){
  createCanvas(windowWidth, windowHeight);
  balls = [];
  let b1 = { x: 50, y: 50, vx: 3, vy:0, size: random(10, 100)};
  balls.push(b1);
  let b2 = { x: 40, y: 40, vx: 0, vy:3, size: random(10, 100)};
  balls.push(b2);
  for(let n = 0; n < 10; n++){
  let bn ={ x: 60, y: 60, vx: random(1, 10), vy: random(1, 10), size: random(10, 100)};
  balls.push(bn)
  }
}

function draw(){
  background(160, 192, 255);
  for(let i = 0; i < balls.length; i++){
    let b = balls[i];
    ellipse(b.x, b.y, b.size);
    b.x += b.vx;
    b.y += b.vy;
  }
}

function mouseDragged(){
  const dx = mouseX - pmouseX;
  const dy = mouseY - pmouseY;
  if(mag(dx, dy) > 5){
    const b = { x: mouseX, y: mouseY, size: 20, vx: dx, vy: dy };
    balls.push(b);
  }
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
