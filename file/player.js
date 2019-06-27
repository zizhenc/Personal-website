class Player{
  constructor(){
    this.position=0;
    this.playGap=1;
    this.nextGap=1;
    this.volume=0.5;
    this.track=[];
  }
  load(){
    let base=['Ballad of Starry Sky.mp3','Irony.mp3','Letter Song.mp3','Time after time.mp3','Yuuhi Saka.mp3','Kizuna.mp3','Naruto.mp3','Whiteeeen.mp3'];
    for(let i in base)
      this.track.push(loadSound('audio/'+base[i]));
    this.song=this.track[floor(random(this.track.length))];
  }
  display(){
    push();
    rectMode(CENTER);
    noStroke();
    fill(150);
    rect(width/2,height/2,200,24,5);
    fill(255);
    if(this.song.isPlaying()){
      rectMode(CORNER);
      rect(width/2-87,height/3+this.playGap,3,height/3-this.playGap*2);
      rect(width/2-78-3,height/3+this.playGap,3,height/3-this.playGap*2);
    }
    else
      triangle(width/2-88+this.playGap,height/3+this.playGap,width/2-88+this.playGap,height*2/3-this.playGap,width/2-77-this.playGap,height/2);
    beginShape();
    vertex(width/2+65-this.nextGap,height/2);
    vertex(width/2+62-this.nextGap,height*3/7);
    vertex(width/2+68+this.nextGap,height/2);
    vertex(width/2+62-this.nextGap,height*4/7);
    endShape(CLOSE);
    beginShape();
    vertex(width/2+59-this.nextGap,height/2);
    vertex(width/2+56-this.nextGap,height*3/7);
    vertex(width/2+62+this.nextGap,height/2);
    vertex(width/2+56-this.nextGap,height*4/7);
    endShape(CLOSE);
    textAlign(LEFT,CENTER);
    if(this.song.isPlaying()){
      let time=round(this.song.currentTime());
      let minute=int(time/60);
      let second=int((time/60-minute)*60);
      text(minute+':'+(second<10?'0'+second:second),width/2+30,height/2);
    }
    else
      text('- : --',width/2+30,height/2);  
    fill(200);
    triangle(width/2+71,height*3/5,width/2+88,height*2/5,width/2+88,height*3/5);
    fill(255);
    triangle(width/2+71,height*3/5,width/2+71+this.volume*17,height*3/5-this.volume*height/5,width/2+71+this.volume*17,height*3/5);
    stroke(200);
    strokeWeight(4);
    line(width/2-66,height/2,width/2+24,height/2);
    stroke(255);
    strokeWeight(8);
    point(width/2-66+this.position,height/2);
    if(this.song.isPlaying()){
      this.position=this.song.currentTime()/this.song.duration()*90;
      if(round(this.song.currentTime())==round(this.song.duration())){
        this.song=this.track[floor(random(this.track.length))];
	this.song.setVolume(this.volume);
	this.song.play();
      }
    }
    pop();
  }
  mousePress(){
    if(mouseX>width/2-88&&mouseX<width/2-77&&mouseY>height/3&&mouseY<height*2/3)
      this.playGap=2;
    if(mouseX>width/2+56&&mouseX<width/2+68&&mouseY>height*3/7&&mouseY<height*4/7){
      if(this.song.isPlaying())
        this.song.stop();
      this.nextGap=2;
    }
    if(mouseX>=width/2+71&&mouseX<=width/2+88&&mouseY>height*2/5&&mouseY<height*3/5){
      this.volume=(mouseX-width/2-71)/17;
      this.song.setVolume(this.volume);
    }
    /*
    if(mouseX>=width/2-66&&mouseX<=width/2+24&&mouseY<height/2+4&&mouseY>height/2-4){
      this.song.jump((mouseX-width/2+66)/90*this.song.duration());
    */
  }
  mouseRelease(){
    if(this.nextGap==2){
      this.song=this.track[floor(random(this.track.length))];
      this.song.setVolume(this.volume);
      this.song.play();
      this.nextGap=1;
    }
    if(this.playGap==2){
      if(this.song.isPlaying())
        this.song.pause();
      else{
        this.song.setVolume(this.volume);
      	this.song.play();
      }
      this.playGap=1;
    }
  }
}