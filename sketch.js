const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);
    
    box1 = new Box(900,300,75,75);
    box2 = new Box(1115,300,75,75);
    
    pig = new Pig(1007,300,60,60);
    pig2 = new Pig(1007,100,60,60);

    log = new Log(1007,250,300,30, PI);

    box4 = new Box(900,100,75,75);
    box3 = new Box(1115,100,75,75);

    log2 = new Log(1007,75,300,30, PI);

    box5 = new Box(1007,0,75,75);

    log3 = new Log(957,-25,150,20, -PI/4);
    log4 = new Log(1047,-25,150,20, PI/4);

}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    ground.display();
    pig.display();
    pig2.display();
    log.display();
    log2.display();
    log3.display();
    log4.display();
}