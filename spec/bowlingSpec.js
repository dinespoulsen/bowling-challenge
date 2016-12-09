describe("Bowling", function(){

  var bowling;

  beforeEach( function(){
    bowling = new Bowling();
  });

  it("should start frame 1", function(){
    expect(bowling.getFrame()).toEqual(1);
  });


  it("should be able to score after a bowl", function(){
    bowling.bowl(5);
    expect(bowling.currentFrame).toContain(5);
  });

  it("should be able to count score of a frame", function(){
    bowling.bowl(5);
    bowling.bowl(3);
    bowling.sumFrameScore();
    expect(bowling.frameScore).toEqual(8);
  });

  it("should increase frame count after a frame game", function(){
    bowling.bowl(5);
    bowling.bowl(3);
    expect(bowling.frame).toEqual(2);
  });

  it("shold return true if its a strike", function(){
    bowling.bowl(10);
    expect(bowling.isStrike()).toBe(true);
  });

  it("should go on to next frame if strike", function(){
    bowling.bowl(10);
    expect(bowling.frame).toEqual(2);
  });

  it("should know when it's a spare", function(){
    bowling.bowl(9);
    bowling.bowl(1);
    expect(bowling.isSpare()).toBe(true);
  });

  it("should save last fram scores", function(){
    bowling.bowl(9);
    bowling.bowl(1);
    expect(bowling.lastFrame).toEqual([9,1])
  });

});
