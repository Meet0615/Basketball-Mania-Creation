const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
function preload(){
    basketballImage = loadImage("Images/basketball.png");
    courtImage = loadImage("Images/court.png");
}


function setup(){
    createCanvas(1200,600);
    engine = Engine.create();
  world = engine.world;
    ball = new Ball(600,300);
   
    
}


function draw(){
    background(189);
    image(courtImage, 0, 0, width, height);
    drawSprites();
    ball.display()

}