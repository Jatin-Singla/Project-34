var ball 
var groudnOBJ
var left_side

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1450, 730);
	engine = Engine.create();
	world = engine.world;
var ball_options = {
	isStatic:false,
	restitution:0.3,
	friction:0,
	density:1.2
}
ball = Bodies.circle(300,600,30,ball_options)
World.add(world,ball)


groundOBJ = new Ground(750,670,1500,20)
left_side = new Ground(1100,600,20,120)
right_side = new Ground(1300,600,20,120)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
ellipse(ball.position.x,ball.position.y,30,30)
groundOBJ.display()
left_side.display()
right_side.display()



  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:200,y:-190})
	}
}

