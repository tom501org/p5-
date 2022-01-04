// function setup() {
//   createCanvas(windowWidth, 8000);
//   // rectMode(CENTER);
//   // background(0);
//   // loadPixels();
//   noStroke();
//   for (let x = 0; x < width; x++) {
//     fill(map(x, 0, width, 0, 255), 0, 0)
//     rect(x, 0, 1, height);
//   }
// }




function setup() {
  createCanvas(windowWidth, 18000);
    rectMode(CENTER);
    background(0);
    loadPixels();


    
  for (let x = 0;    x < width;       x++) {

  for (let y = 0;    y < height;      y++) {

      const c = [ (x / width) * 255, (y / height) * 255, 0 ];



      setPixel(x, y, c);
    }

  }

  updatePixels();
}

function setPixel(x, y, c) {


  const i = (y * width + x) * 4;



  pixels[i + 0] = c[0];
  pixels[i + 1] = c[1];
  pixels[i + 2] = c[2];
}







///////////////////////////////////////////////////////////////////////////////

// function setup() {
//   createCanvas(windowWidth, 8000);
//   rectMode(CENTER);
//   background(0);
//   loadPixels();

//   for (let y = 0;
//      y < height; y++) {

//     for (let x = 0;
//        x < width; x++) {

//       const c = 
//       [(y / height) * 255, (x / width) * 255, (x / width) * 255];

//       setPixel(x, y, c);
//     }
//   }

//   updatePixels();
// }

// function setPixel(x, y, c) {
//   const i = (y * width + x) * 4;
//   pixels[i + 0] = c[0];
//   pixels[i + 1] = c[1];
//   pixels[i + 2] = c[2];
// }






// // 着火点となる要素
// const heading = document.getElementById('heading');

// // オプション指定
// const options = {
//   threshold: 1 // 指定範囲は0 〜 1
// };

// // 実行するよ
// const observer = new IntersectionObserver(showElement, options);

// // heading に到達したら発動
// observer.observe(heading);

// // 要素が表示されたら実行する動作
// function showElement(){
//   heading.style.opacity = 1;
// };