
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var block1,block2,block3,block4,block5,block6,block7;
var ground1,ground2;



function preload() {
  }

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    ground1=new Ground (600, 300,240,10)}
  
  function draw(){  
      
    background("black");
    Engine.update(engine);
    ground1.display();     
}

//function mouseDragged(){
    //Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
//}


//function mouseReleased(){
    //slingshot.fly();
//}
