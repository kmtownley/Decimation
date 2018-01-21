WORDS = {
  "One Tenth": 0.1,
  "Two Tents": 0.2,
  "Three Tenths": 0.3,
  "Four Tenths": 0.4,
  "Five Tenths": 0.5,
  "Six Tenths": 0.6,
  "Eight Tenths": 0.8,
  "Ten Hundredths": 0.10,
  "One Hundredth": 0.01,
  "Sixteen Hundredths": 0.16,
  "One an One Tenth": 1.1,
  "Zero and Three Hundredths": 0.03,
  "One Thousandth": 0.001,
  "Eleven Thousandths": 0.011,
  "Nine Tenths": 0.09,
  "Forty-One Hundreths": 0.41,
  "One and Fourteen Hundredths": 1.14,
  "Eighty-One Thousandths": 0.81,
  "Eighteen Hundredths": 0.18,
  "Ninety-Nine Thousandths": 0.099,
  "Three Hundred and Fifteen Thousandths": 0.315
};

let DISPLAYED_WORD = null;

class Word {
  constructor() {
    this.wordValue = this.createWord();
    this.decimalValue = this.createDecimal(this.wordValue);
    this.match = null;
    this.display = false;

  }

  createWord() {
    let keys = Object.keys(WORDS);
    let length = keys.length;
    let rnd = Math.floor(Math.random()*length);
    let key = keys[rnd];
    return key;
    // console.log(WORDS[key]);
    // return WORDS[key];
  }

  createDecimal(key) {

    // let keys = Object.keys(WORDS);
    // let length = keys.length;
    // let rnd = Math.floor(Math.random()*length);
    // let key = keys[rnd];
    return WORDS[key];
  }

//   var text = ["Welcome", "Hi", "Sup dude"];
// var counter = 0;
// var elem = document.getElementById("changeText");

//
// function change() {
//   let counter;
//   elem.innerHTML = wordArray[counter];
//   counter++;
//   if (counter >= text.length) {
//     counter = 0;
//   }
// }
  renderWordChoice(wordArray) {
    let displayed;
    debugger
    let word = wordArray[Math.floor(Math.random() * wordArray.length)];
    debugger
    if (wordArray.length === 0) {
        document.querySelector(".words").innerHTML = "Let's Do This";

    } else {
      // wordArray.forEach(word => {
        document.querySelector(".words").innerHTML = word;
        DISPLAYED_WORD = word;
        // word.displayed = true;
        // setInterval(change(wordArray), 1000)
        console.log(word);
      // });
    }
  }

  isMatch(wordVal) {
    debugger;
    return (wordVal === DISPLAYED_WORD ? true : false);

  }
}

module.exports = Word;
