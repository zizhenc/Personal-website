class Vertex {
  constructor(n, factor) {
    this.value=n;
    this.factor=factor;
    this.child=[];
    this.diameter=max(30,textWidth(n)+10);
    this.r=this.diameter*2;
    this.auto=true;
  }
  display(x, y) {
    if(this.auto){
      this.x=x;
      this.y=y;
    }
    stroke(255, 255, 0);
    fill(0);
    circle(this.x, this.y, this.diameter);
    textAlign(CENTER, CENTER);
    noStroke();
    fill(255, 255, 0);
    text(this.value, this.x, this.y);
    let angle=PI/(this.child.length+1);
    for (let i in this.child)
      this.child[i].display(this.x-this.r*cos(angle*(parseInt(i)+1)), this.y+this.r*sin(angle*(parseInt(i)+1)));
  }
  mouseDrag(){
    if(mouseX<this.x+this.diameter/2&&mouseX>this.x-this.diameter/2&&mouseY<this.y+this.diameter/2&&mouseY>this.y-this.diameter/2){
      this.auto=false;
      this.x=mouseX;
      this.y=mouseY;
    }
  }
}
