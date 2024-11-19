// テキスト「関数を作る(2) 結果を戻す関数」～「総仕上げ：カレンダーを描画しよう」
function setup(){
  createCanvas(400, 400);
  calendar(2019, 10);

  // isLeapYear の動作確認のため console に出力しています
  for(let i = 2000; i <= 2100; i++){
    if(isLeapYear(i)){
      console.log(i + "年はうるう年です");
    }
    else{
      console.log(i + "年はうるう年ではありません");
    }
  }
}

function calendar(y, m){
  let dow = dayOfWeek(y, m, 1);
  let days = daysInMonth(y, m);

  // カレンダー描画開始位置
  let x = 20;
  let yPos = 40;
  textSize(16);
  text(y + "年 " + m + "月", x, yPos);
  yPos += 20;

  // 曜日のヘッダー
  const daysOfWeek = ["日", "月", "火", "水", "木", "金", "土"];
  for (let i = 0; i < daysOfWeek.length; i++) {
    text(daysOfWeek[i], x + i * 40, yPos);
  }
  yPos += 20;

  // カレンダーの日付描画
  for (let i = 0; i < dow; i++) {
    x += 40;
  }
  for (let d = 1; d <= days; d++) {
    text(d, x, yPos);
    x += 40;
    if ((dow + d) % 7 == 0) {
      x = 20;
      yPos += 20;
    }
  }
}

function isLeapYear(y){
  return (y % 4 == 0) && (y % 100 != 0) || (y % 400 == 0);
}

function daysInYear(y){
  return isLeapYear(y) ? 366 : 365;
}

function daysInMonth(y, m){
  if(m == 2){
    return isLeapYear(y) ? 29 : 28;
  }
  else if(m == 4 || m == 6 || m == 9 || m == 11){
    return 30;
  }
  else{
    return 31;
  }
}

function dayOfYear(y, m, d){
  let count = 0;
  for(let i = 1; i < m; i++){
    count += daysInMonth(y, i);
  }
  return count + d;
}

function dayOfWeek(y, m, d){
  // 1970年1月1日を基準とする（木曜日）
  let baseYear = 1970;
  let baseDayOfWeek = 4; // 木曜日

  // 基準日からの年単位の日数の差
  let totalDays = 0;
  for(let i = baseYear; i < y; i++){
    totalDays += daysInYear(i);
  }
  for(let i = y; i < baseYear; i++){
    totalDays -= daysInYear(i);
  }

  // 年内の経過日数
  totalDays += dayOfYear(y, m, d) - 1;

  // 曜日を求める
  let dow = (baseDayOfWeek + totalDays) % 7;
  if (dow < 0) dow += 7;

  return dow;
}

function dayOfWeekAsString(dow){
  const a = ["日", "月", "火", "水", "木", "金", "土", "日"];
  return a[dow];
}
