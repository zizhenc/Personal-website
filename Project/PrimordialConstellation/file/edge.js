class Edge{
	constructor(parent,child,f0,f1){
		this.parent=parent;
		this.child=child;
		this.factor={stem:f0,branch:f1};
		this.noise=[random(-20,20),random(-20,20),random(-20,20),random(-20,20),random(-20,20),random(-20,20)];
	}
	display(){
		stroke(255,255,0);
		strokeWeight(1);
		if(select('select').value()=='straight')
			line(this.parent.x, this.parent.y, this.parent.z, this.child.x, this.child.y, this.child.z);
		else{
			noFill();
			curve(this.parent.x+this.noise[0], this.parent.y+this.noise[1], this.parent.z+this.noise[2],this.parent.x, this.parent.y, this.parent.z,this.child.x, this.child.y, this.child.z, this.child.x+this.noise[3], this.child.y+this.noise[4], this.child.z+this.noise[5]);
		}
	}
}
