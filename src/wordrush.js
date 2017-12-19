const words = [
  "able", "acid", "aged", "also", "area", "army", "away", "baby", "back", "ball", "band",
  "bank", "base", "bath", "bear", "beat", "been", "beer", "bell", "belt", "best", "bill",
  "bird", "blow", "blue", "boat", "body", "bomb", "bond", "bone", "book", "boom", "born",
  "boss", "both", "bowl", "bulk", "burn", "bush", "busy", "call", "calm", "came", "camp",
  "card", "care", "case", "cash", "cast", "cell", "chat", "chip", "city", "club", "coal",
  "coat", "code", "cold", "come", "cook", "cool", "cope", "copy", "core", "cost", "crew",
  "crop", "dark", "data", "date", "dawn", "days", "dead", "deal", "dean", "dear", "debt",
  "deep", "deny", "desk", "dial", "diet", "disc", "disk", "does", "done", "door", "dose",
  "down", "draw", "drew", "drop", "drug", "dual", "duke", "dust", "duty", "each", "earn",
  "ease", "east", "easy", "edge", "else", "even", "ever", "evil", "exit", "face", "fact",
  "fail", "fair", "fall", "farm", "fast", "fate", "fear", "feed", "feel", "feet", "fell",
  "felt", "file", "fill", "film", "find", "fine", "fire", "firm", "fish", "five", "flat",
  "flow", "food", "foot", "ford", "form", "fort", "four", "free", "from", "fuel", "full",
  "fund", "gain", "game", "gate", "gave", "gear", "gene", "gift", "girl", "give", "glad",
  "goal", "goes", "gold", "golf", "gone", "good", "gray", "grew", "grey", "grow", "gulf",
  "hair", "half", "hall", "hand", "hang", "hard", "harm", "hate", "have", "head", "hear",
  "heat", "held", "hell", "help", "here", "hero", "high", "hill", "hire", "hold", "hole",
  "holy", "home", "hope", "host", "hour", "huge", "hung", "hunt", "hurt", "idea", "inch",
  "into", "iron", "item", "jack", "jane", "jean", "john", "join", "jump", "jury", "just",
  "keen", "keep", "kent", "kept", "kick", "kill", "kind", "king", "knee", "knew", "know",
  "lack", "lady", "laid", "lake", "land", "lane", "last", "late", "lead", "left", "less",
  "life", "lift", "like", "line", "link", "list", "live", "load", "loan", "lock", "logo",
  "long", "look", "lord", "lose", "loss", "lost", "love", "luck", "made", "mail", "main",
  "make", "male", "many", "mark", "mass", "mate", "matt", "meal", "mean", "meat", "meet",
  "menu", "mere", "mike", "mile", "milk", "mill", "mind", "mine", "miss", "mode", "mood",
  "moon", "more", "most", "move", "much", "must", "name", "navy", "near", "neck", "need",
  "news", "next", "nice", "nick", "nine", "none", "nose", "note", "okay", "once", "only",
  "onto", "open", "oral", "over", "pace", "pack", "page", "paid", "pain", "pair", "palm",
  "part", "pass", "past", "path", "peak", "pick", "pink", "pipe", "plan", "play", "plot",
  "plug", "plus", "poll", "pool", "poor", "port", "post", "pull", "pure", "push", "race",
  "rail", "rain", "rank", "rare", "rate", "read", "real", "rear", "rely", "rent", "rest",
  "rice", "rich", "ride", "ring", "rise", "risk", "road", "rock", "role", "roll", "roof",
  "room", "root", "rose", "rule", "rush", "ruth", "safe", "said", "sake", "sale", "salt",
  "same", "sand", "save", "seat", "seed", "seek", "seem", "seen", "self", "sell", "send",
  "sent", "sept", "ship", "shop", "shot", "show", "shut", "sick", "side", "sign", "site",
  "size", "skin", "slip", "slow", "snow", "soft", "soil", "sold", "sole", "some", "song",
  "soon", "sort", "soul", "spot", "star", "stay", "step", "stop", "such", "suit", "sure",
  "take", "tale", "talk", "tall", "tank", "tape", "task", "team", "tech", "tell", "tend",
  "term", "test", "text", "than", "that", "them", "then", "they", "thin", "this", "thus",
  "till", "time", "tiny", "told", "toll", "tone", "tony", "took", "tool", "tour", "town",
  "tree", "trip", "true", "tune", "turn", "twin", "type", "unit", "upon", "used", "user",
  "vary", "vast", "very", "vice", "view", "vote", "wage", "wait", "wake", "walk", "wall",
  "want", "ward", "warm", "wash", "wave", "ways", "weak", "wear", "week", "well", "went",
  "were", "west", "what", "when", "whom", "wide", "wife", "wild", "will", "wind", "wine",
  "wing", "wire", "wise", "wish", "with", "wood", "word", "wore", "work", "wolf",
  "yard", "yeah", "year", "your", "zero", "park", "zone", "sink", "tide", "liar", "seal",
  "vase", "nest", "debu", "dent", "leak", "lure", "nope", "bate", "bait", "lime", "dare"
  ,"pest"
];

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

const getDashes = function(number) {
  let dashes = "";
  while (number > 0) {
    dashes += '-';
    number--;
  }
  return dashes;
};

