class Tree {
	constructor(n) {
		this.root=new Vertex(n);
		this.edge=[];
		this.initialize(this.root);
		this.leftSide=this.rightSide=this.topSide=this.bottomSide=null;
		this.width=this.height=0;
	}
	initialize(root){
		let branchFactor=this.primeFactors(root.stem==null?root.value:root.value/root.stem.factor['branch']);
		for(let i in branchFactor){
			let stemFactor=this.nthPrime(root.value/branchFactor[i]);
			let index=this.primeIndex(branchFactor[i]);
			let node=new Vertex(stemFactor*index);
			let e=new Edge(root,node,branchFactor[i],stemFactor);
			root.branch.push(e);
			node.stem=e;
			this.edge.push(e);
			if(index>1)
				this.initialize(node);
		}
	}
	display(x,y){
		for(let i in this.edge)
			this.edge[i].display();
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
	traverse(node,func){
		func(node);
		for(let i in node.branch)
			this.traverse(node.branch[i].child,func);
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
	nthPrime(n) {
		let prime=2;
		for (let count=0; count<n; prime++)
			if (this.isPrime(prime))
				count++;
		return --prime;
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
	reformat(){
		this.traverse(this.root,node=>node.auto=true);
	}
}