// 円の中心位置  
var locationX;  
var locationY;  
// 円の速度  
var velocityX;  
var velocityY;  

let img;

function preload() {
  img = loadImage('data/zemi.png');
}


function setup() {  
  createCanvas(windowWidth, windowHeight);


  frameRate(60);  
  // 円の初期位置を設定  
  locationX = 0;  
  locationY = 0;  
  // 円の速度  
  velocityX = 3;  
  velocityY = 2;

  //マウスを消す
  noCursor();
}  

function draw() {  
 background(0);  

 image(img,0, 0);
 
  // 図形座標を更新  
  //ocationX = locationX + velocityX;  
  locationY = locationY + velocityY;  

  // 枠線なし  
  noStroke();  
  // 塗りつぶしの設定  
  fill(119, 255, 255, 128);  

  // 四角を描画  
  rect(locationX, locationY, 500, 700);  

  /*
    // 画面の左端、もしくは右端に到達した場合  
   if (locationX < 0 || locationX > width) {  
   // X軸の速度を反転  
   velocityX = velocityX * -1;  
   }
   */

  // 画面の上端、もしくは下端に到達した場合  
  if (locationY < 0 || locationY > height) {  
    // Y軸の速度を反転  
    velocityY = velocityY * -1;
  }

  //マウス図家い
  fill(255);
  circle(mouseX, mouseY, 20);
}  