const Game = function() {
  this.words = words;
  this.round=new Round();
  this.currentWord= "";
};

Game.prototype.pickAWord=function(){
  this.currentWord=this.getRandomWord();
};

Game.prototype.isCorrect = function(word) {
  this.round.totalWords++;
  return this.words.includes(word);
};

Game.prototype.updateScore = function() {
  this.round.score+=4;
  this.round.correctWords++;
};

Game.prototype.getGameResult = function(){
  return this.round.getRoundInfo();
};

Game.prototype.getRandomWord=function(){
  let randomIndex = this.getRandomIndex(words);
  return words[randomIndex];
};

Game.prototype.getRandomIndex = function(words) {
  return Math.floor(Math.random() * words.length);
};

Game.prototype.updateTypos=function(words){
  this.round.misTypings++;
};

Game.prototype.getScore=function(){
  return this.round.score;
};

Game.prototype.updateWrongWords=function() {
  this.round.wrongWords++;
}
// ---------------------------------------
// ---------------------------------------
// ---------------------------------------
// ---------------------------------------
// ---------------------------------------

let game = new Game();

const shuffleCharacters = function(word) {
  var parts = word.split('');
    for (var i = parts.length; i > 0;) {
        var random = parseInt(Math.random() * i);
        var temp = parts[--i];
        parts[i] = parts[random];
        parts[random] = temp;
    }
    return parts.join('');
};

const displayScore = function() {
  let display = document.getElementById("display");
  display.innerText = "Score:" + game.getScore();
};

const getGameInfo=function(){
 return game.getGameResult();
}

let action = {};

action.Correct = function() {
  initializeText();
  game.updateScore();
  initializeSummaryBlock();
  displayScore();
  addTextToButtons();
};

action.Wrong = function() {
  game.updateWrongWords();
  initializeText();
  initializeSummaryBlock();
  addTextToButtons();
};

action.isOn = function() {
  displayScore();
};

const isCompleted = function() {
  let mainText=document.getElementById("mainText").innerText;
  return !mainText.includes('-');
};

const getGameStatus = function() {
  let mainText=document.getElementById("mainText").innerText;
  let gameStatus = "";
  if (isCompleted()) {
    game.isCorrect(mainText) ? gameStatus = "Correct" : gameStatus = "Wrong";
  } else {
    gameStatus = "isOn";
  }
  return gameStatus;
};

const updateTextField = function(textField, text) {
  textField.innerText = text;
  action[getGameStatus()]();
};

const reloadGame = function() {
  window.location.reload();
};

const getUpdatedText = function(character) {
  let mainText = document.getElementById("mainText").innerText;
  return mainText.replace('-', character);
};

const handleClickEvent = function(event) {
  let button = event.target;
  let character = button.innerText;
  button.disabled = true;
  let textField = document.getElementById("mainText");
  updateTextField(textField, getUpdatedText(character));
};

const isInputCorrect = function(character) {
  return game.currentWord.includes(character);
};

const getcorrectButton = function(input) {
  let button;
  for (let id = 1; id <= 4; id++) {
    button = document.getElementById(id.toString());
    if (button.innerText == input) {
      return button;
    }
  }
};

const handleInput = function(event) {
  let inputCharacter = String.fromCharCode(event.keyCode);
  if (isInputCorrect(inputCharacter)) {
    button = getcorrectButton(inputCharacter);
    button.disabled = true;
    let textField = document.getElementById("mainText");
    updateTextField(textField, getUpdatedText(inputCharacter));
  } else {
    game.updateTypos();
    initializeSummaryBlock();
  }
};

const handleKeyPressEvent = function(event) {
  handleInput(event);
};

const initializeSummaryBlock=function() {
  let summary=getGameInfo();
  let score=document.getElementById('score');
  let attempted=document.getElementById('attempted');
  let correct_ones=document.getElementById('correct_ones');
  let wrong_ones=document.getElementById('wrong_ones');
  let typos=document.getElementById('typos');
  score.innerText=summary[0];
  attempted.innerText=summary[1];
  correct_ones.innerText=summary[2];
  wrong_ones.innerText=summary[3];
  typos.innerText=summary[4];
};

const initializeText = function() {
  game.pickAWord();
  let textField = document.getElementById("mainText");
  textField.innerText = getDashes(game.currentWord.length);
};

const enableButtons = function() {
  let button, textbox;
  for (var id = 1; id <= 4; id++) {
    button = document.getElementById(id.toString());
    button.disabled = false;
  }
};

const addTextToButtons = function() {
  let button;
  let shuffledWord = shuffleCharacters(game.currentWord);
  for (var id = 1; id <= 4; id++) {
    button = document.getElementById(id.toString());
    button.innerText = shuffledWord.slice(id - 1, id);
  }
  enableButtons();
};

const addClickListenerOnButtons = function() {
  let button;
  for (var id = 1; id <= 4; id++) {
    button = document.getElementById(id.toString());
    button.onclick = handleClickEvent;
  }
  reset.onclick = reloadGame;
};

const addKeyListener = function() {
  document.onkeypress = handleKeyPressEvent;
};

const beginGame = function() {
  displayScore();
  addClickListenerOnButtons();
  initializeText();
  initializeSummaryBlock();
  addTextToButtons();
  addKeyListener();
};

window.onload = beginGame;
