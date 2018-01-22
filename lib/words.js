WORDS = {
  "One Tenth": 0.1,
  "Two Tenths": 0.2,
  "Three Tenths": 0.3,
  "Four Tenths": 0.4,
  "Five Tenths": 0.5,
  "Six Tenths": 0.6,
  "Eight Tenths": 0.8,
  "Nine Tenths": 0.9,
  "One Hundredth": 0.01,
  "Two Hundredths": 0.02,
  "Three hundredths": 0.03,
  "Four hundredths": 0.04,
  "Five hundredths": 0.05,
  "Six hundredths": 0.06,
  "Eleven Hundredths": 0.11,
  "Sixteen Hundredths": 0.16,
  "Seventeen Hundredths": 0.017,
  "One an One Tenth": 1.1,
  "Three and Four Tenths": 3.4,
  "Zero and Three Hundredths": 0.03,
  "One Thousandth": 0.001,
  "Eleven Thousandths": 0.011,
  "Forty-One Hundreths": 0.41,
  "One and Fourteen Hundredths": 1.14,
  "Eighty-One Thousandths": 0.81,
  "Eighteen Hundredths": 0.18,
  "Thirteen Thousandths": 0.013,
  "Eighty-One Thousandths": 0.081,
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

  renderWordChoice(wordArray) {
    let displayed;


    if (wordArray.length === 0) {
        document.querySelector(".words").innerHTML = "Let's Begin!";
    } else if (wordArray === "Decimated") {
      document.querySelector(".words").innerHTML = "Decimated";
    } else {
      let word = wordArray[Math.floor(Math.random() * wordArray.length)];
        document.querySelector(".words").innerHTML = word;
        DISPLAYED_WORD = word;
      // });
    }
  }



  isMatch(wordVal) {
    return (wordVal === DISPLAYED_WORD ? true : false);

  }
}

module.exports = Word;
