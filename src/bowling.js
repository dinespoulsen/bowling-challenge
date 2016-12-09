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
  if(this.currentFrame.length === 1) {
    this.frame += 1;
    this.currentFrame.push(score);
    this.saveFrame(this.currentFrame);
  }
  else {
    if(score == 10){
      this.frame += 1;
      this.currentFrame.push(score);
      this.saveFrame(this.currentFrame);
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

Bowling.prototype.isSpare = function(frame){
  if(this.sumFrame(frame) === 10) {
    return true;
  }
  else {
    return false;
  }
}

Bowling.prototype.saveFrame = function(frame){
  this.lastFrame = frame;
  this.currentFrame = []
}
