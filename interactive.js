window.onload = function() {
  bowling = new Bowling();
  updateDisplay();
}

$('#bowl-score').keypress(function(e){
    if(e.which == 13){
        $('#bowl-button').click();
    }
});

var updateDisplay = function(score = ""){
  frameDisplay();
  scoreDisplay(score);
  $("#score-display").text(bowling.score);
  $("#bowl-score").val("");
  $("#bowl-score").focus();

  // Remaining pins
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
  if(score === 10 & bowling.extraFrames) {
    $("#pins-left").text("10")
  }


};

var frameDisplay = function(){
  var frameNumber = +$("#frame").text();
  if(frameNumber > 11){
    $("#frame").text("11");
  }
  else {
    $("#frame").text(bowling.frame);
  }
}

var scoreDisplay = function(score) {
  var scores = $("#bowls").text();
  if(score === 10){
    var score = " X";
    $("#bowls").text(scores + score);
  }
  else {
    $("#bowls").text(scores + " " + score);
  }
}

$("#bowl-button").click( function(){
  var bowlScore = parseInt($("#bowl-score").val());
  if (bowlScore > 10 || ( bowlScore + bowling.currentFrame[0]) > 10) {
    $("#error-message").show(60);
    $("#bowl-score").focus();
  }
  else {
    $("#error-message").hide(60);
    bowling.bowl(bowlScore);
    updateDisplay(bowlScore);
  }
});


$("#reset").click( function(){
  bowling = new Bowling();
  $("#notice-message").hide(60);
  $("#pins-left").hide();
  $("#error-message").hide();
  $("#bowls").text("");
  updateDisplay();
});
