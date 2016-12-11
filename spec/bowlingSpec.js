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

  it("should be able to add points after two frames", function(){
    bowling.bowl(8);
    bowling.bowl(1);
    bowling.bowl(5);
    bowling.bowl(3);
    expect(bowling.score).toEqual(17);
  })

  it("should be able to add extra point after a spare", function(){
    bowling.bowl(9);
    bowling.bowl(1);
    bowling.bowl(5);
    bowling.bowl(3);
    expect(bowling.score).toEqual(23);
  })

  it("should be able to add extra point after 2 spares", function(){
    bowling.bowl(9);
    bowling.bowl(1);
    bowling.bowl(9);
    bowling.bowl(1);
    expect(bowling.score).toEqual(29);
  })

  it("should be able to add extra point after a strike", function(){
    bowling.bowl(10);
    bowling.bowl(8);
    bowling.bowl(1);
    expect(bowling.score).toEqual(28);
  })

  it("should be able to add extra point after two strikes", function(){
    bowling.bowl(10);
    bowling.bowl(10);
    expect(bowling.score).toEqual(30);
  })

  it("should be able to add extra point after 3 strikes", function(){
    bowling.bowl(10);
    bowling.bowl(10);
    bowling.bowl(10);
    expect(bowling.score).toEqual(60);
  })

  it("should be able to add extra point after 10 strikes", function(){
    for(var i = 0; i < 10; i += 1) {
      bowling.bowl(10);
    }
    expect(bowling.score).toEqual(270);
  });

  it("should extend the game if 10th frame is a strike", function(){
    for(var i = 0; i < 10; i += 1) {
      bowling.bowl(10);
    }
    expect(bowling.extraFrames).toBe(true);
  });

  it("should finish the game if there is no strike on the 10th frame", function(){
    for(var i = 0; i < 9; i += 1) {
      bowling.bowl(10);
    }
    bowling.bowl(9);
    bowling.bowl(9);
    expect( function(){bowling.bowl(4)}).toThrow(new Error("The game is over"))
  });

  it("should always stop after 11th frame", function(){
    for(var i = 0; i < 12; i += 1) {
      bowling.bowl(10);
    }
    expect( function(){bowling.bowl(10)}).toThrow(new Error("The game is over"))
  });

  it("should be able to play a perfect game", function(){
    for(var i = 0; i < 12; i += 1) {
      bowling.bowl(10);
    }
    expect(bowling.score).toEqual(300);
  });

  it("should be able to not make strike in extra frames", function(){
    for(var i = 0; i < 10; i += 1) {
      bowling.bowl(10);
    }
    bowling.bowl(9);
    bowling.bowl(0);
    expect(bowling.score).toEqual(288);
  });
});
