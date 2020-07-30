var fixedRect, movingRect;
var gameobject1;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  gameobject1 = createSprite(400,350,90,20);
  gameobject1.shapeColor = "blue";
  gameobject1.velocityY=-2;


  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  
  bounce(fixedRect,gameobject1);
  bounce(movingRect,gameobject1);
  drawSprites();
}
