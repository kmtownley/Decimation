/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

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


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

// BLOSSOM = new Image();
// BLOSSOM.src = "./assets/images/whole_blossom.png";
const Word = __webpack_require__(0);
const Explosion = __webpack_require__(3);


class Blossom {
  constructor(x, y, numBlosssoms, ctx3, ctx) {
    this.x = x;
    this.y = Math.random() * 400 + 6;
    this.drawnBlossoms = [];
    this.visibleBlossoms = [];
    this.ctx3 = ctx3;
    this.ctx = ctx;
    this.blossomExploded = false;
    this.renderBlossom = this.renderBlossom.bind(this);
    this.draw = this.draw.bind(this);
    this.value = new Word();
    this.decimalValue = this.value.decimalValue;
    this.wordValue = this.value.wordValue;
    this.cancelGame = false;

  }

  // pauseGame(ctx) {
  //   debugger
  //   this.cancelGame = true;
  //   Blossom.prototype.draw;
  // }

  draw(ctx) {
    let increments = [1, 2];
    let dx = 1.1;
    let dy = 0.9;
    this.blossom = new Image();
    this.blossom.src = './assets/images/whole_blossom.png';
    this.blossom.onload = function() {
    };
    if (this.blossomExlpoded === true) {

      this.blossom = ctx.createImageData(128, 128);
        for (let i = this.blossom.data.length; --i >= 0; )
          this.blossom.data[i] = 0;
          ctx.putImageData(this.blossom, this.x, this.y);
      }

    ctx.drawImage(this.blossom, this.x, this.y, 125, 125 );
    ctx.font="24px Varela Round";
    ctx.fillText(this.decimalValue, this.x + 37, this.y + 73);


    const animateCallback = () => {
      if (this.explodedBlossom !== true) {
        if (this.x <= Math.random() * 320 + 3  && this.y < Math.random() * 600 + 4) {
          this.x += dx;
          this.y += dy;
          this.renderBlossom(ctx);
        } else if (this.x < 400) {
           this.x += dx;
           this.y -= dy;
           this.renderBlossom(ctx);
         } else if (this.x < 730) {
           this.x += dx;
           this.y += dy;
           this.renderBlossom(ctx);
         } else if (this.x <= 999) {
           this.x += dx;
           this.y -= dy;
           this.renderBlossom(ctx);
         } else {

           return null;
         }
       }
    };
    if (!this.cancelGame) {
      window.requestAnimationFrame(animateCallback);
    }
   }

   renderBlossom() {
     if (this.blossomExploded === true) {
       this.blossom = this.ctx.createImageData(128, 128);
         for (let i = this.blossom.data.length; --i >= 0; )
           this.blossom.data[i] = 0;
           // this.ctx.putImageData(this.blossom, this.x, this.y);
       } else {
       this.draw(this.ctx);
     }
   }
   // findVisibleBlossoms() {
   //   this.drawnBlossoms.forEach(blossom => {
   //     if (blossom.x > 0) {
   //       this.visibleBlossoms.push(blossom);
   //     }
   //   });
   //   return this.visibleBlossoms;
   // }


   collisionDetected(blossom, nextBlossom) {
     this.findVisibleBlossoms();
       if (this.visibleBlossoms !== undefined) {
       this.visibleBlossoms.forEach((blossom, idx) => {
         let nextBlossom = this.vissibleBlossoms[idx + 1];
         if (blossom.x > nextBlossom.x) {
           return true;
         }
       });
     }
   }

   moveRandom(maxY) {
     let dy = (Math.random() * 2) - 1;
     this.y = Math.abs((this.y + (dy * 25) * 0.1) % 300);
   }

   explodeBlossom() {
     let explosion = new Explosion(this.x, this.y, this.ctx3);
     explosion.drawSprite();
   }

   findVisibleBlossoms() {
    if (this.x > 0 && this.x < 1000) {
      this.visibleBlossoms.push(this);
    }

  }

}

Blossom.randomBlossom = (maxX, maxY, numBlossoms, ctx3, ctx) => {
  let blossom = new Image();
  blossom.src = "./assets/images/whole_blossom.png";
  return new Blossom(
    maxX * Math.random(),
    maxY * Math.random(),
    numBlossoms += 1,
    ctx3,
    ctx
  );
};


module.exports = Blossom;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

const Blossom = __webpack_require__(1);
const Game = __webpack_require__(4);
const Words = __webpack_require__(0);

