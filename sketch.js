let img;
let pixelRows = [];
let numRows = 6;
let numCols = 6;
let rowHeight;
let rowWidth;
let colWidth;

function preload() {
  img = loadImage("https://i.ibb.co/G3vZG81/city-of-angels.jpg");
}

function setup() {
  createCanvas(800, 800);
  image(img, 0, 0, width, height);
  
  rowHeight = floor(height / numRows);
  rowWidth = width * 4;
  colWidth = floor(width / numCols) * 4;
   
  shuffleRows();
} 

function draw() {
}

function shuffleRows() {
  loadPixels();
  let rowReassmt = shuffle([...Array(numRows).keys()]);
  console.log(rowReassmt);
  
  for (let i = 0; i < height; i++){
    let swapRow = rowReassmt[floor(i / rowHeight)] * rowHeight + (i % rowHeight);
    for (let j = 0; j < rowWidth; j++){
      temp = pixels[i * rowWidth + j];
      pixels[i * rowWidth + j] = pixels[swapRow * rowWidth + j];
      pixels[swapRow * rowWidth + j] = temp;
    }
  }
  
  updatePixels();
}
