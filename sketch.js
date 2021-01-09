var tom, tomImg1, tomstand, tomRunning;
var jerry, jerryImg1, jerrystand, jerryJumping;
var garden, gardenImage;
var catSound, forestSound;
var flower, flowerImage;

function preload() {

    gardenImage=loadImage("garden.png");
    tomImg1= loadImage("tomOne.png");
    tomRunning=loadAnimation("tomTwo.png","tomThree.png");
    tomstand= loadImage("tomFour.png");
    jerryImg1=loadImage("jerryOne.png");
    jerryJumping= loadAnimation("jerryTwo.png","jerryThree.png");
    jerrystand=loadImage("jerryFour.png");
    flowerImage=loadImage("flower.png");
    catSound=loadSound("tomSound.mp3");
    forestSound=loadSound("forestSound.mp3");
}

function setup(){

    createCanvas(600,400);

    garden=createSprite(300,215,20,20);
    garden.addImage(gardenImage);
    garden.scale=0.616;

    tom=createSprite(450,340,20,20);
    tom.scale=0.09;

    jerry=createSprite(130,360,20,20);
    jerry.scale=0.07;

    flower=createSprite(250,10,01,01);

    catSound.play();
    forestSound.play();
    
}

function draw() {
    background("black");

    tom.addImage(tomImg1);
    jerry.addImage(jerryImg1);

   if(tom.x - jerry.x <(tom.width - jerry.width)/2){

    tom.velocityX = 0;
    tom.addAnimation("stand", tomstand);
    tom.changeAnimation("stand", tomstand);

    jerry.addAnimation("stand", jerrystand);
    jerry.changeAnimation("stand", jerrystand);

    flower.addImage("flowerImage", flowerImage);
    flower.velocityY = 2;
    flower.scale = 0.3;


   }

    drawSprites();
}

function keyPressed(){

  if(keyCode === LEFT_ARROW){

tom.velocityX = -4;
tom.addAnimation("Running", tomRunning);
tom.changeAnimation("Running", tomRunning);
tom.scale=0.12;

jerry.addAnimation("jumping", jerryJumping);
jerry.changeAnimation("jumping", jerryJumping);
  }
}
