
function preload(){
seaImg=loadImage("sea.png");

shipImg1=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
}

function setup(){
  createCanvas(400,400);
  ship=createSprite(200,150)
  ship.addAnimation("movingShip",shipImg1);
}

function draw() {
  background("blue");
 spriteName.addImage(seaImg);
 if(sea.x<0){
sea.x=sea.width/2
 }
}