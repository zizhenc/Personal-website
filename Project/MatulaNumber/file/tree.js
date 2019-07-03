class Tree {
  constructor(n) {
    this.root=new Vertex(n, 0);
    this.traverse(this.root,node=>{
    				    let factor=this.primeFactors(node.value);
				    for (let i in factor)
				      node.child.push(new Vertex(this.primeIndex(factor[i]), factor[i]));
				  });
    this.leftSide=this.rightSide=this.topSide=this.bottomSide=null;
    this.width=this.height=0;
  }
  display(x, y) {
    this.drawEdges(this.root);
    this.root.display(x,y);
    this.traverse(this.root,node=>{
    				    if(this.leftSide==null)
				      this.leftSide=node.x;
				    else if(this.leftSide>node.x)
				      this.leftSide=node.x;
				    if(this.rightSide==null)
				      this.rightSide=node.x;
				    else if(this.rightSide<node.x)
				      this.rightSide=node.x;
				    if(this.topSide==null)
				      this.topSide=node.y;
				    else if(this.topSide>node.y)
				      this.topSide=node.y;
			            if(this.bottomSide==null)
				      this.bottomSide=node.y;
				    else if(this.bottomSide<node.y)
				      this.bottomSide=node.y;
    				   });
    this.width=this.rightSide-this.leftSide;
    this.height=this.bottomSide-this.topSide;
  }
  drawEdges(node){
    stroke(255, 255, 0);
    for(let i in node.child){
      line(node.x,node.y,node.child[i].x,node.child[i].y);
      if(select('#factor').checked()){
        let x=(node.x+node.child[i].x)/2;
	let y=(node.y+node.child[i].y)/2;
	let offset=textWidth(node.child[i].factor);
	if(x<node.x)
	  x-=offset;
	else
	  x+=offset;
	noStroke();
	fill(0,255,0);
	text(node.child[i].factor,x,y);
      }
      this.drawEdges(node.child[i]);
    } 
  }
  reformat(){
    this.traverse(this.root,node=>node.auto=true);
  }
  traverse(node,func){
    func(node);
    for(let i in node.child)
      this.traverse(node.child[i],func);
  }
  primeFactors(n) {
    let factor=[];
    while (n%2===0) {
      factor.push(2);
      n/=2;
    }
    for (let i=3; i<=Math.sqrt(n); i+=2)
      while (n%i===0) {
        factor.push(i);
        n/=i;
      }
    if (n>2)
      factor.push(n);
    return factor;
  }
  primeIndex(n) {
    let count=0;
    for (let x=2; x<=n; x++)
      if (this.isPrime(x))
        count++;
    return count;
  }
  isPrime(int) {
    if (int<=1)
      return false;
    if (int===2)
      return true;
    if (int===3)
      return true;
    if (int%2===0)
      return false;
    if (int%3===0)
      return false;
    let i=5, w=2;
    while (i*i<=int) {
      if (int%i===0)
        return false;
      i+=w;
      w=6-w;
    }
    return true;
  }
  mouseDrag(){
    this.traverse(this.root,node=>node.mouseDrag());
  }
}
