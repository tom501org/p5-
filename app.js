

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

