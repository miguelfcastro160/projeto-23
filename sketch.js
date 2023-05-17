
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var btn2;

var angle = 60;
var angle2 = 160;

function setup() {
  createCanvas(800, 700);

  engine = Engine.create();
  world = engine.world;

  var ball_options = {
    restitution: 0.95,
    frictionAir: 0.01
  }

  var ground_options = {
    isStatic: true
  };

  //btn2 = createImg('up.png');
  //btn2.position(350, 30);
  //btn2.size(50, 50);
  //btn2.mouseClicked(vForce);

  ground1 = Bodies.rectangle(300, 200, 100, 20, ground_options);
  World.add(world, ground1);

  ground4 = Bodies.rectangle(500, 200, 100, 20, ground_options);
  World.add(world, ground4);

  ball = Bodies.circle(500, 10, 20, ball_options);
  World.add(world, ball);

  bal2 = Bodies.circle(300, 10, 20, ball_options);
  World.add(world, bal2);

  ground = Bodies.rectangle(50, 380, 150, 20, ground_options);
  World.add(world, ground);
  ground2 = Bodies.rectangle(750, 380, 150, 20, ground_options);
  World.add(world, ground2);
  ground3 = Bodies.rectangle(400, 600, 800, 20, ground_options);
  World.add(world, ground3);


  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() {
  background(51);
  Engine.update(engine);


  Matter.Body.rotate(ground1, angle);
  //serve para capturar a nova configuração
  push();
  translate(ground1.position.x, ground1.position.y);
  rotate(angle);
  rect(0, 0, 100, 20);
  //reverte para a antiga configuração antiga
  pop()

  angle += 0.1;

  Matter.Body.rotate(ground4, angle2);
  //serve para capturar a nova configuração
  push();
  translate(ground4.position.x, ground4.position.y);
  rotate(angle2);
  rect(0, 0, 100, 20);
  //reverte para a antiga configuração antiga
  pop()

  angle2 += 0.1;

  ellipse(ball.position.x, ball.position.y, 20);
  ellipse(bal2.position.x, bal2.position.y, 20);
  rect(ground.position.x, ground.position.y, 150, 20)
  rect(ground2.position.x, ground2.position.y, 150, 20)
  rect(ground3.position.x, ground3.position.y, 150, 20)


}

//function vForce() {
 // Matter.Body.applyForce(ball, { x: 0, y: 0 }, { x: 0, y: -0.05 });
//}
