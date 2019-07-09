function Branch(parent, x, y, angleOffset, length) {
  this.parent = parent;//null
  this.x = x;//width/2
  this.y = y;//height
  this.length = length;//100
  this.branchA=null;
  this.branchB=null;
  if (parent==null) {
    this.angle = angleOffset;//PI
    this.angleOffset = random(-0.2, 0.2);//-11 ~ 11 degree
  } else {
    this.angle = this.parent.angle+angleOffset;
    this.angleOffset = angleOffset;
  }
  var xB = this.x + sin(this.angle) * this.length, yB = this.y + cos(this.angle) * this.length;//cos(PI)=-1=>height-length=height-100
  if (this.length > 10) {
    if (this.length+random(this.length*10) > 30)
      this.branchA = new Branch(this, xB, yB, random(-0.5, -0.1) + ((this.angle % TWO_PI) > PI ? -1/this.length : 1/this.length), this.length*random(0.6, 0.9));
    if (this.length+random(this.length*10) > 30)
      this.branchB = new Branch(this, xB, yB, random(0.1, 0.5) + ((this.angle % TWO_PI) > PI ? -1/this.length : 1/this.length), this.length*random(0.6, 0.9));
  }
  this.growth = 0;
  this.windForce = 0;
  this.blastForce = 0;
  this.update=function() {
    if (this.parent==null) {
      windAngle += 0.1;
      this.windForce = sin(windAngle) * 0.02;
      this.growth = min(this.growth + 0.1, 1);
    } else {
      this.x = this.parent.x + sin(this.parent.angle) * this.parent.length * this.parent.growth;
      this.y = this.parent.y + cos(this.parent.angle) * this.parent.length * this.parent.growth;
      this.windForce = this.parent.windForce * (1.0+5.0/this.length) + this.blastForce;
      this.blastForce = (this.blastForce + sin(x/2+windAngle)*0.01/this.length) * 0.98;
      this.angle = this.parent.angle + this.angleOffset + this.windForce + this.blastForce;
      this.growth = min(this.growth + 0.1*this.parent.growth, 1);
    }
    if (this.branchA != null)
      this.branchA.update();
    if (this.branchB != null)
      this.branchB.update();
  }
  this.display=function() {
    if (this.branchA==null&&this.branchB==null) {
      push();
      translate(this.x, this.y);
      rotate(-this.angle);
      //translate(12, 0);
      stroke('#5d6800');
      line(0, 0, 0, 6);
      noStroke();
      fill('#749600');
      bezier(0, 6, -6, 12, -6, 12, 0, 18);
      bezier(0, 18, 6, 12, 6, 12, 0, 6);
      fill('#8bb800');
      bezier(0, 9, 0, 13, 0, 13, 0, 18);
      bezier(0, 18, 6, 13, 6, 13, 0, 9);
      stroke('#659000');
      noFill();
      bezier(0, 9, -1, 11, -1, 12, 0, 15);
      pop();
    } else {
      if (this.branchA!=null)
        this.drawBranch(this.branchA);
      if (this.branchB!=null)
        this.drawBranch(this.branchB);
    }
  }
  this.drawBranch=function(branch) {
    var xB=this.x, yB=this.y;
    if (this.parent != null) {
      xB +=(this.x-this.parent.x) * 0.4;
      yB +=(this.y-this.parent.y) * 0.4;
    } else {
      xB +=sin(this.angle+this.angleOffset) * this.length * 0.3;
      yB +=cos(this.angle+this.angleOffset) * this.length * 0.3;
    }
    stroke(floor(1800/this.length));
    strokeWeight(this.length/5);
    noFill();
    bezier(this.x, this.y, xB, yB, xB, yB, branch.x, branch.y);
    branch.display();
  }
}