let assert=require('assert');
let Round=require('./round.js');
let test={};
exports.test=test;

test['getRoundInfo should return game summary']=function() {
  let round=new Round();
 assert.deepEqual(round.getRoundInfo(),[0,0,0,0,0])
};
