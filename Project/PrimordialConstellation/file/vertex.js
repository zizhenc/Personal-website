class Vertex{
	constructor(n){
		this.stem=null;
		this.branch=[];
		this.value=n;
		this.r=20;
	}
	display(x,y,z,plane){
		this.x=x;
		this.y=y;
		this.z=z;
		stroke(255,255,0);
		strokeWeight(10);
		point(x,y,z);
		plane=(plane+1)%3;
		let angle=0;
		for(let i in this.branch){
			switch(plane){
			case 0:
				this.branch[i].child.display(x+this.r*cos(angle),y+this.r*sin(angle),z,plane);
				break;
			case 1:
				this.branch[i].child.display(x+this.r*cos(angle),y,z+this.r*sin(angle),plane);
				break;
			case 2:
				this.branch[i].child.display(x,y+this.r*cos(angle),z+this.r*sin(angle),plane);
			}
			angle+=TWO_PI/this.branch.length;
		}
	}
}
