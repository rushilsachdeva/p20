var jerry,jerrysitIMG,jerrydanceIMG;
var cat,catsitIMG,catdanceIMG;
var garden,gardenIMG;

function preload() {
    //load the images here
    jerrydanceIMG= loadAnimation("images/mouse2.png","images/mouse3.png");
    jerrysitIMG = loadAnimation("images/mouse1.png");
    jerrystopIMG = loadAnimation("images/mouse4.png");

    catdanceIMG= loadAnimation("images/cat3.png","images/cat2.png");
    catsitIMG = loadAnimation("images/cat1.png");
    catstopIMG = loadAnimation("images/cat4.png");
    gardenIMG = loadAnimation("images/garden.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    
   garden = createSprite(500,400,1000,1000);
   garden.addAnimation("forest", gardenIMG);
   
   jerry = createSprite(80,600, 20, 20); 
   jerry.addAnimation("sitting", jerrysitIMG);
   jerry.scale = 0.1;
   jerry.debug=true;
  
   cat = createSprite(780,600, 20, 20);
   cat.addAnimation("sit", catsitIMG);
   cat.scale = 0.1;
   cat.debug=true;

   

}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    if(cat.x-jerry.x<cat.width/2-jerry.width/2){

    cat.velocityX=0;
    cat.x=140;
    cat.addAnimation("stop",catstopIMG);
    cat.changeAnimation("stop" );
    jerry.addAnimation("stoping",jerrystopIMG);
    jerry.changeAnimation("stoping" );
    

    }

    
      
    
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

  if(keyCode===LEFT_ARROW){
  
  
  cat.velocityX=-5;
  cat.addAnimation("move",catdanceIMG );
  cat.changeAnimation("move" );
  jerry.addAnimation("moving",jerrydanceIMG );
  jerry.changeAnimation("moving" );
  }

}



