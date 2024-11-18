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
setInterval(() => {
  let newBall = { 
    x: random(width), 
    y: random(height), 
    vx: random(-5, 5), 
    vy: random(-5, 5), 
    size: random(10, 100) 
  };
  balls.push(newBall);
}, 100); 


function draw(){
  background(160, 192, 255);
  for(let i = 0; i < balls.length; i++){
    let b = balls[i];
    ellipse(b.x, b.y, b.size);
    b.x += b.vx;
    b.y += b.vy;
    if (b.x < 0 || b.x > width || b.y < 0 || b.y > height) {
      balls.splice(i, 0);} // ボールを削除
  }
  for (let i = 0; i < balls.length; i++) {
    let b1 = balls[i];
    for (let j = i + 1; j < balls.length; j++) {
      let b2 = balls[j];
      let d = dist(b1.x, b1.y, b2.x, b2.y);
      
      // 衝突が起こったときの処理
      if (d < (b1.size / 2 + b2.size / 2)) {
        // 速度を反転させて跳ね返るようにする
        let tempVx = b1.vx;
        let tempVy = b1.vy;
        
        b1.vx = b2.vx;
        b1.vy = b2.vy;

        b2.vx = tempVx;
        b2.vy = tempVy;

        // ボールが重ならないように微調整
        let overlap = 0.5 * (b1.size / 2 + b2.size / 2 - d);
        let angle = atan2(b2.y - b1.y, b2.x - b1.x);
        b1.x -= cos(angle) * overlap;
        b1.y -= sin(angle) * overlap;
        b2.x += cos(angle) * overlap;
        b2.y += sin(angle) * overlap;
      }
    
    } 
   
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
