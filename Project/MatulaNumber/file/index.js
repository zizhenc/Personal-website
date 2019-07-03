var tree;
function setup(){
	let canvas=createCanvas(550,550);
	canvas.parent("canvas");
	select('#commit').mouseReleased(generate);
	select('button').mouseReleased(reformat);
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
function mouseDragged(){
	if(tree!=null)
		tree.mouseDrag();
}
function generate(){
	let n=parseInt(select('#input').value());
	if(!isNaN(n))
		tree=new Tree(n);
}
function reformat(){
	if(tree!=null)
		tree.reformat();
}
