
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball, grd, dustbinBottom, dustbinLeft, dustbinRight, dustbinImage, bin, launch;

function preload()
{
	dustbinImage=loadImage("img/dustbin.png");
}

function setup() {
	createCanvas(1600, 400);


	engine = Engine.create();
	world = engine.world;
	grd = new ground(800, 380, 1600, 40);
	ball = new paper(300, 200);
	
	dustbinBottom = new dustbin(1500, 350, 100, 20);
	dustbinLeft = new dustbin(1450, 300, 20, 100);
	dustbinRight = new dustbin(1550, 300, 20, 100);

	bin = createSprite(1500, 300, 50, 50);
	bin.scale=0.4;

	launch = new launcher(ball.body, {x:300, y:200});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  
  
  
  grd.display();
  dustbinBottom.display();
  dustbinLeft.display();
  dustbinRight.display();
  
  bin.addImage(dustbinImage);
  drawSprites();
   ball.display();
   launch.display();
 
}
/*
function keyPressed() {
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body, ball.body.position, {x:175, y:-175});
	}
}
*/
function mouseDragged(){
	Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});

}
 function mouseReleased(){
	 launch.fly();
 }
 