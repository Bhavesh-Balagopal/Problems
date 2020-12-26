
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var prball;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw(){
  rectMode(CENTER);
  background(10);

var ground = new Ground(200,200,100,10);
ground.display();
prball = new Papre(200,200,10,10);
prball.display();
}



