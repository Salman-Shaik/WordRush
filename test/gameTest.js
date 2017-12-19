let assert=require('assert');
let Game=require('../src/game.js');
let test={};
exports.test=test;

test["getGameResult should give result of game"]=function(){
  let game= new Game();
  assert.deepEqual(game.getGameResult(),[0,0,0,0,0]);
};

test["isCorrect should tell whether the word given is Correct or not"]=function(){
  let game=new Game();
  let game1=new Game();
  assert.ok(!game.isCorrect('eeee'));
  assert.ok(game1.isCorrect('wolf'));
};

test["updateScore should update or increment score"]=function(){
  let game=new Game();
  game.updateScore();
  assert.equal(game.round.score,4);
  assert.equal(game.round.correctWords,1);
};

test["pickAWord should give a random word from the wordslist of Game"]=function(){
  let game=new Game();
  game.pickAWord()
  assert.ok(game.words.includes(game.currentWord));
};

test["updateTypos should update typos of the round"]=function() {
  let game=new Game();
  game.updateTypos();
  assert.equal(game.round.misTypings,1);
};

test["getScore should get Score of that current round"]=function(){
  let game=new Game();
  game.updateScore();
  game.updateScore();
  assert.equal(game.getScore(),8);
};

test["updateWrongWords should update wrongwords count of that round"]=function(){
  let game=new Game();
  game.updateWrongWords();
  assert.equal(game.round.wrongWords,1);
};
