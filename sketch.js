var bullet, wall, thickness, speed, weight;

function preload(){
  
}


function setup() {
  createCanvas(1600,400);
  
  thickeness = random(22,83);
  speed = random(223, 321);
  weight = random(30, 52);

  bullet = createSprite(200,200,30,10);
  bullet.VelocityX = 8;

  wall = createSprite(1200, 200, thickness, height/2);
  wall.shapeColor = color(80, 80, 80);
}


function draw(){
  background("black");

  if (hasCollided(bullet, wall)){
    bullet.VelocityX = 0;
    var damage = (0.5*weight*speed*speed) / (thickness*thickness*thckness);
  }

  if (gamage>10) {
    wall.shapeColor = color(255, 0, 0);
  }

  if (damage<10) {
    wall.shapeColor = color(0, 255, 0);
  }

  drawSprites();
}

function hasCollided(lbullet, lwall){
  bulletRightEdge =  lbullet.x + lbullet.width;
  wallLeftEdge = lwall.x;

  if (bulletRightEdge >= wallLeftEdge) {
    return true ;
  }
  return false;
}