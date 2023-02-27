let wordTest = 'hello';
let wordShown = [];


const hideWord = (wrd) => {

  for (let i = 0; i < wrd.length; i++) {
    wordShown.push('-');
  }

  return wordShown;
}

const filterLetter = (letter, word) => {
  
  
  for (let i = 0; i < word.length; i++) {
    if (word[i] === letter) {
      wordShown[i] = word[i];
    } 
    
  }
  return wordShown.join("");
}
