// テキスト「関数を作る(1) 引数のある関数」
// 練習問題：星を描く関数を改造して正N角形を描画する関数を作ってみよう
function setup(){
  createCanvas(400, 100);
  background(200);
  fill(0);
  crossmark(10, 10, 90, 90);
  ngmark(150, 50, 80);
  star(250, 50, 40);
  regularPolygon(4, 350, 50, 50)
}

function crossmark(x1, y1, x2, y2){
  line(x1, y1, x2, y2);
  line(x2, y1, x1, y2);
}

function ngmark(cx, cy, r){
  push();
  noFill();
  strokeWeight(r * 0.1);
  let d = sqrt(r * r / 8);
  ellipse(cx, cy, r);
  line(cx - d, cy - d, cx + d, cy + d);
  pop();
}

function star(cx, cy, r){
  beginShape();
  for(var i = 0; i < 5; i++){
    let theta = TWO_PI * i * 2 / 5 - HALF_PI;
    let x = cx + cos(theta) * r;
    let y = cy + sin(theta) * r;
    vertex(x,y);
  }
  endShape(CLOSE);
}

function regularPolygon(n, cx, cy, r) {
  beginShape();
  for (let i = 0; i < n; i++) {
    // 各頂点の角度を計算し、それに基づいて頂点の座標を求める
    let theta = TWO_PI * i / n - HALF_PI; // -HALF_PIで上方向からスタート
    let x = cx + sin(theta) * r;
    let y = cy + cos(theta) * r;
    vertex(x, y);
  }
  endShape(CLOSE);
}
