var tree;
function setup(){
	let canvas=createCanvas(650,650);
	canvas.parent("canvas");
	select('#commit').mouseReleased(generate);
	select('#randcommit').mouseReleased(randGenerate);
	select('#reformat').mouseReleased(reformat);
	select('#capture').mouseReleased(capture);
	textAlign(CENTER,CENTER);
}
function draw(){
	background(255,240,245);
	if(tree!=null){
		tree.display(width/2,50);
		if(tree.width>width||tree.height>height)
			resizeCanvas(tree.width+100,tree.height+100);
	}
}
function capture(){
	saveCanvas(canvas,'MatulaNumber','png');
}
function mouseDragged(){
	if(tree!=null)
		tree.mouseDrag();
}
function generate(){
	let n=int(select('#input').value());
	if(!isNaN(n))
		tree=new Tree(n);
}
function randGenerate(){
	tree=new Tree(round(random(1,99999999)));
}
function reformat(){
	if(tree!=null)
		tree.reformat();
}
