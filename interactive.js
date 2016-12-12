window.onload = function() {
  bowling = new Bowling();
  updateDisplay();
}

var updateDisplay = function(score = ""){
  $("#score-display").text(bowling.score);
  $("#frame").text(bowling.frame);
  $("#bowl-score").val("");
  $("#bowl-score").focus();

  // Remaining frames
  if(bowling.currentFrame.length === 1) {
    $("#pins-left").show();
    $("#pins-left").text(10 - score)
  }
  else {
    $("#pins-left").show();
    $("#pins-left").text(10)
  }
  if(bowling.extraFrames){
    $("#notice-message").show(60);
  }
  // scores history
  var scores = $("#bowls").text();
  if(score === 10){
    var score = "X";
    $("#bowls").text(scores + score);
  }
  else {
    $("#bowls").text(scores + " " + score);
  }
};

$("#bowl-button").click( function(){
  var bowlScore = parseInt($("#bowl-score").val());
  if (bowlScore > 10 || ( bowlScore + bowling.currentFrame[0]) > 10) {
    $("#error-message").show(60);
  }
  else {
    $("#error-message").hide(60);
    bowling.bowl(bowlScore);
    updateDisplay(bowlScore);
  }
});


$("#reset").click( function(){
  $("#pins-left").hide();
  $("#error-message").hide();
  bowling = new Bowling();
  updateDisplay();
});
