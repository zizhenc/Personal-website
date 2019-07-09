class Edge {
	constructor(parent, child, f0, f1) {
		this.parent=parent;
		this.child=child;
		this.factor={stem:f0,branch:f1};
	}
	display(){
		stroke(255,255,0);
		let x=(this.parent.x+this.child.x)/2;
		let y=(this.parent.y+this.child.y)/2;
		line(this.parent.x,this.parent.y,this.child.x,this.child.y);
		if(select('#branchfactor').checked()){
			this.branchArrow();
			let branchOffset=textWidth(this.factor['branch']);
			noStroke();
			fill(0,255,0);
			text(this.factor['branch'],x+branchOffset,y);
		}
		if(select('#stemfactor').checked()){
			this.stemArrow();
			let stemOffset=textWidth(this.factor['stem']);
			noStroke();
			fill(0,255,255);
			text(this.factor['stem'],x-stemOffset,y);
		}
	}
	stemArrow() {
		push();
		strokeWeight(2);
		stroke(0,255,255);
		let p=createVector(this.parent.x,this.parent.y);
		let v=createVector(this.child.x-this.parent.x,this.child.y-this.parent.y);
		let l=v.mag();
		v.normalize();
		v.mult(l-this.child.diameter/2);
		let c=p5.Vector.add(v,p);
		translate(c.x,c.y);
		rotate(atan2(p.x-c.x, c.y-p.y));
		line(0, 0, -3, -6);
		pop();
	}
	branchArrow(){
		push();
		strokeWeight(2);
		stroke(0,255,0);
		let c=createVector(this.child.x,this.child.y);
		let v=createVector(this.parent.x-this.child.x,this.parent.y-this.child.y);
		let l=v.mag();
		v.normalize();
		v.mult(l-this.parent.diameter/2);
		let p=p5.Vector.add(v,c);
		translate(p.x,p.y);
		rotate(atan2(c.x-p.x, p.y-c.y));
		line(0, 0, -3, -6);
		pop();
	}
}
