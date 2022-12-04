const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var fruit;
var fruit2;
var fruit3;
var food;
var cow;
var button,button2,button3;
var ballon;
var rope,ground;
var canW,canH;
var rope2,rope3;
var bg_img;


let engine;
let world;



function preload()  {
  fruit = loadImage('fruit.png');
  cow = loadImage('cow.png');
  button = loadImage('button.png');
  button2 = loadImage('button2.png');
  button3 = loadImage('button3.png');
  ballon =loadImage('ballon.png');
  
  
}
 function setup(){
  
  var isMobile = /iPhone|iPad|Android/i.test(navigator.userAgente);
  if(isMobile){
    canW = displayWidth;
    canH = displayHeight;
    createCanvas(displayWidth+80,displayHeight);
  }else{
    canW = displayWidth;
    canH = displayHeight;
    createCanvas(displayWidth,displayHeight);
  }
  
  frameRate(80);
    
    button = createImg('button.png');
    button.position(20,30);
    button.size(50,50);
    button.mouseClicked(drop);

    button2 = createImg('button2.png');
    button2.position(330,35);
    button2.size(60,60);
    button2.mouseClicked(drop2);
  
    button3 = createImg('button3.png');
    button3.position(360,200);
    button3.size(60,60);
    button3.mouseClicked(drop3);
    
    rope = new Rope(8,{x:40,y:30});
    rope2 = new Rope(7,{x:370,y:40});
    rope3 = new Rope(4,{x:400,y:225});
  
    ground = new Ground(200,canH,600,20);
    cow.frameDelay = 20;
   
    cow = createSprite(170,canH-80,100,100);
    cow.scale = 0.2;
  
    fruit = Bodies.circle(300,300,20);
    Matter.Composite.add(rope.body,fruit);
     
    engine = Engine.create();
    world = engine.world;

    fruit = new Link(rope,fruit);
    fruit2 = new Link(rope2,fruit);
    fruit3 = new Link(rope3,fruit);

    rectMode(CENTER);
    ellipseMode(RADIUS);
    textSize(50)
 }

function draw() 
{
  background(51);
  image(bg_img,0,0,displayWidth,displayHeight);

  push();
  imageMode(CENTER);
  if(fruit!=null){
    image(food,fruit.position.x,fruit.position.y,70,70);
  }
  pop();

  rope.show();
  rope2.show();
  rope3.show();
  Engine.update(engine);
  ground.show();

  drawSprites();
}

function drop()
{
 rope.break();
  fruit_con.detach();
  fruit_con = null; 
}

function drop2()
{
  rope2.break();
  fruit_con_2.detach();
  fruit_con_2 = null;
}

function drop3()
{
  rope3.break();
  fruit_con_3.detach();
  fruit_con_3 = null;
}
function collide(body,sprite)
{
  if(body!=null)
        {
         var d = dist(body.position.x,body.position.y,sprite.position.x,sprite.position.y);
          if(d<=80)
            {
              World.remove(engine.world,fruit);
               fruit = null;
               return true; 
            }
            else{
              return false;
            }
         }
}
