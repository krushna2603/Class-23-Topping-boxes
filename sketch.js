const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies


var engineV,worldV,objectV

var ground,box1,box2;
function setup() {
  var canvas =  createCanvas(400,400);
  //Creates the physics engine
  engineV = Engine.create();
 // Add the engine to the world
  worldV=engineV.world;

  

 box1=new BoxClass(200,300,50,50);
 box2=new BoxClass(240,100,50,100);
 ground=new Ground(200,390,400,20);
}


function draw() {
  background("lightgreen"); 
  Engine.update(engineV);
 
box1.display();
box2.display();
 
ground.display();
}