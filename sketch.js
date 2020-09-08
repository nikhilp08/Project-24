const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, pig1,bird;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(600,height,1200,20)

    paper1 = new Paper(100,100,10);
    rect1 = new Dustbin(1000,380,200,20);
	rect2 = new Dustbin(910,320,20,100);
	rect3 = new Dustbin(1090,320,20,100);
}

function draw(){
    background(0);
    Engine.update(engine);
    
    ground.display();
    paper1.display();
    rect1.display();
    rect2.display();
    rect3.display();
}

function keyPressed(){
    if(keyCode === UP_ARROW){
        Matter.Body.applyForce(paper1.body,paper1.body.position,{x:30,y:-13})
    }
}