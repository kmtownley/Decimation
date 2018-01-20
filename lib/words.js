WORDS = {
  "One Tenth": 0.1,
  "Two Tents": 0.2,
  "Three Tenths": 0.3,
  "Four Tenths": 0.4,
  "Five Tenths": 0.5,
  "6 Tenths": 0.6,
  "8 Tenths": 0.8,
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
  "Eighteen Hundredths": 18,
  "Ninety-Nine Thousandths": 0.099,
  "Three Hundred and Fifteen Thousandths": 0.315
};

class Word {
  constructor() {
    this.value = null;
    this.match = null;
  }

  renderWord() {
    let keys = Object.keys(WORDS);
    let length = keys.length;
    let rnd = Math.floor(Math.random()*length);
    let key = keys[rnd];
    return key;
    // console.log(WORDS[key]);
    // return WORDS[key];
  }
}

module.exports = Word;
