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
  interval = 60; 
}

function draw() {
  background(160, 192, 255);
  let gy = height - ground;

  
  if (frameCount % interval === 0) {
    createObstacles(); 
  }

  
  line(0, gy, width, gy);
  line(0, ground, width, ground)

  
  ellipse(x, y, size);

  
  for (let i = obstacles.length - 1; i >= 0; i--) {
    let obs = obstacles[i];
    
    
    for (let n = 0; n < 15; n++) {
      let yOffset = n * 60; 
      rect(obs.x, gy - obs.h - yOffset, obs.w, obs.h);
    }

    
    obs.x -= 2;

    
    if (obs.x + obs.w < 0) {
      obstacles.splice(i, 1);
    }

    
    for (let n = 0; n < 14; n++) {
      let yOffset = n * 60;
      if (
        x > obs.x &&
        x < obs.x + obs.w &&
        y > gy - obs.h - yOffset &&
        y < gy - yOffset
      ) {
        console.log("Hit!");
        resetPlayerPosition(); 
        return; 
    }
  }
}
  
  if (y <= ground) {
    resetPlayerPosition();
  }
}


function resetPlayerPosition() {
  x = width / 2;
  y = height - ground - size / 2;
  vy = 0;
}


function createObstacles() {
  let obs = {
    x: width, 
    y: height - ground,
    w: random(20, 50),
    h: random(20, 50),
  };
  obstacles.push(obs);
}


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


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
