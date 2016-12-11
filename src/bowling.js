function Bowling(){
  this.frame = 1;
  this.secondLastFrame = [];
  this.lastFrame = [];
  this.currentFrame = [];
  this.score = 0;
  this.extraFrames = false;
}

Bowling.prototype.getFrame = function(){
  return this.frame;
}

Bowling.prototype.bowl = function(score){
  if(this.frame >= 12){
    throw new Error("The game is over");
  }
  else if(this.frame === 11 && !this.extraFrames){
    throw new Error("The game is over");
  }
  else if(this.frame === 11 && this.extraFrames){
    this.currentFrame.push(score);
    if(this.currentFrame.length === 2){
      this.frameScore(this.currentFrame);
      this.frame += 1;
    }
  }
  else {
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
        this.isExtraGame();
        this.frame += 1;
      }
      else {
        this.currentFrame.push(score);
      }
    }
  }
}

Bowling.prototype.sumFrame = function(frame){
  return frame[0] + frame[1];
}

Bowling.prototype.isNextFrame = function(){
  return this.currentFrame.length === 1;
}

Bowling.prototype.isStrike = function(frame){
  if(frame[0] === 10) {
    return true;
  }
  else {
    return false;
  }
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
  if(this.extraFrames) {
    this.score += frame[0]*2 + frame[1]
  }
  else {
    if(this.isStrike(frame) && !this.isStrike(this.lastFrame) && !this.isStrike(this.secondLastFrame)){
      this.score += this.sumFrame(frame)*1
    }
    else if(this.isStrike(frame) && this.isStrike(this.lastFrame) && !this.isStrike(this.secondLastFrame)){
      this.score += this.sumFrame(frame)*2
    }
    else if(this.isStrike(frame) && this.isStrike(this.lastFrame) && this.isStrike(this.secondLastFrame)){
      this.score += this.sumFrame(frame)*3
    }
    else if(!this.isStrike(frame) && this.isStrike(this.lastFrame) && !this.isStrike(this.secondLastFrame)){
      this.score += this.sumFrame(frame)*2
    }
    else if(this.isSpare(this.lastFrame)){
      this.score += this.sumFrame(frame) + frame[0];
    }
    else {
      this.score += this.sumFrame(frame);
    }
  }

}

Bowling.prototype.saveFrame = function(frame){
  this.secondLastFrame = this.lastFrame;
  this.lastFrame = frame;
  this.currentFrame = []
}

Bowling.prototype.isExtraGame = function(){
  if(this.frame === 10){
    this.extraFrames = true;
  }
}
