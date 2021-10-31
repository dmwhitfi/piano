// The keys and notes variables store the piano keys
const keys = ['c-key', 'd-key', 'e-key', 'f-key', 'g-key', 'a-key', 'b-key', 'high-c-key', 'c-sharp-key', 'd-sharp-key', 'f-sharp-key', 'g-sharp-key', 'a-sharp-key'];
const notes = [];
keys.forEach(function(key){
  notes.push(document.getElementById(key));
})


function keyPlay (event) {
  event.target.style.backgroundColor =' #6df0c2';
};


function keyReturn (event) {
  event.target.style.backgroundColor = '';
};


function notesMain(note) {
  note.addEventListener('mousedown', keyPlay);
  note.addEventListener('mouseup', keyReturn);
};


notes.forEach(notesMain);


// These variables store the buttons that progress the user through the lyrics
let nextOne = document.getElementById('first-next-line');
let nextTwo = document.getElementById('second-next-line');
let nextThree = document.getElementById('third-next-line');
let startOver = document.getElementById('fourth-next-line');

// This variable stores the '-END' lyric element
let lastLyric = document.getElementById('column-optional');


nextTwo.hidden = true;
nextThree.hidden = true;
startOver.hidden= true;



nextOne.onclick = function () {
  nextTwo.hidden = false;
  nextOne.hidden = true;
  letterNoteFive.innerHTML = 'D';
  letterNoteSix.innerHTML = 'C';

};

nextTwo.onclick = function () {
  nextThree.hidden = false;
  nextTwo.hidden = true;
  wordFive.innerHTML = 'DEAR';
  wordSix.innerHTML = 'DAR-';
  lastLyric.style.display = 'inline-block';
  letterNoteThree.innerHTML = 'G';
  letterNoteFour.innerHTML = 'E';
  letterNoteFive.innerHTML = 'C';
  letterNoteSix.innerHTML = 'B';

};

nextThree.onclick = function () {
  startOver.hidden = false;
  nextThree.hidden = true;
  wordOne.innerHTML ='HAP-';
  wordTwo.innerHTML ='PY';
  wordThree.innerHTML ='BIRTH-';
  wordFour.innerHTML ='DAY';
  wordFive.innerHTML ='TO';
  wordSix.innerHTML ='YOU!';
  lastLyric.style.display = 'none';
  letterNoteOne.innerHTML = 'F';
  letterNoteTwo.innerHTML = 'F';
  letterNoteThree.innerHTML = 'E';
  letterNoteFour.innerHTML = 'C';
  letterNoteFive.innerHTML = 'D';
  letterNoteSix.innerHTML = 'C';
};


// This is the event handler property and function for the startOver button
startOver.onclick = function() {
  nextOne.hidden = false;
  startOver.hidden = true;
   document.getElementById('word-one').innerHTML = 'HAP-';
  document.getElementById('letter-note-one').innerHTML = 'G';
  document.getElementById('word-two').innerHTML = 'PY';
  document.getElementById('letter-note-two').innerHTML = 'G';
  document.getElementById('word-three').innerHTML = 'BIRTH-';
  document.getElementById('letter-note-three').innerHTML = 'A';
  document.getElementById('word-four').innerHTML = 'DAY';
  document.getElementById('letter-note-four').innerHTML = 'G';
  document.getElementById('word-five').innerHTML = 'TO';
  document.getElementById('letter-note-five').innerHTML = 'C';
  document.getElementById('word-six').innerHTML = 'YOU!';
  document.getElementById('letter-note-six').innerHTML = 'B';
}


let wordFive = document.getElementById('word-five');
let wordSix =  document.getElementById('word-six');
let wordOne =  document.getElementById('word-one');
let wordTwo =  document.getElementById('word-two');
let wordThree =  document.getElementById('word-three');
let wordFour =  document.getElementById('word-four');
let letterNoteOne = document.getElementById('letter-note-one');
let letterNoteTwo = document.getElementById('letter-note-two');
let letterNoteThree = document.getElementById('letter-note-three');
let letterNoteFour = document.getElementById('letter-note-four');
let letterNoteFive = document.getElementById('letter-note-five');
let letterNoteSix = document.getElementById('letter-note-six');

