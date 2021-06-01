class Particle{
	constructor(){
		switch(floor(random(4))) {
		case 0:
		      	this.c = color(5, 205, 229,95);
			break;
		case 1:
			this.c = color(255, 184, 3,95);
			break;
		case 2:
			this.c = color(255, 3, 91,95);
			break;
		default:
			this.c = color(61, 62, 62,95);
		}
		this.i=1;
		this.j=1;
		this.x=random(width);
		this.y=random(height);
	}
	update() {
		this.x +=this.i*0.01;
		this.y +=this.j*0.01;
		if (this.y > height)
			this.j=-1;
		if (this.y < 0)
			this.j=1;
		if (this.x > width)
			this.i=-1;
		if (this.x < 0)
			this.i=1;
		/*
		if(this.x>width/2-100-this.r&&this.y>height/2-12&&this.y<height/2+12)
			this.i=-1;
		if(this.x<width/2+100+this.r&&this.y>height/2-12&&this.y<height/2+12)
			this.i=1;
		if(this.y > height/2-12-this.r&&this.x>width/2-100&&this.x<width/2+100)
			this.j=1;
		if(this.y < height/2+12+this.r&&this.x>width/2-100&&this.x<width/2+100)
			this.j=-1;
		*/
	}
	display(){
		strokeWeight(2);
		stroke(this.c);
		//point(this.x, this.y);
	}
}
