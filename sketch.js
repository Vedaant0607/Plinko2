const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies;

var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;
var scores = 0;
var particle=0;

function setup() {
  createCanvas(900,800);
  
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);
  for (var k = 0; k <=width; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var j = 10; j <=900; j=j+40) 
    {
    
       plinkos.push(new Plinko(j,55,35));
    }
   for (var j = 30; j <=885; j=j+40) 
    {
    
       plinkos.push(new Plinko(j,105,25));
    } 
    for (var j =10; j <=900; j=j+40) 
    {
    
       plinkos.push(new Plinko(j,155,5));
    }
     for (var j = 30; j <=885; j=j+40) 
    {
    
       plinkos.push(new Plinko(j,205,25));
    } 
    for (var j = 10; j <=900; j=j+40) 
    {
    
       plinkos.push(new Plinko(j,255,35));
    }
    for (var j = 30; j <=885; j=j+40) 
    {
    
       plinkos.push(new Plinko(j,305,25));
    } 
Engine.run(engine)
}

function draw() {
  background(0); 
  score();
  noStroke();
        textSize(15)
        fill("white")
        text("Score  " + scores,20, 20)
// score
        textSize(15)
        fill("white")
        text("500  ",35, 600)
        textSize(15)
        fill("white")
        text("500  ",105, 600)
        textSize(15)
        fill("white")
        text("500  " ,190, 600)
        textSize(15)
        fill("white")
        text("500  " ,270, 600)
        textSize(15)
        fill("white")
        text("100  " ,350, 600)
        textSize(15)
        fill("white")
        text("100  " ,430, 600)
        textSize(15)
        fill("white")
        text("100  " ,510, 600)
        textSize(15)
        fill("white")
        text("200  " ,590, 600)
        textSize(15)
        fill("white")
        text("200  ",670, 600)
        textSize(15)
        fill("white")
        text("200  ",745, 600)
        textSize(15)
        fill("white")
        text("200  " ,830, 600)

  Engine.update(engine)
  ground.display();

  /*if(frameCount%20===0){
    console.log("hello")
    particles.push(new Particle(random(15,78), 10,10));
  }
  if(mouseIsPressed && particle<10){
    console.log("hello")
    particles.push(new Particle(random(15,785), 10,10));
    particle = particle+1
  } */
  for (var j = 0; j < particles.length; j++ ) {
    
    particles[j].display();
    
  }
  for (var i = 0; i < plinkos.length; i++) {
     
    plinkos[i].display();
    
  }
  for (var k = 0; k < divisions.length; k++) {
     
    divisions[k].display();
  }
}
function mouseReleased(){
  if(particle<10){
  particles.push(new Particle(random(15,785), 10,10));
  particle = particle+1
}}
 function score(){
  if (particles.x >= 300 && particles.y > 600){
    scores = scores +500;
  }
}




