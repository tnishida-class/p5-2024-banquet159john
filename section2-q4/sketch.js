
function setup() {
  const blue = color(0, 51, 160);
  createCanvas(270, 180);
  noStroke();
  background(255);

  let d = height / 9; 


  for(let i = 0; i < 9; i++){
    if(i % 2 === 1){
      fill(255);
      }
    if(i % 2 === 0){
      fill(blue);      
    }
    
    rect(0, i * d, width, (i + 1) * d);
  }

  
  let size = d * 5;
  fill(blue);
  rect(0, 0, size, size);


  fill(255);  
  rect(0, size/2.53, 100, 21)
  rect(size/2.55, 0, 20, 100)
  
}
// ギリシャ国旗
// 縞1本の太さ
// BLANK[1] (hint: 縞の色を交互に変えるには2で割った余りを使おう)
// BLANK[2] (hint: 白い十字を描くには rect を二つ描こう)