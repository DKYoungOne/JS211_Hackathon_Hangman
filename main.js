let wordTest = 'hello';
let wordShown = [];


const hideWord = (wrd) => {

  for (let i = 0; i < wrd.length; i++) {
    wordShown.push('-');
  }
  document.getElementById("wordProgress").innerHTML = wordShown;
  return wordShown.join("");
}

const filterLetter = (letter, word) => {
  let cachedAnswer = wordShown;
  
  for (let i = 0; i < word.length; i++) {
    if (word[i] === letter) {
      wordShown[i] = word[i];
    }
  }
  if (cachedAnswer === wordShown) {
      document.getElementById("playerFeedback").innerHTML = "Try another letter.";
    }
  return wordShown.join("");
}


const hangman = () => {
  
}