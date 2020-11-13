
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;


	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	//Create the Bodies Here.
	box1 =  new Dustbin(590, 610, 20,100);
	//box1.shapeColor=rgb(255,0,0);
	World.add(world, box1);

	box2 =  new Dustbin (790, 610, 20,100);
	//box2.shapeColor=color("red");
	World.add(world, box2);
	box3 =  new Dustbin(692, 650, 200,20);
	//box3.shapeColor=rgb(255,0,0);
	World.add(world, box3);
	paper = new Paper(50,630,20);

	World.add(world, paper);
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true});
	World.add(world, ground);
	Engine.run(engine);
  
}


function draw() {
	Engine.update(engine);
 // rectMode(CENTER);
  background(0);
  drawSprites();
 box1.display();
 box2.display();
 box3.display();
 paper.display();

}

function keyPressed(){
	if(keyCode === UP_ARROW){
		//console.log("Key Pressed!" + paper.body.position.x, paper.body.position.y);
		Matter.Body.applyForce(paper.body,paper.body.position,{x: 10, y: -10});
	}
}