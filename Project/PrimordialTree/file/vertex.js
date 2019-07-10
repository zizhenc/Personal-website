class Vertex{
	constructor(n){
		this.value=n;
		this.stem=null;
		this.branch=[];
		this.diameter=max(30,textWidth(n)+10);
		this.r=this.diameter*3;
		this.auto=true;
	}
	display(x,y){
		if(this.auto){
			this.x=x;
			this.y=y;
		}
		stroke(0);
		fill(255,255,240);
		circle(this.x,this.y,this.diameter);
		noStroke();
		fill(0);
		text(this.value,this.x,this.y);
		let angle=PI/(this.branch.length+1);
		for(let i in this.branch)
			this.branch[i].child.display(this.x-this.r*cos(angle*(int(i)+1)), this.y+this.r*sin(angle*(int(i)+1)));
	}
	mouseDrag(){
		if (mouseX<this.x+this.diameter/2&&mouseX>this.x-this.diameter/2&&mouseY<this.y+this.diameter/2&&mouseY>this.y-this.diameter/2) {
			this.auto=false;
			this.x=mouseX;
			this.y=mouseY;
		}
	}
}