document.addEventListener("DOMContentLoaded", () => {
  let canvasEl = document.getElementById("myCanvas");
  canvasEl.width = 1000;
  canvasEl.height = 500;
  canvasLeft = canvasEl.offsetLeft;
  canvasTop = canvasEl.offsetTop;

  let ctx = canvasEl.getContext("2d");
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, canvasEl.width, canvasEl.height);

  let canvasWords = document.getElementById("canvasWords");
  canvasWords.width = 80;
  canvasWords.height = 80;
  let ctxWords = document.getElementById("canvasWords");

  let clickyEl = document.querySelector(".clicky");
  clickyEl.addEventListener("click", (e) => {
    let x = e.pageX - canvasLeft;
    let y = e.pageY - canvasTop;
    game.receiveMouseXY(x, y);
  });

  let modal = document.getElementById('myModal');
  let btn = document.getElementById("myBtn");
  let span = document.getElementsByClassName("close")[0];
  btn.onclick = function() {
      modal.style.display = "block";
  };

  span.onclick = function() {
      modal.style.display = "none";
  };
  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  };

  let backgroundEl = document.getElementById("canvasBackground");
  backgroundEl.height = 100;
  backgroundEl.width = 300;

  let ctx2 = canvasEl.getContext("2d");

  let explosionEl = document.getElementById("canvasExplosion");
  explosionEl.height = 128;
  explosionEl.width = 128;

  let ctx3 = explosionEl.getContext("2d");

  const game = new Game(ctx, ctx2, ctx3, ctxWords);

  debugger
  game.beginBackground(ctx2);
  game.controlGame();
  // game.start(ctx, ctx3);


  // let pauseButton = document.getElementById("pause");
  // pauseButton.addEventListener("click", () =>  game.togglePause);

  // window.Blossom = Blossom;

});


