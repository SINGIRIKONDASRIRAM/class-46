var backgrd,bg1;
var boy,boyIMG;
var mother,motherIMG;
var utensil1,utensil2,utensil3,utensil4,utensil5,utensil1IMG,utensil2IMG,utensil3IMG,utensil4IMG,utensil5IMG;
var furniture1,furniture2,furniture3,furniture4,furniture1IMG,furniture2IMG,furniture3IMG,furniture4IMG,furniture5,furniture5IMG;
var bg2,bg3,bg4;
var invisibleground;

function preload(){
bg1=loadImage("interior.jpg");
boyIMG=loadAnimation("boy1.PNG","boy2.png","boy3.png","boy4.png");
bg2 = loadImage("beadroom.jpg");
bg3 =  loadImage("kitchen.png");
bg4 = loadImage("verenda.jpg");
motherIMG=loadImage("mother.png");
utensil1IMG=loadImage("utensil1.png");
utensil2IMG=loadImage("utensil2.png");
utensil3IMG=loadImage("utensil3.png");
utensil4IMG=loadImage("utensil4.png");
utensil5IMG=loadImage("utensil5.png");
furniture1IMG=loadImage("furniture1.png");
furniture2IMG=loadImage("furniture2.png");
furniture3IMG=loadImage("furniture3.png");
furniture4IMG=loadImage("furniture4.png");
furniture5IMG=loadImage("furniture_5.png");
}


function setup() {
  createCanvas(displayWidth-50,displayHeight - 300);
  backgrd=createSprite(displayWidth/2,displayHeight/2,width+10,height+10);
  backgrd.scale=(3.0);
  boy=createSprite(displayWidth/2,displayHeight-350);
  boy.addAnimation("boy",boyIMG);
  boy.scale=(1.5);
  mother=createSprite(200,displayHeight-450);
  mother.addImage(motherIMG);
  mother.scale=(1.2);
  invisibleground=createSprite(displayWidth/2,displayHeight-330,width,20);
  invisibleground.visible = false;
}

function draw() {
  if(getbackground()){
          getbackground();
  }
  if(keyDown("space")) {
          boy.velocityY=-7  
  }
  boy.velocityY=boy.velocityY+1;
  boy.collide(invisibleground);
  spawnUtensils();
  spawnfurniture();
  drawSprites();

}
function spawnUtensils(){
  if(frameCount % 100 ===0 ){
 
  utensil=createSprite(200,displayHeight-450);
  utensil.velocityX = 10;
    var rand = Math.round(random(1,5));
    switch(rand) {
      case 1: utensil.addImage(utensil1IMG);
              break;
      case 2: utensil.addImage(utensil2IMG);
              break;
      case 3: utensil.addImage(utensil3IMG);
              break;
      case 4: utensil.addImage(utensil4IMG);
              break;
      case 5: utensil.addImage(utensil5IMG);
              break;
      default: break;
    }
    utensil.lifetime = 400;
  }
}

function spawnfurniture(){
  if(frameCount % 200 ===0 ){
 
  furniture=createSprite(width,displayHeight-450);
  furniture.velocityX = -10;
    var rand = Math.round(random(1,4));
    switch(rand) {
      case 1: furniture.addImage(furniture1IMG);
              break;
      case 2: furniture.addImage(furniture2IMG);
              break;
      case 3: furniture.addImage(furniture3IMG);
              break;
      case 4: furniture.addImage(furniture4IMG);
              break;
      case 5: furniture.addImage(furniture5IMG);
              break;
      default: break;
    }
    furniture.lifetime = 400;
  }
}

function getbackground(){
        if(frameCount % 250 ===0 ){
                  var rand = Math.round(random(1,5));
                
                  switch(rand) {
                    case 1: backgrd.addImage(bg1);
                            break;
                    case 2: backgrd.addImage(bg2);
                            break;
                    case 3: backgrd.addImage(bg3);
                            break;
                    case 4: backgrd.addImage(bg4);
                            break;
                    default: break;
                  }
                  backgrd.lifetime = 800;
                }
        }
