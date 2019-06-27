var player=new Player();
var tri;
function preload(){
  player.load();
}
function setup() {
  let canvas=createCanvas(windowWidth<620?windowWidth:620, 40);
  canvas.parent('header');
  tri=new Triangle();
}
function draw() {
  background(255);
  tri.display();
  player.display();
}
function mousePressed(){
  player.mousePress();
}
function mouseReleased(){
  player.mouseRelease();
}
function windowResized(){
  resizeCanvas(windowWidth<630?windowWidth:620, 40);
}
