// 最終課題を制作しよう

function setup(){
  createCanvas(windowWidth, windowHeight);
}

function draw(){
  background(160, 192, 255);
}
const g = 1;
const jump = 20;
const ground = 20;
const size = 20;
let x, y, vy;
let obstacles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height - ground - size / 2;
  vy = 0;
  generateObstacles(); // 障害物を生成する関数の呼び出し
}

function draw() {
  background(160, 192, 255);
  let gy = height - ground;
  line(0, gy, width, gy);

  // プレイヤーキャラクターを描画
  ellipse(x, y, 50);

  // 障害物を描画
  for (let i = 0; i < obstacles.length; i++) {
    let obs = obstacles[i];
    rect(obs.x, obs.y, obs.w, obs.h);
    obs.x -= 2; // 障害物を左に動かすことでアニメーションを実現

    // 画面外に出た障害物を再配置
    if (obs.x + obs.w < 0) {
      obs.x = width;
    }

    // プレイヤーと障害物の当たり判定
    if (
      x > obs.x &&
      x < obs.x + obs.w &&
      y > obs.y &&
      y < obs.y + obs.h
    ) {
      console.log("Hit!");
      // 衝突したら初期位置に戻す
      x = width / 2;
      y = height - ground - size / 2;
      vy = 0;
    }
  }

  // キャラクターのジャンプと重力処理
  y += vy;
  if (y < height - ground - size / 2) {
    vy += g;
  } else {
    vy = 0;
    y = height - ground - size / 2;
  }

  // キーボード入力による移動の処理
  handleMovement();
}

// 障害物を生成する関数
function generateObstacles() {
  for (let i = 0; i < 5; i++) {
    let obs = {
      x: random(width),
      y: height - ground - random(50, 100),
      w: random(20, 50),
      h: random(20, 50),
    };
    obstacles.push(obs);
  }
}

// キャラクターの移動処理を行う自作関数
function handleMovement() {
  let speed = keyIsDown(65) ? 10 : 5; // "A"キーを押すとスピードが速くなる

  if (keyIsDown(LEFT_ARROW)) {
    x -= speed;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    x += speed;
  }
}

function keyPressed() {
  if (y >= height - ground - size / 2) {
    if (key === " ") {
      vy = -jump;
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
