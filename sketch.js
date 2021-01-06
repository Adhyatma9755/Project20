var car,wall;

var speed,weight;

function setup() {
  createCanvas(100,400);

  speed=random(55,90);
  weight=random(400,1500);

 car=createSprite(50, 200, 50, 50);
 car.valocityX = speed;
 car.shapeColour=color(255);

 wall=createSprite(800,200,60 ,height/2);
 wall.shapeColour=color(80,80,80)
}

function draw() {
  background(255,255,255);  
  drawSprites();
}