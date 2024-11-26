// 練習問題：吹き出し
// 吹き出しの位置、背景色 etc. を関数 balloon の引数で指定できるようにしてみよう
// 吹き出しにしっぽを付けてみよう
function setup(){
  createCanvas(windowWidth, windowHeight);
  background(255);
  balloon("I love keyakizaka46");
}

function balloon(t) {
  let w = textWidth(t);
  let h = textAscent() + textDescent();
  let p = 10;  // パディングの値を10に固定して、適切なスペースを確保
  let x = random(windowWidth - (w + p * 2));
  let y = random(windowHeight - (h + p * 2));
  fill(0);
  rect(x, y, w + p * 2, h + p * 2);


  let tailLength = 20; // 尻尾の長さ
  let tailX1 = x;  // 吹き出しの左下角
  let tailY1 = y + h + p * 2;  // 吹き出しの下辺
  let tailX2 = tailX1 - 15;  // 尻尾の左に伸びる先端
  let tailY2 = tailY1 + tailLength;  // 尻尾の下方向の頂点
  let tailX3 = tailX1 + 15;  // 尻尾の右に伸びる先端
  let tailY3 = tailY1;  // 尻尾の基点（吹き出しの下辺）

  // 尻尾（三角形）を描画
  fill(0);
  triangle(tailX1, tailY1, tailX2, tailY2, tailX3, tailY3);

  // 吹き出し内にテキストを描画
  fill(255); // テキストの色を白にして、黒い吹き出し内に描画
  text(t, x + p, y + h + p);
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
