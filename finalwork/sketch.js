// 最終課題を制作しよう
const ground = 20;
const size = 20;
let x, y, vy, vx;
let interval;
let obstacles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height - ground - size / 2;
  vy = 0;
  vx = 5;
  interval = 60; // setup内で初期化する
}

function draw() {
  background(160, 192, 255);
  let gy = height - ground;

  // 一定間隔で障害物を生成
  if (frameCount % interval === 0) {
    createObstacles(); 
  }

  // 地面の描画
  line(0, gy, width, gy);
  line(0, ground, width, ground)

  // プレイヤーキャラクターを描画
  ellipse(x, y, size);

  // 障害物の描画と移動処理
  for (let i = obstacles.length - 1; i >= 0; i--) {
    let obs = obstacles[i];
    
    // 障害物を縦方向に複数描画
    for (let n = 0; n < 14; n++) {
      let yOffset = n * 60; 
      rect(obs.x, gy - obs.h - yOffset, obs.w, obs.h);
    }

    // 障害物を左に移動
    obs.x -= 2;

    // 画面外に出た障害物を削除
    if (obs.x + obs.w < 0) {
      obstacles.splice(i, 1);
    }

    // プレイヤーとの当たり判定
    for (let n = 0; n < 14; n++) {
      let yOffset = n * 60;
      if (
        x > obs.x &&
        x < obs.x + obs.w &&
        y > gy - obs.h - yOffset &&
        y < gy - yOffset
      ) {
        console.log("Hit!");
        resetPlayerPosition(); // 衝突したらプレイヤーをリセット
        return; // 衝突した場合、処理を中断
      }
    }
  }

  // プレイヤーが地面を超えたら初期位置に戻す処理
  if (y <= ground) {
    resetPlayerPosition();
  }
}

// プレイヤーの位置を初期化する関数
function resetPlayerPosition() {
  x = width / 2;
  y = height - ground - size / 2;
  vy = 0;
}

// 新しい障害物を生成する関数
function createObstacles() {
  let obs = {
    x: width, // 画面右端に生成
    y: height - ground,
    w: random(20, 50),
    h: random(20, 50),
  };
  obstacles.push(obs);
}

// プレイヤーの移動処理を行う関数（キーが押されたときに実行）
function keyPressed() {
  const stepSize = 50; // 円の移動ステップサイズ
  if (keyCode === LEFT_ARROW) {
    x -= stepSize;
  } else if (keyCode === RIGHT_ARROW) {
    x += stepSize;
  } else if (keyCode === UP_ARROW) {
    y -= stepSize;
  } else if (keyCode === DOWN_ARROW) {
    y += stepSize;
  }
}

// ウィンドウサイズ変更時にキャンバスをリサイズ
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
