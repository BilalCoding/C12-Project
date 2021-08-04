var garden, rabbit, apple, orangeLeaf;
var gardenImg, rabbitImg, appleImg, orangeLeafImg;
var selectSprites;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  orangeLeafImg = loadImage("orangeLeaf.png");
}

function setup(){
  createCanvas(400,400);
  
  // Moving background
  garden = createSprite(200,200);
  garden.addImage(gardenImg);

  //creating the rabbit
  rabbit = createSprite(180,340,30,30);
  rabbit.scale = 0.09;
  rabbit.addImage(rabbitImg);

  
}

function createApples() {
  apple = createSprite(Math.round(random(50, 350)), 40, 10, 10);
  apple.addImage("apple", appleImg);
  apple.scale = 0.1;
  apple.velocityY = 5;
}

function createLeaves() {
  orangeLeaf = createSprite(Math.round(random(50, 350)), 40, 10, 10);
  orangeLeaf.addImage("orangeLeaf", orangeLeafImg);
  orangeLeaf.scale = 0.1;
  orangeLeaf.velocityY = 4;
}

function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  rabbit.x = World.mouseX;

  selectSprites = Math.round(random(1, 2));

  if(frameCount % 80 === 0) {
    if(selectSprites == 1) {
      createApples();
    }
    else {
      createLeaves();
    }
  }

  drawSprites();
}