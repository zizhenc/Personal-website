class Sphere {
	constructor(n) {
		this.spinX=0;
		this.spinY=0;
		this.amount=n;
		this.tree=[];
		this.node=[true];
		this.index=0;
		this.rotate=true;
		this.tranZ=0;
		this.value=0;
	}
	display() {
		push();
		translate(0, 0, this.tranZ);
		rotateX(this.spinX);
		rotateY(this.spinY);
		for (let i in this.tree)
			this.tree[i].display();
		if (this.index<this.amount) {
			this.generateVertex();
			this.index++;
		}
		if (this.rotate)
			this.spinY+=0.001;
		pop();
	}
	generateVertex() {
		let a=0, b=0, c=0, d=0, k=99;
		while (k >= 1.0) { 
			a=random (-1.0, 1.0);
			b=random (-1.0, 1.0);
			c=random (-1.0, 1.0);
			d=random (-1.0, 1.0);
			k=a*a+b*b+c*c+d*d;
		}
		k/=height/2;
		while (this.node[this.value])
			this.value++;
		let tree=new Tree(this.value, 2*(b*d + a*c) / k, 2*(c*d - a*b) / k, (a*a + d*d - b*b - c*c) / k);
		tree.nodeSet.forEach(v=>this.node[v]=true);
		this.tree.push(tree);
	}
	mouseDrag() {
		this.spinY+=(mouseX - pmouseX)*0.002;
	        this.spinX+=(pmouseY - mouseY)*0.002;
	}
	keyPress() {
		if (key==' ')
			this.rotate=!this.rotate;
	}
	mouseScroll(event) {
		this.tranZ-=event.delta*5;
	}
}
