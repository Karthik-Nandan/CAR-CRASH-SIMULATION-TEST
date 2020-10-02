var zenia,torus,cyclap,deformation,speed,weight,seperator1,seperator2,seperator3,collider1,collider2,collider3;
var gameState="PLAY", PLAY, END;

function setup() {
  createCanvas(800,400);
  zenia=createSprite(0,65,70,30);
  tourus=createSprite(0,188,70,30);
  cyclap=createSprite(0,321,70,30);

  seperator1=createSprite(400,133,800,15);
  seperator2=createSprite(400,266,800,15);
  seperator3=createSprite(400,385,800,15);

  collider1=createSprite(770,65,30,100)
  collider2=createSprite(770,195,30,100);
  collider3=createSprite(770,325,30,98);

  zenia.shapeColor="white";
  tourus.shapeColor="white";
  cyclap.shapeColor="white";

  seperator1.shapeColor="white";
  seperator2.shapeColor="white";
  seperator3.shapeColor="white";

  collider1.shapeColor="blue";
  collider2.shapeColor="blue";
  collider3.shapeColor="blue";

  zenia.velocityX= Math.round(random(50,100));
  
  tourus.velocityX=Math.round(random(50,100));

  cyclap.velocityX=Math.round(random(50,100));

  zenia.weight= Math.round(random(400, 1500));
  tourus.weight= Math.round(random(400, 1500));
  cyclap.weight= Math.round(random(400, 1500));

  zenia.deformation=((0.5*zenia.weight*zenia.velocityX*zenia.velocityX)/22500);
  tourus.deformation=(0.5*tourus.weight*tourus.velocityX*tourus.velocityX)/22500;
  cyclap.deformation=(0.5*cyclap.weight*cyclap.velocityX*cyclap.velocityX)/22500;

  }

function draw() {
  background("black"); 

  text("speed:"  +zenia.velocityX, 300, 20 );
  text("speed:"  +tourus.velocityX, 300, 155 );
  text("speed:"  +cyclap.velocityX, 300, 288 );

  text("weight:"  +zenia.weight, 500, 20 );
  text("weight:"  +tourus.weight, 500, 155 );
  text("weight:"  +cyclap.weight, 500, 288 );

  
 

  
  if( collider1.x - zenia.x < collider1.width/2 + zenia.width/2){
    zenia.velocityX=0; 
            
    if(zenia.deformation>180){
      zenia.shapeColor=color(255,0,0);     
        }
        if(zenia.deformation>100 && zenia.deformation<180){
          zenia.shapecolour=color(230, 230, 0);
        }
        if(zenia.deformation<100){
          zenia.shapeColor=color(0, 255, 0);      
            }
                              
  }
  if( collider2.x - tourus.x < collider2.width/2 + tourus.width/2){
    tourus.velocityX=0;
     if(tourus.deformation>180){
      tourus.shapeColor=color(255,0,0);   
        }
        if(tourus.deformation>100 && tourus.deformation<180){
          tourus.shapecolour=color(230, 230, 0);
        }
        if(tourus.deformation<100){
          tourus.shapeColor= color(0, 255, 0);   
            }

    }
    if( collider3.x - cyclap.x < collider3.width/2 + cyclap.width/2){
      cyclap.velocityX=0; 
      if(cyclap.deformation>180){
         cyclap.shapeColor=color(255,0,0);    
        }
      if(cyclap.deformation>100 && cyclap.deformation<180){
         cyclap.shapecolour=color(230, 230, 0);
         }
      if(cyclap.deformation<100){
          cyclap.shapeColor=color(0, 255, 0);     
        }
        
  }
 
  drawSprites();

 
}