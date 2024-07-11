let img1;
let img2;
let x = 0;
let speed = 2;

function preload() {
  img2 = loadImage("https://i.imgur.com/hZKb1ty.png");
  img1 = loadImage("https://i.imgur.com/0ozG1A1.jpeg");
};


function setup() {
  createCanvas(500, 500);

  background(255);
};

function draw() {

  textSize(40);
  textFont('Courier');
  textStyle(ITALIC);
  text('CLICK FOR MOONY', 60, 100);

  imageMode(CENTER);
  image(img1, x, height/2, 200, 200);

  x += speed;

  if (x<0 || x>width) {
    speed = -speed;
  };
};

function mousePressed(){
  img1 = img2;
};