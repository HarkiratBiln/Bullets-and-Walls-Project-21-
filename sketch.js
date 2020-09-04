//Creating the Variables
var bullet;
var wall, thickness;
var speed, weight;


function setup() {
 createCanvas(1600,400);

 //Setting the Speed and Weight into Random Values
 speed = random(223,321);
 weight = random(30,52);
 thickness = random(22,83);
 

 //Creating the Car
 bullet = createSprite(50,200,50,25); 
 bullet.velocityX = speed;
 bullet.shapeColor = color(255);


 //Creating the Wall
 wall = createSprite(1200,200,thickness,height/2);
 wall.shapeColor = color("maroon");


}



function draw() {

 background(0);


 //Executing the hasCollided Function
 if(hasCollided(bullet,wall)) {
   bullet.velocityX = 0;
   
   var damage = 0.5 * speed* speed/(thickness *thickness *thickness);

   if(damage > 10) {
     wall.shapeColor = color(255,0,0);

   }

   if(damage < 10) {
     wall.shapeColor = color(0,255,0);

   }

 }


 drawSprites();

}


//Function hasCollided
function hasCollided(bullet, wall) {
    bulletRightEdge = bullet.x + 1ullet.width;
    wallLeftEdge = wall.x;

    if(bulletRightEdge >= wallLeftEdge) {
      return true
    }
      return false;
}


