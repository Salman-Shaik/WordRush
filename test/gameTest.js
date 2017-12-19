let assert=require('assert');
let Game=require('../src/game.js');
let test={};
exports.test=test;

test["getGameResult() should give result of game"]=function(){
  let game= new Game('----');
  assert.equal(game.getGameResult(),"You're Score:0");
};

test["isCompleted() should tell whether the word is complete or not"]=function(){
  let game=new Game('----');
  let game1=new Game('HI');
  assert.ok(!game.isCompleted());
  assert.ok(game1.isCompleted());
};

test["isCorrect() should tell whether the word given is Correct or not"]=function(){
  let game=new Game('tell');
  let game1=new Game('ewew');
  assert.ok(game.isCorrect());
  assert.ok(!game1.isCorrect());
};

test["updateScore() should update or increment score"]=function(){
  let game=new Game('----');
  game.updateScore();
  assert.equal(game.score,1);
};
