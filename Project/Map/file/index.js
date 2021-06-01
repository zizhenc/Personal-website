var map;
var mapWidth=1280,mapHeight=1230;
var latitudeText='',longitudeText='';
var x=-1,y=-1;
function setup(){
	let canvas=createCanvas(1280,1000);
	canvas.parent('processing');
	map=loadImage('image/worldmap.png');
	let submit=select("#locate");
	//dom element method (mouseClicked)
	submit.mouseClicked(()=>{
		x=mercX(select('#longitude').value());
		y=mercY(select('#latitude').value()););
	});//arrow function
function draw(){
	background(100);
	image(map,0,0);
	stroke(255,0,0);
	strokeWeight(4);
	point(x,y);
}
function mercX(lon) {
	let a = mapWidth/2/PI;
	let b = radians(lon)+PI;
	return a * b;
}
function mercY(lat) {
        let a = mapHeight/2/PI;
	let b = tan(PI / 4 + radians(lat)/2);
	let c = PI - log(b);
	      return a * c;
}
