function Bowling(){
  this.frame = 1
  this.lastFrame = []
  this.currentFrame = []
  this.frameScore = 0
}

Bowling.prototype.getFrame = function(){
  return this.frame;
}

Bowling.prototype.bowl = function(score){
  if(this.currentFrame.length === 1) {
    this.frame += 1;
    this.saveFrame(this.currentFrame);
    this.currentFrame.push(score);
  }
  else {
    if(score == 10){
      this.frame += 1;
      this.saveFrame(this.currentFrame);
      this.currentFrame.push(score);
    }
    else {
      this.currentFrame.push(score);
    }
  }
}

Bowling.prototype.sumFrameScore = function(){
  this.frameScore += this.currentFrame[0] + this.currentFrame[1];
  return this.frameScore;
}

Bowling.prototype.isStrike = function(){
  if(this.currentFrame[0] === 10) {
    return true;
  }
  else {
    return false;
  }
}

Bowling.prototype.sumFrame = function(frame){
  return frame[0] + frame[1];
}

Bowling.prototype.isSpare = function(){
  if(this.sumFrame(this.currentFrame) === 10) {
    return true;
  }
  else {
    return false;
  }
}

Bowling.prototype.saveFrame = function(frame){
  this.lastFrame = frame;
}
