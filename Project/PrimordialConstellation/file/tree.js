class Tree{
	constructor(n,x,y,z){
		this.x=x;
		this.y=y;
		this.z=z;
		this.edge=[];
		this.root=new Vertex(n);
		this.nodeSet=new Set();
		this.nodeSet.add(this.root.value);
		this.initialize(this.root);
	}
	initialize(root){
		let branchFactor=this.primeFactors(root.stem==null?root.value:root.value/root.stem.factor['branch']);
		for (let i in branchFactor) {
			let stemFactor=this.nthPrime(root.value/branchFactor[i]);
			let index=this.primeIndex(branchFactor[i]);
			let node=new Vertex(stemFactor*index);
			let e=new Edge(root, node, branchFactor[i], stemFactor);
			root.branch.push(e);
			node.stem=e;
			this.nodeSet.add(node.value);
			this.edge.push(e);
			if (index>1)
				this.initialize(node);
		}
	}
	display(){
		push();
		translate(this.x, this.y, this.z);
		if(select('#edge').checked())
			for (let i in this.edge)
				this.edge[i].display();
		this.root.display(0, 0, 0, 0);
		pop();
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
}