/***/ }),
/* 3 */
/***/ (function(module, exports) {

class Explosion {
  constructor(x, y, ctx3) {
    this.animateCallback = this.animateCallback.bind(this);

    this.ctx3 = ctx3;
    this.start = Date.now();
    this.frame = 0;
    this.blossomX = x;
    this.blossomY = y;
  }


  animateCallback(ctx3) {

    return () => {
      // this.ctx3.clearRect(this.blossomX, this.blossomY, 30, 70);
      // ctx3.drawImage(this.explodeImage, this.explodeImage.startPos, 128, 128, 128, 0, 0, 128, 128);
      //
      // this.explodeImage.startPos += 128;
      // window.requestAnimationFrame(this.animateCallback(ctx3).bind(this));
      this.ctx3.drawImage(this.explodeImage, this.explodeImage.startPosX, this.explodeImage.startPosY, 128, 128, this.blossomX / 9.2, this.blossomY / 5.9, 30, 70);
      this.explodeImage.startPosX += 128;

      if (this.explodeImage.startPosX >= 1024 & this.explodeImage.count <= 4) {
        this.explodeImage.startPosX = 0;
        this.explodeImage.startPosY += 128;
        this.explodeImage.count += 1;

      }

      if (Date.now() - this.start < 8000) {
      window.requestAnimationFrame(this.animateCallback(this.ctx3).bind(this));
      }
    };
  }

  animate(ctx3) {

    window.requestAnimationFrame(this.animateCallback(this.ctx3).bind(this));
  }

  drawSprite() {
    this.explodeImage = new Image();
    this.explodeImage.src = "./assets/images/explosion_sprite.png";
    this.explodeImage.startPosX = 0;
    this.explodeImage.startPosY = 0;
    this.explodeImage.count = 0;

    // this.ctx3.clearRect(this.blossomX / 8.8, this.blossomY / 5.7, 30, 70);
    this.explodeImage.onload = () => {
      this.animate(this.ctx3);


      };

    }
  // animateCallback(ctx3) {
  //
  //   // return () => {
  //     // ctx3.clearRect(0, 0, 128, 128);
  //
  //     this.ctx3.drawImage(this.explodeImage, this.explodeImage.startPosX, this.explodeImage.startPosY, 128, 128, 0, 0, 128, 128);
  //
  //     this.explodeImage.startPosX += 128;
  //
  //     if (this.explodeImage.startPosX >= 1024 && this.explodeImage.count <= 4) {
  //       this.explodeImage.startPosX = 0;
  //       this.explodeImage.startPosY += 128;
  //       this.explodeImage.count += 1;
  //     } else if (this.explodeImage.count > 4) {
  //       window.cancelAnimationFrame(request);
  //     }
  //     // window.requestAnimationFrame(this.animateCallback(ctx3).bind(this));
  //   // };
  //   let request = window.requestAnimationFrame(this.animateCallback.bind(this));
  // }
  //
  // animate(ctx3) {
  //
  //   this.animateCallback(ctx3);
  //   // .bind(this);
  //   // window.requestAnimationFrame(this.animateCallback(ctx3).bind(this));
  // }
  //
  // drawSprite(ctx3) {
  //
  //   this.explodeImage = new Image();
  //   this.explodeImage.src = "./assets/images/explosion_sprite.png";
  //   this.explodeImage.startPosX = 0;
  //   this.explodeImage.startPosY = 0;
  //   this.explodeImage.count = 0;
  //
  //   // this.explodeImage.onload = () => {
  //     // ctx3.clearRect(0, 0, 128, 128);
  //     // this.animate(ctx3);
  //   // for (var i = 0; i < 40; i++) {
  //     ctx3.drawImage(this.explodeImage, this.explodeImage.startPosX, this.explodeImage.startPosY, 128, 128, 0, 0, 128, 128);
  //
  //     this.explodeImage.startPosX += 128;
  //     ctx3.clearRect(0,0, 128, 128);
  //
  //     if (this.explodeImage.startPosX >= 1024 & this.explodeImage.count <= 4) {
  //       this.explodeImage.startPosX = 0;
  //       this.explodeImage.startPosY += 128;
  //       this.explodeImage.count += 1;
  //     }
  //
  //     // setInterval(this.drawSprite, 20);
  //
  //   // }
  //   // this.drawSprite(ctx3);
  //
  //     // };
  // }


}

module.exports = Explosion;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

const Blossom = __webpack_require__(1);
const Background = __webpack_require__(5);
const Word = __webpack_require__(0);
const Player = __webpack_require__(6);

class Game {
  constructor(ctx, ctx2, ctx3, ctxWords) {
    this.blossoms = [];
    this.visibleBlossoms = [];
    // this.numBlossoms = 50;
    this.cancelGame = "";
    this.start = null;
    this.draw = this.draw.bind(this);
    this.startAnimation = this.startAnimation.bind(this);
    this.createBlossoms = this.createBlossoms.bind(this);
    this.findVisibleWords = this.findVisibleWords.bind(this);
    this.xDim = 0;
    this.yDim = 0;
    this.ctx3 = ctx3;
    this.ctx2 = ctx2;
    this.ctx = ctx;
    this.visibleWords = [];
    this.player = new Player();
    this.drawnBlossoms = 0;
    //
    for (let i = 0; i <= Game.NUM_BLOSSOMS; ++i) {
      this.blossoms.push(
        this.createBlossoms()
      );
    }
  }

  beginBackground() {
    this.renderBackground(this.ctx2);
  }

  startAnimation() {
    this.toggleStart();
    if (this.start) {
      this.draw(this.ctx);
      this.drawSprite(this.ctx3);
      Word.prototype.renderWordChoice(this.visibleWords);
    }
  }


  controlGame() {
    let startButton = document.getElementById("start");
    startButton.addEventListener("click", this.startAnimation, false);
    let stopButton = document.getElementById("stop").addEventListener("click",   this.gameOver, false);
  }

  toggleStart() {
    if (!this.start) {
      this.start = true;
    } else if (this.start) {
      this.start = false;
    }
  }

  gameOver() {
    let gameOverMessage = document.getElementById("gameOver");
    this.stoppedGame = true;
    gameOverMessage.style.display = "inline-block";
  }

  toggleGameScreen() {
    if (this.stoppedGame === true) {
      let gameOverMessage = document.getElementById("gameOver");
      gameOverMessage.style.display = "none";
    }
  }

  createBlossoms() {
    return Blossom.randomBlossom(0, Game.DIM_Y, Game.NUM_BLOSSOMS, this.ctx3, this.ctx);
  }

  drawBlossoms(ctx) {
    let i = 0;
    return () => {
      if (i === 50) clearInterval(this.interval);
      if (i === 50) {
        this.gameOver();
      }
      this.findVisibleWords();
      this.blossoms[i].draw(ctx);
      i += 1;
      this.numBlossoms -= 1;
    };
  }

  draw() {
    this.interval = setInterval(this.drawBlossoms(this.ctx).bind(this), 3000);
  }

  renderBackground(ctx2) {
    if (!this.paused) {
    new Background(0, 500).scrollImage(ctx2);
    }
  }

  findVisibleWords() {
    this.blossoms.forEach(blossom => {
      if (blossom.x > 0 && blossom.x < 980) {
        this.visibleBlossoms.push(blossom);
        if (this.visibleBlossoms.length > 7) {
          this.visibleBlossoms.splice(0,1);
        }
      }
    });
    this.visibleBlossoms.forEach(blossom => {
      if (!this.visibleWords.includes(blossom.wordValue)) {
        if (this.visibleWords.length > 2) {
          this.visibleWords.splice(0, 1);
        }
        this.visibleWords.push(blossom.wordValue);

        Word.prototype.renderWordChoice(this.visibleWords);
      }
    });
  }
  //
  // collisionHandler(blossom, nextBlossom) {
  //   this.blossoms.forEach((blossom, idx) => {
  //     let nextBlossom = this.blossoms[idx + 1];
  //     if (blossom.x > nextBlossom.x) {
  //       blossom.x -= 10;
  //     }
  //   });
  // }

  animateCallback(ctx3) {
    return () => {
      ctx3.clearRect(0, 0, 128, 128);
      ctx3.drawImage(this.explodeImage, this.explodeImage.startPosX, this.explodeImage.startPosY, 128, 128, 0, 0, 128, 128);
      this.explodeImage.startPosX += 128;

      if (this.explodeImage.startPosX >= 1024 & this.explodeImage.count <= 4) {
        this.explodeImage.startPosX = 0;
        this.explodeImage.startPosY += 128;
        this.explodeImage.count += 1;
      }
       window.requestAnimationFrame(this.animateCallback(ctx3).bind(this));
    };
  }

  animate(ctx3) {
     window.requestAnimationFrame(this.animateCallback(ctx3).bind(this));
  }

  drawSprite(ctx3) {
    this.explodeImage = new Image();
    this.explodeImage.src = "./assets/images/explosion_sprite.png";
    this.explodeImage.startPosX = 0;
    this.explodeImage.startPosY = 0;
    this.explodeImage.count = 0;
    this.explodeImage.onload = () => {
      this.ctx3.clearRect(0, 0, 128, 128);
      this.animate(ctx3);
      };
    }

  receiveMouseXY(x, y) {
    if (this.blossoms !== undefined) {
      this.visibleBlossoms.forEach((blossom, idx) => {

        if ((x < blossom.x + 100 && x > blossom.x) && (y > blossom.y + 100 && y < blossom.y + 208 ) && blossom.x !== 0) {
          //bl
          if (Word.prototype.isMatch(blossom.wordValue)) {
            this.correctChoices += 1;
            this.player.addGems();
            blossom.blossomExploded = true;
            if (idx !== -1) {
              this.visibleBlossoms.splice(idx, 1);
            }
            // this.visibleBlossoms.push(this.blossoms[idx+3].wordV)
            Word.prototype.renderWordChoice("Decimated");
            blossom.explodeBlossom(this.ctx3);
          } else {
            this.player.removeGems();
          }
        }
      });
    }
  }
}


Game.DIM_X = 1000;
Game.DIM_Y = 500;
Game.NUM_BLOSSOMS = 50;

module.exports = Game;


/***/ }),
/* 5 */
/***/ (function(module, exports) {

class Background {
  constructor() {
  }

  scrollImage(ctx2) {
    this.img = new Image();
    this.img.src = './assets/images/footer_image_tower.png';

    this.img.onload = () => {
    let x = 0;
    let width = this.img.naturalWidth;
    let min = 0 - width;
    let count = 1;

      const loop = () => {
        ctx2.fillRect(0, 0, 1000, 500);
        ctx2.drawImage(this.img, x, 370);
        ctx2.drawImage(this.img, x + width, 370);
        ctx2.drawImage(this.img, x + width * 2, 370);
        ctx2.drawImage(this.img, x + width * 3, 370);
        x -= count;
        if (x < min) {
          x = 0;
        }
      };
    setInterval(loop, 9);
    };
  }
}

module.exports = Background;




// class Background {
//   constructor(ctx2) {
//     this.x = 0;
//     this.count = 1;
//     this.img = new Image();
//     this.img.src = './assets/images/footer_image_tower.png';
//     this.width = 405;
//     this.min = 0 - this.width;
//     this.ctx2 = ctx2;
//   }
//
//   scrollImage() {
//     // let x = 0;
//     // let width = this.img.naturalWidth;
//     // let min = 0 - width;
//     // let count = 1;
//     // this.img = new Image();
//     // this.img.src = './assets/images/footer_image_tower.png';
//
//     // this.img.onload = () => {
//
//       // const loop = () => {
//         this.ctx2.fillRect(0, 0, 1000, 500);
//         this.ctx2.drawImage(this.img, this.x, 370);
//         this.ctx2.drawImage(this.img, this.x + this.width, 370);
//         this.ctx2.drawImage(this.img, this.x + this.width * 2, 370);
//         this.ctx2.drawImage(this.img, this.x + this.width * 3, 370);
//         this.x -= this.count;
//         if (this.x < this.min) {
//           this.x = 0;
//         }
//       // };
//     // setInterval(loop, 9);
//     // };
//   }
// }
//
// module.exports = Background;


/***/ }),
/* 6 */
/***/ (function(module, exports) {

class Player {
  constructor() {
    this.gemScore = 0;

    this.renderGems();
  }

  addGems() {
    this.gemScore += 10;
    this.renderGems();
  }

  removeGems() {
    this.gemScore -= 10;
    this.renderGems();
  }

  renderGems() {

    document.getElementById("gemScore").innerHTML = "Score: " +  this.gemScore;
  }


}


module.exports = Player;


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map