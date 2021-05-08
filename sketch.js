
var bow, arrow, background_img, redB, pinkB, greenB, blueB, arrowGroup;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage, blue_balloonImage, background_imgImage;
var count=0

function preload() {

  background_imgImage = loadImage("background0.png");

  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");

}



function setup() {
  createCanvas(600, 500);

  //creating background_img
  background_img = createSprite(300, 0, 600, 600);
  background_img.addImage(background_imgImage);
  background_img.scale = 3

  // creating bow to shoot arrow
  bow = createSprite(580, 220, 20, 50);
  bow.addImage(bowImage);
  bow.scale = 1;

  score = 0

  redB = new Group();
  greenB = new Group();
  blueB = new Group();
  pinkB = new Group();
  arrowGroup = new Group();
  
}

function draw() {

  background("white")

  // moving ground
  background_img.velocityX = -3

  if (background_img.x < 0) {
    background_img.x = background_img.width / 2;
   // camera.position.x=background_img.x;
  }

  //moving bow
  bow.y = World.mouseY

  // release arrow when space key is pressed
  if (keyWentDown("space")&&count<=10) {

    createArrow();
count++;

  }
 
  //creating continous enemies
  var select_balloon = Math.round(random(1, 4));

  if (World.frameCount % 100 == 0) {
    if (select_balloon == 1) {
      redBalloon();
    } else if (select_balloon == 2) {
      greenBalloon();
    } else if (select_balloon == 3) {
      blueBalloon();
    } else {
      pinkBalloon();
    }
  }

  if (arrowGroup.isTouching(redB)) {
    redB.destroyEach();
    arrowGroup.destroyEach();
    score = score + 1;
  }
 if (arrowGroup.isTouching(greenB)) {
    greenB.destroyEach();
    arrowGroup.destroyEach();
    score = score + 3;
  }
  if (arrowGroup.isTouching(blueB)) {
    blueB.destroyEach();
    arrowGroup.destroyEach();
    score = score + 2;
  }
  if (arrowGroup.isTouching(pinkB)) {
    pinkB.destroyEach();
    arrowGroup.destroyEach();
    score = score + 1;
  }
  

  drawSprites();
  text("Score: " + score, 500, 50);
  if (count >10){
    arrowGroup.setVelocityXEach(0);
    redB.setVelocityXEach(0);
    greenB.setVelocityXEach(0);
    blueB.setVelocityXEach(0);
    pinkB.setVelocityXEach(0);
    background_img.velocityX=0;
    redB.destroyEach();
    greenB.destroyEach();
    pinkB.destroyEach();
    blueB.destroyEach();
    arrowGroup.destroyEach();
  }

}


function redBalloon() {
  var red = createSprite(-20, Math.round(random(20, 370)), 10, 10);
  red.addImage(red_balloonImage);
  //camera.position.x=red.x;
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = 0.1;
  redB.add(red);
}

function blueBalloon() {
  var blue = createSprite(-20, Math.round(random(20, 370)), 10, 10);
 // camera.position.x=blue.x;
  blue.addImage(blue_balloonImage);
  blue.velocityX = 3;
  blue.lifetime = 150;
  blue.scale = 0.1;
  blueB.add(blue);
}

function greenBalloon() {
  var green = createSprite(-20, Math.round(random(20, 370)), 10, 10);
  //camera.position.x=green.x;
  green.addImage(green_balloonImage);
  green.velocityX = 3;
  green.lifetime = 150;
  green.scale = 0.1;
 
  greenB.add(green);
}

function pinkBalloon() {
  var pink = createSprite(-20, Math.round(random(20, 370)), 10, 10);
  //camera.position.x=pink.x;
  pink.addImage(pink_balloonImage);
  pink.velocityX = 3;
  pink.lifetime = 150;
  pink.scale = 1
  
  pinkB.add(pink);
}


// Creating  arrows for bow
function createArrow() {
  var arrow = createSprite(500, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y = bow.y;
  arrow.velocityX = -4;
  //camera.position.x=arrow.x
  arrow.lifetime = 100;
  arrow.scale = 0.3;
  arrowGroup.add(arrow);
}