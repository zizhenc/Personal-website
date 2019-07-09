var tree;
function setup(){
	let canvas=createCanvas(800,800);
	canvas.parent('canvas');
	select('#commit').mouseReleased(generate);
	select('#reformat').mouseReleased(reformat);
	select('#capture').mouseReleased(capture);
	select('#randcommit').mouseReleased(randGenerate);
	textAlign(CENTER,CENTER);
}
function draw(){
	background(0);
	if(tree!=null){
		tree.display(tree.width/2,50);
	        if(tree.width>width||tree.height>height)
			resizeCanvas(tree.width+100,tree.height+100);
	}
}
function capture(){
	saveCanvas(canvas,'PrimordialTree','png');
}
function generate(){
	let n=int(select('#input').value());
	if(!isNaN(n))
		tree=new Tree(n);
}
function randGenerate(){
	tree=new Tree(round(random(1,99999)));
}
function mouseDragged(){
        if(tree!=null)
		tree.mouseDrag();
}
function reformat(){
        if(tree!=null)
		tree.reformat();
}
