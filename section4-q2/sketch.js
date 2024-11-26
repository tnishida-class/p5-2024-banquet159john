// テキスト「配列を使った描画」練習問題：円グラフ

function setup(){
  createCanvas(400, 400);
  background(240);

  // 配列をランダムに初期化する
  let scores = [];
  for(let i = 0; i < 10; i++){
    scores[i] = random(20, 100); // 60以上100未満のランダムな数を代入
  }

  // 円グラフを描くには割合が必要なので合計を計算しておく
  let total = 0;
  for(let i = 0; i < scores.length; i++){ total += scores[i]; }

  let startAngle = -HALF_PI; // 開始角度を上方向にするために -HALF_PI から開始
  stroke(0); // 境界線を黒色で描画
  textSize(12);
  textAlign(CENTER, CENTER);

  for (let i = 0; i < scores.length; i++) {
    // 各スコアの割合に応じた角度を計算
    let angle = (scores[i] / total) * TWO_PI;

    // 円グラフの一部を描画 (中心位置が width/2, height/2 で直径300の円)
    fill(255);
    arc(width / 2, height / 2, 300, 300, startAngle, startAngle + angle, PIE);

    // ラベルを描画するために角度の中間点を計算
    let midAngle = startAngle + angle / 2;
    let labelX = width / 2 + cos(midAngle) * 100; // ラベルの位置（半径を少し伸ばす）
    let labelY = height / 2 + sin(midAngle) * 100;

    // 黒文字でラベルを描画
    fill(0); // 文字色を黒に設定
    stroke(0);
    text(scores[i].toFixed(1), labelX, labelY);

    // 次のセグメントの開始角度を更新
    startAngle += angle;
  }
  

  // BLANK[1]
}
