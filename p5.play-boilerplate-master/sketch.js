var car;
var wall;
var speed;
var weigh;

function setup() {
  createCanvas(1600,400);

  speed = random(55,90);
  weight = random(400,1500);

  wall = createSprite(1500,200,50,height/2);
  wall.shapeColor = "black";  

  car = createSprite(50,200,50,50);
  car.shapeColor = "white";
  car.velocityX = speed;
  
}

function draw() {
  background("gray");  

  if(wall.x-car.x < (car.width+wall.width/2)){

    car.velocityX = 0;
    var deformation=0.5 * weight * speed * speed/22509;
    if(deformation>180){
      car.shapeColor = ("green");
    }

    if(deformation<180 && deformation>100){
      car.shapeColor = ("red");
    }

    if(deformation<100){
      car.shapeColor = color("yellow");
    }

  }

  drawSprites();
}