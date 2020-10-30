var butcher;
var butcherIMG;
var chicken;
var chickenIMG;
var cow;
var cowIMG;
var pig;
var pigIMG;
var score = 0;

function preload(){
  butcherIMG = loadImage("Butcher.png");
  chickenIMG = loadImage("Chicken.png");
  cowIMG = loadImage("Cow.png");
  pigIMG = loadImage("Pig.png");
}

function setup() {
  createCanvas(1000,500);
  butcher = createSprite(125, height/2, 50, 50);
  butcher.addImage(butcherIMG);
  butcher.scale = 0.3;
}

function draw() {
  background(232,232,232);
  mobSpawning(
  drawSprites();
}

function mobSpawning(){
if(frameCount%30 === 0) {
  chicken = createSprite(random(800,950), random(50,450), 50, 50);
  chicken.addImage(chickenIMG);
  chicken.scale = 0.3;
}
if(frameCount%30 === 0){
  pig = createSprite(random(800,950), random(50,450), 50, 50);
  pig.addImage(pigIMG);
  pig.scale = 0.3;
}
if(frameCount%30 === 0){
  cow = createSprite(random(800,950), random(50,450), 50, 50);
  cow.addImage(cowIMG);
  cow.scale = 0.3;
}
}