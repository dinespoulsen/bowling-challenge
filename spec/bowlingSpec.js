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
    expect(bowling.sumFrame([5,3])).toEqual(8);
  });

  it("should increase frame count after a frame game", function(){
    bowling.bowl(5);
    bowling.bowl(3);
    expect(bowling.frame).toEqual(2);
  });

  it("shold return true if its a strike", function(){
    bowling.bowl(10);
    expect(bowling.isStrike([10])).toBe(true);
  });

  it("should go on to next frame if strike", function(){
    bowling.bowl(10);
    expect(bowling.frame).toEqual(2);
  });

  it("should know when it's a spare", function(){
    expect(bowling.isSpare([9,1])).toBe(true);
  });

  it("should save last frame scores", function(){
    bowling.bowl(9);
    bowling.bowl(1);
    expect(bowling.lastFrame).toEqual([9,1])
  });

  it("should set its score after a frame", function(){
    bowling.bowl(4);
    bowling.bowl(5);
    expect(bowling.score).toEqual(9);
  });

  it("should set its score after a strike", function(){
    bowling.bowl(10);
    expect(bowling.score).toEqual(10);
  });
});
