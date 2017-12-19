const Round=function(){
  this.score=0;
  this.correctWords=0;
  this.wrongWords=0;
  this.totalWords=0;
  this.misTypings=0;
};

Round.prototype.getRoundInfo=function(){
  return [
    this.score,
    this.totalWords,
    this.correctWords,
    this.wrongWords,
    this.misTypings
  ];
};
