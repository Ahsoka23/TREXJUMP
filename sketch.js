var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var abletojump=true;
var counter=0;
var shouldcount=false;
var fakeground; 
function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadImage("trex_collided.png");
  groundImage = loadImage("ground2.png")
}

function setup() {
  createCanvas(600, 200);
  
  //create a trex sprite
  trex = createSprite(50,180,20,50);
  trex.addAnimation("running", trex_running);
  fakeground= createSprite(300,190,600,10)
  fakeground.visible=false;
  //adding scale and position to trex
  trex.scale = 0.5;
  trex.x = 50
  
  //create ground sprite
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;

  //fake2= createSprite(300,20,600,100);
}
function draw() {
  background(220);
  
  ground.velocityX = -2
  
  if(counter>10){
    counter=0;
    abletojump=false;
    shouldcount=false
  }

  if (ground.x<0){
    ground.x = ground.width/2;
  }
  
  
  if(trex.isTouching(fakeground)){
    abletojump=true;
  }

  trex.velocityY = trex.velocityY + 0.8
  console.log(counter)
  
 //s top trex from falling down 
  trex.collide(fakeground);
  drawSprites();
  //trex.collide(fake2)



  if(shouldcount){
    counter++;
    if(abletojump){
      trex.velocityY= -counter;

    }
  } else{
    counter=0;
    
  }

  
 
}

function keyReleased(){
  if(keyCode==32){
    abletojump=false
    shouldcount=false;
    
  }
}

function keyPressed(){
  //jumping the trex on space key press
  if(keyCode==32 ) {
    if(counter<10 && abletojump){
      shouldcount=true;
    }
  }
  
}