const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var bg1, bg2;
var character, charImg, character2, char2Img ;
var door;
var gameState = "ROOM";
function preload() {
    bg1 = loadImage("bg1.jpg")
    charImg = loadAnimation("1.png", "2.png", "3.png", "4.png", "5.png", "6.png", "7.png", "8.png")
    char2Img = loadImage("topview.png")
    bg2 = loadImage("bg2.jpg")
}

function setup(){
   createCanvas(1000, 800)
  character = createSprite(500, 600, 100, 100)
  character.addAnimation("animation", charImg)
  character.scale = 0.5

  door = createSprite(870, 510, 100, 170)
  door.visible = false;
  
}

function draw(){
   background(bg1)
  

  if(gameState==="ROOM"){
  if(keyDown("LEFT_ARROW")){
    character.x = character.x-10;
  }
  if(keyDown("RIGHT_ARROW")){
    character.x = character.x+10;
  }
  
  if(character.isTouching(door)){
   gameState = "MAZE";
  }
}
if(gameState === "MAZE"){
  background(bg2);
 character2 = createSprite(220, 270, 100, 100)
 character2.addImage(char2Img)
 character2.scale = 0.4
 character.visible = false;
}
drawSprites();
}

