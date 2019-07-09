var tree=null, windAngle = 0, rny=[];
function setup() {
  var canvas=createCanvas(600, 400);
  canvas.parent('processing');
  for (var i=0; i<width/6; i++)
    rny[i]= noise(random(height/4, height*3/4))*height/2;
  tree = new Branch(null, width/2, height, PI, 70);
}
function draw() {
  background(255);
  fill(39, 210, 127);
  noStroke();
  rect(0, height-height/20, width, height/20);
  fill(39, 210, 127, 90);
  rect(0, height-height/20-height/40, width, height/20+height/40);
  fill(39, 210, 127, 80);
  rect(0, height-height/10, width, height/10);
  fill(39, 210, 127, 70);
  rect(0, height-height/20-3*height/40, width, height/20+3*height/40);
  fill(39, 210, 127, 60);
  rect(0, height-height/20-height/10, width, height/20+height/10);
  fill(39, 210, 127, 50);
  rect(0, height-height/20-height/8, width, height/20+height/8);
  fill(39, 210, 127, 40);
  rect(0, height-height/5, width, height/5);
  fill(39, 210, 127, 30);
  rect(0, height-height/20-7*height/40, width, height/20+7*height/40);
  fill(39, 210, 127, 20);
  rect(0, height-height/20-height/5, width, height/20+height/5);
  //house 1 & 2
  fill(213, 213, 213);
  rect(width*3/4, height/2, height/5, height/5);
  triangle(width*3/4, height/2, width*3/4+height/5, height/2, width*3/4+height/10, height/2-height/20);
  fill(0, 30);
  rect(width*3/4-height/16, height/2+height/5-height/8, height/8, height/8);
  triangle(width*3/4-height/16, height/2+height/5-height/8, width*3/4+height/16, height/2+height/5-height/8, width*3/4, height/2+height/6-height/8);
  //sun
  fill(255, 216, 0, 200);
  ellipse (width/6, height/4, height/7, height/7);
  fill(255, 216, 0, 90);
  ellipse (width/6, height/4, height/5, height/5);
  //the mountain line 
  var gap=width/rny.length, a = 0.0, inc = TWO_PI/50.0;
  for (var i=0; i<rny.length; i++) {
    stroke(142, 190, 127);
    strokeWeight(1); 
    line(gap*i, height, gap*i, height*2/3+cos(a)*height/10);
    //the changable grass
    stroke(162, 150, 120);
    strokeWeight(2); 
    line(gap*i, height, gap*i, height*2/3+sin(a)*height/15);
    stroke(162, 80, 115);
    line(gap*i, height, gap*i, height*2/3+cos(a)*height/20);
    a += inc;
  }
  if (frameCount%10==0)
    for (var i=0; i<rny.length; i++)
      rny[i]= noise(random(height/4, height*3/4))*height/2;
  for (var i=0; i<rny.length; i++) {
    stroke(0, 30);
    line(gap*i, height, gap*i, rny[i]+height/2);
    line(gap*i, height, gap*i, rny[i]+height*3/8);
  }
  tree.update();
  tree.display();
}
function mouseClicked() {
  tree = new Branch(null, width/2, height, PI, 70);
}