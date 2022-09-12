//alterar a corda na classe rope - codigo na plataforma

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var hero, monster, rope, ground;
var box1, box2;

function preload() {
  bg = loadImage("GamingBackground.png");
}

function setup() {
  createCanvas(3000, 800);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 600, 1200, 20);
  hero = new Hero(400, 800, 250);
  rope = new Rope(hero.body, { x: 500, y: 50 });
  monster = new Monster(1100, 550, 300);

  box1 = new Box(900, 400, 70, 70);
  box2 = new Box(900, 500, 70, 70);
  box3 = new Box(900, 300, 70, 70);
  box4 = new Box(900, 200, 70, 70);
  box5 = new Box(900, 100, 70, 70);
  box6 = new Box(800, 500, 70, 70);
  box7 = new Box(800, 400, 70, 70);
  box8 = new Box(800, 300, 70, 70);
  box9 = new Box(800, 200, 70, 70);
  box10 = new Box(800, 100, 70, 70);
  box11 = new Box(700, 500, 70, 70);
  box12 = new Box(700, 400, 70, 70);
  box13 = new Box(700, 300, 70, 70);

  //criar uma pilha de caixas

}

function draw() {
  background(bg);

  Engine.update(engine);

  ground.display();
  hero.display();
  rope.display();
  monster.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();


}

//criar função mouseDragged - codigo na plataforma
function mouseDragged() {
  Matter.Body.setPosition(hero.body, { x: mouseX, y: mouseY });
}


