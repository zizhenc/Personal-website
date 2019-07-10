var universe;
function setup(){
	let canvas=createCanvas(windowWidth*4/5,windowHeight*4/5,WEBGL);
	canvas.parent('canvas');
	select('#commit').mouseReleased(generate);
	select('#capture').mouseReleased(capture);
	select('#randcommit').mouseReleased(randGenerate);
}
function draw(){
	background(20);
	if(universe!=null)
		universe.display();
}
function capture(){
	saveCanvas(canvas,'PrimordialConstellation','png');
}
function windowResized(){
	resizeCanvas(windowWidth*4/5,windowHeight*4/5);
}
function mouseDragged(){
	if(universe!=null)
		universe.mouseDrag();
}
function mouseWheel(event) {
	if(universe!=null)
		universe.mouseScroll(event);
	return false;
}
function randGenerate(){
	universe=new Sphere(round(random(1,999)));
}
function generate(){
	let n=int(select('#input').value());
        if(!isNaN(n))
		universe=new Sphere(n);
}
