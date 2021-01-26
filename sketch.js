
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bob1,rope1;
var bob2,rope2;
var bob3,rope3;
var bob4,rope4;
var bob5,rope5;
var roof;


function preload()
{
	
}

function setup() {
	createCanvas(1200, 800);


	engine = Engine.create();
	world = engine.world;

   bob1 = new Bob(250,300);
   bob2 = new Bob(300,300);
   bob3 = new Bob(350,300);
   bob4 = new Bob(400,300);
   bob5 = new Bob(450,300);
   roof = new Roof(200,500);

   rope1 = new Rope(bob1.body,roof.body,-100,0);
   World.add(world.rope1);

   rope2 = new Rope(bob2.body,roof.body,-50,0);
   World.add(world.rope2);

   rope3 = new Rope(bob3.body,roof.body,0,0);
   World.add(world.rope3);

   rope4 = new Rope(bob4.body,roof.body,50,0);
   World.add(world.rope4);

   rope5 = new Rope(bob5.body,roof.body,100,0);
   World.add(world.rope5);


   Engine.run(engine);
  
}


function draw() {
  background("white");
  roof.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
 
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();


  drawSprites();
 
}
function keyPressed(){
	Matter.Body.applyForce(bob1.body,bob1.body.position,{x:730,y:0});
}



