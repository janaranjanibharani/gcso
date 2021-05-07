var car;
var speed;
var wall;
var weight;
function setup() {
  createCanvas(1200,600);
  speed =random(50,90);
weight=random(400,1500);
  car =createSprite(50,200,50,50);
car .velocityX=speed;
car.shapeColor="green";
wall=createSprite(1000,200,50,300)
wall.shapeColor="red";
}

function draw() {
  background("black"); 
  if(wall.x-car.x<wall.width/2+car.width/2){
console.log("car is touching wall");
car.velocityX=0; 
  } 
  drawSprites();
}