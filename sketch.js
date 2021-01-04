
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var tree1;
var ground1;
var stone1;
var boyimage,boy
var mango1,mango2,mango3,mango4,mango5;
var chain1;
var launchingForce=100;


function preload(){
	boyimage=loadImage("boy.png");
}


function setup() {
	createCanvas(1000,1000);


	engine = Engine.create();
	world = engine.world;

   

   boy=createSprite(200,900,20,40);
   boy.addImage(boyimage);
   boy.scale=0.1;

   tree1=new tree(800,800,300,300);
   ground1=new ground(500,950,1000,20);
   stone1=new stone(150,850,50,50);
   mango1=new mango(810,790,20);
   mango2=new mango(850,710,20);
   mango3=new mango(810,700,20);
   mango4=new mango(850,750,20);
   mango5=new mango(770,740,20);
   chain1=new SlingShot(stone1.body,{x:200,y:800});


	Engine.run(engine);
  
}


function draw() {

  background(0);

  tree1.display();
  ground1.display();
  stone1.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  chain1.display();



 detectCollision(stone1,mango1);
  detectCollision(stone1,mango2);
  detectCollision(stone1,mango3);
  detectCollision(stone1,mango4);
  detectCollision(stone1,mango5);

  
  drawSprites();
 
}

function mouseDragged(){
  Matter.Body.setPosition(stone1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  chain1.fly();
}


function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(stone1.body, {x:200, y:300}) 
	  chain1.attach(stone1.body);
	}
  }


  function detectCollision(lstone,lmango){
   	
  
    mangoBodyPosition=lmango.body.position
    stoneBodyPosition=lstone.body.position
    
    var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  
      if(distance<=lmango.r+lstone.r)
      {
        //console.log(distance);
        Matter.Body.setStatic(lmango.body,false);
      }
  
    }







