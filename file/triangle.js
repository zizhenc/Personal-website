class Triangle{
  constructor(){
    this.particle=[];
    for (let i=0;i<60;i++)
      this.particle.push(new Particle());
    this.distance=24;
  }
  display(){
    push();
    for (let i=0;i<this.particle.length-2;i++) {
      this.particle[i].update();
      for (let j=i+1;j<this.particle.length-1;j++) {
        this.particle[j].update();
	if (dist(this.particle[i].x,this.particle[i].y,this.particle[j].x,this.particle[j].y)<this.distance) {
	  for (let k=j+1;k<this.particle.length;k++) {
	    this.particle[k].update();
	    if (dist(this.particle[k].x,this.particle[k].y,this.particle[j].x,this.particle[j].y)<this.distance) {
	      strokeWeight(1);
	      triangle(this.particle[i].x,this.particle[i].y,this.particle[j].x,this.particle[j].y,this.particle[k].x,this.particle[k].y);
	      strokeWeight(4);
	      this.particle[i].display();
	      this.particle[j].display();
	      this.particle[k].display();
	    }
	  }
	}
      }
    }
    //for(let i in this.particle)
    //	this.particle[i].update();
    pop();
  }
}


