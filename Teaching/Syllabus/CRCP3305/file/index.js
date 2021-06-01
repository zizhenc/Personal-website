var poop=[], distance=4;
function setup() {
	let canvas=createCanvas(windowWidth, 0.05*windowHeight);
  	canvas.parent('processing');
  	distance=displayHeight/20;
  	for (let i=0; i<windowHeight/10; i++)
    		poop.push(new Particle());
}
function draw() {
	background(255);
  	for (let i=0; i<poop.length-2; i++) {
    		poop[i].update();
    		for (let j = i + 1; j < poop.length-1; j++) {
      			poop[j].update();
      			if (dist(poop[i].x, poop[i].y, poop[j].x, poop[j].y)< distance) {
        			for (let k = j + 1; k < poop.length; k++) {
          				poop[k].update();
          				if (dist(poop[k].x, poop[k].y, poop[j].x, poop[j].y)< distance) {
            					fill(poop[k].c);
	    					noStroke();
            					triangle(poop[i].x, poop[i].y, poop[j].x, poop[j].y, poop[k].x, poop[k].y);
            					poop[i].display();
            					poop[j].display();
            					poop[k].display();
          				}
        			}
      			}
    		}	
  	}
}
function windowResized(){
	resizeCanvas(windowWidth, 0.05*windowHeight);
}
