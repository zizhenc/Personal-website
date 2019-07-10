class Edge {
	constructor(parent, child, f0, f1) {
		this.parent=parent;
		this.child=child;
		this.factor={stem:f0,branch:f1};
	}
	display(){
		stroke(0);
		let x=(this.parent.x+this.child.x)/2;
		let y=(this.parent.y+this.child.y)/2;
		line(this.parent.x,this.parent.y,this.child.x,this.child.y);
		if(select('#branchfactor').checked()){
			this.branchArrow();
			let branchOffset=textWidth(this.factor['branch'])/2+5;
			noStroke();
			fill(34,139,34);
			text(this.factor['branch'],x+branchOffset,y);
		}
		if(select('#stemfactor').checked()){
			this.stemArrow();
			let stemOffset=textWidth(this.factor['stem'])/2+5;
			noStroke();
			fill(138,43,226);
			text(this.factor['stem'],x-stemOffset,y);
		}
	}
	stemArrow() {
		push();
		strokeWeight(2);
		stroke(138,43,226);
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
		stroke(34,139,34);
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
