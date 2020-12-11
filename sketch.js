var car , wall , speed ,weight;

function setup() {
 
  background("black")
  speed=random(55,90)
  weight=random(400,1500)


 car = createSprite(50, 200, 50, 50);
 car.shapeColor=color("white")

 wall = createSprite(1500,200,60,canvas.height/2) 
 wall.shapeColor=color("white")
}

function draw() {
  createCanvas(1600,400)
  background(255,255,255);  
  
  car.velcityX=speed;

  if ( wall.x-car.x<(car.width +wall.width)/2){
    car.velocityX=0;
    var deformation=0.5*weight*speed*speed/22509

    if (deformation>180){
      car.shapeColor=color(255,0,0)
    }

    if (deformation <180 && deformation>100)
   car .shapeColor=color(230,230,0)
  }

  if( deformation<100){
    car .shapeColor=color(0,255,0)
  }

  drawSprites();

}

