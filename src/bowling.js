function Bowling(){
  this.frame = 1
  this.lastFrame = []
  this.currentFrame = []
  this.score = 0
}

Bowling.prototype.getFrame = function(){
  return this.frame;
}

Bowling.prototype.bowl = function(score){
  if(this.isNextFrame()) {
    this.currentFrame.push(score);
    this.frameScore(this.currentFrame);
    this.saveFrame(this.currentFrame);
    this.frame += 1;
  }
  else {
    if(score == 10){
      this.currentFrame.push(score);
      this.currentFrame.push(0);
      this.frameScore(this.currentFrame);
      this.saveFrame(this.currentFrame);
      this.frame += 1;
    }
    else {
      this.currentFrame.push(score);
    }
  }
}

Bowling.prototype.isStrike = function(frame){
  if(frame[0] === 10) {
    return true;
  }
  else {
    return false;
  }
}

Bowling.prototype.sumFrame = function(frame){
  return frame[0] + frame[1];
}

Bowling.prototype.isNextFrame = function(){
  return this.currentFrame.length === 1;
}

Bowling.prototype.isSpare = function(frame){
  if(this.sumFrame(frame) === 10) {
    return true;
  }
  else {
    return false;
  }
}

Bowling.prototype.frameScore = function(frame){
  this.score = this.sumFrame(frame);

}

Bowling.prototype.saveFrame = function(frame){
  this.lastFrame = frame;
  this.currentFrame = []
}
