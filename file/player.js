class Player {
  constructor() {
    this.position=0;
    this.volume=0.5;
    this.track=[];
    this.playerWidth=200;
    this.playerHeight=24;
    this.partWidth=this.playerWidth/6;
    this.gap=this.playerHeight/40;
    this.pushPlay=this.gap;
    this.pushNext=this.gap;
  }
  load() {
    let base=['Irony.mp3', 'YuuhiSaka.mp3', 'Whiteeeen.mp3'];
    for (let i of base)
      this.track.push(loadSound('audio/'+i));
    this.song=this.track[floor(random(this.track.length))];
    this.song.setVolume(this.volume);
  }
  display() {
    push();
    rectMode(CENTER);
    noStroke();
    fill(150, 200);
    rect(width/2, height/2, this.playerWidth, this.playerHeight, 5);
    fill(255);
    if (this.song.isPlaying()) {
      rect(width/2-this.playerWidth/2+this.partWidth/3+this.partWidth/20+this.gap/2-this.pushPlay/2, height/2, this.partWidth/10-this.gap+this.pushPlay, this.playerHeight/2-2*this.gap+2*this.pushPlay);
      rect(width/2-this.playerWidth/2+this.partWidth-this.partWidth/20-this.partWidth/3-this.gap/2+this.pushPlay/2, height/2, this.partWidth/10-this.gap+this.pushPlay, this.playerHeight/2-2*this.gap+2*this.pushPlay);
    } else
      triangle(width/2-this.playerWidth/2+this.partWidth/3+this.gap-this.pushPlay, height/2-this.playerHeight/4+this.gap-this.pushPlay, width/2-this.playerWidth/2+this.partWidth/3+this.gap-this.pushPlay, height/2+this.playerHeight/4-this.gap+this.pushPlay, width/2-this.playerWidth/2+this.partWidth-this.partWidth/3-this.gap+this.pushPlay, height/2);
    beginShape();
    vertex(width/2+this.playerWidth/2-this.partWidth-this.gap+this.pushNext, height/2);
    vertex(width/2+this.playerWidth/2-this.partWidth-this.partWidth/4+this.gap-this.pushNext, height/2-this.playerHeight/6+this.gap-this.pushNext);
    vertex(width/2+this.playerWidth/2-this.partWidth-this.partWidth/7+this.gap-this.pushNext, height/2);
    vertex(width/2+this.playerWidth/2-this.partWidth-this.partWidth/4+this.gap-this.pushNext, height/2+this.playerHeight/6-this.gap+this.pushNext);
    endShape(CLOSE);
    beginShape();
    vertex(width/2+this.playerWidth/2-this.partWidth-this.partWidth/4-this.gap+this.pushNext, height/2);
    vertex(width/2+this.playerWidth/2-this.partWidth-this.partWidth/4-this.partWidth/4+this.gap-this.pushNext, height/2-this.playerHeight/6+this.gap-this.pushNext);
    vertex(width/2+this.playerWidth/2-this.partWidth-this.partWidth/7-this.partWidth/4+this.gap-this.pushNext, height/2);
    vertex(width/2+this.playerWidth/2-this.partWidth-this.partWidth/4-this.partWidth/4+this.gap-this.pushNext, height/2+this.playerHeight/6-this.gap+this.pushNext);
    endShape(CLOSE);
    textAlign(LEFT, CENTER);
    if (this.song.isPlaying()) {
      let time=round(this.song.currentTime());
      let minute=int(time/60);
      let second=int((time/60-minute)*60);
      text(minute+':'+(second<10?'0'+second:second), width/2+this.playerWidth/2-this.partWidth-1.4*this.partWidth, height/2);
    } else
      text('- : --', width/2+this.playerWidth/2-this.partWidth-1.4*this.partWidth, height/2);
    fill(200);
    triangle(width/2+this.playerWidth/2-this.partWidth+this.partWidth/4, height/2+this.playerHeight/5, width/2+this.playerWidth/2-this.partWidth/4, height/2-this.playerHeight/5, width/2+this.playerWidth/2-this.partWidth/4, height/2+this.playerHeight/5);
    fill(255);
    triangle(width/2+this.playerWidth/2-this.partWidth+this.partWidth/4, height/2+this.playerHeight/5, width/2+this.playerWidth/2-this.partWidth+this.partWidth/4+this.volume*(this.partWidth/2), height/2+this.playerHeight/5, width/2+this.playerWidth/2-this.partWidth+this.partWidth/4+this.volume*(this.partWidth/2), height/2+this.playerHeight/5-2*this.playerHeight/5*this.volume*this.partWidth/this.partWidth);
    stroke(200);
    strokeWeight(4);
    line(width/2-this.playerWidth/2+1.1*this.partWidth, height/2, width/2+this.playerWidth/2-2.6*this.partWidth, height/2);
    stroke(255);
    strokeWeight(this.playerHeight/4);
    point(width/2-this.playerWidth/2+1.1*this.partWidth+this.position*(this.playerWidth-3.7*this.partWidth), height/2);
    if (this.song.isPlaying()) {
      this.position=this.song.currentTime()/this.song.duration();
      if (this.song.currentTime()>=this.song.duration()-1) {
      	this.song.stop();
        this.song=this.track[floor(random(this.track.length))];
        this.song.setVolume(this.volume);
        this.song.play();
      }
    }
    pop();
  }
  mousePress() {
    if (mouseX>=width/2-this.playerWidth/2+this.partWidth/3&&mouseX<=width/2-this.playerWidth/2+this.partWidth-this.partWidth/3&&mouseY>=height/2-this.playerHeight/4&&mouseY<=height/2+this.playerHeight/4)
      this.pushPlay=0;
    if (mouseX>=width/2+this.playerWidth/2-this.partWidth-this.partWidth/2&&mouseX<=width/2+this.playerWidth/2-this.partWidth&&mouseY>=height/2-this.playerHeight/6&&mouseY<=height/2+this.playerHeight/6)
      this.pushNext=0;
    if (mouseX>=width/2-this.playerWidth/2+1.1*this.partWidth&&mouseX<=width/2+this.playerWidth/2-2.6*this.partWidth&&mouseY<height/2+this.playerHeight/3&&mouseY>height/2-this.playerHeight/3) {
      this.position=(mouseX-(width/2-this.playerWidth/2+1.1*this.partWidth))/(this.playerWidth-3.7*this.partWidth);
      this.song.jump(floor(this.position*this.song.duration()));
    }
    if (mouseX>=width/2+this.playerWidth/2-this.partWidth+this.partWidth/4&&mouseX<=width/2+this.playerWidth/2-this.partWidth/4&&mouseY<=height/2+this.playerHeight/5&&mouseY>=height/2-this.playerHeight/5) {
      this.volume=(mouseX-(width/2+this.playerWidth/2-this.partWidth+this.partWidth/4))*2/this.partWidth;
      this.song.setVolume(this.volume);
    }
  }
  mouseRelease() {
    if (this.pushPlay==0) {
      if (this.song.isPlaying())
        this.song.pause();
      else
        this.song.play();
      this.pushPlay=this.gap;
    }
    if (this.pushNext==0) {
      this.song.stop();
      this.song=this.track[floor(random(this.track.length))];
      this.song.setVolume(this.volume);
      this.song.play();
      this.pushNext=this.gap;
    }
  }
}
