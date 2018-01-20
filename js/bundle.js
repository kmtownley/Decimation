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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

const Blossom = __webpack_require__(2);

const Game = __webpack_require__(1);

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
    console.log(x, y);
    game.receiveMouseXY(x, y);
  });
  // canvasEl.onclick = function(e) {
  //   // let x = e.clientX;
  //   // let y = e.clientY;
  //   let x = e.pageX - canvasLeft;
  //   let y = e.pageY - canvasTop;
  //   console.log(x, y);
  //
  //   game.receiveMouseXY(x, y);
  // };


  let backgroundEl = document.getElementById("canvasBackground");
  backgroundEl.height = 100;
  backgroundEl.width = 300;

  let ctx2 = canvasEl.getContext("2d");

  let explosionEl = document.getElementById("canvasExplosion");
  explosionEl.height = 128;
  explosionEl.width = 128;

  let ctx3 = explosionEl.getContext("2d");



  // canvasEl.addEventListener('click', () => {
  //  console.log('canvas click');
  // });
  // let canvasPosition = {
  //   x: canvasEl.offset().left,
  //   y: canvasEl.offset().top
  // };
  //
  // canvasEl.on('click', function(e) {
  //
  //   // use pageX and pageY to get the mouse position
  //   // relative to the browser window
  //
  //   var mouse = {
  //       x: e.pageX - canvasPosition.x,
  //       y: e.pageY - canvasPosition.y
  //   };
  // });

  const game = new Game(ctx, ctx2, ctx3, ctxWords);

  game.beginBackground(ctx2);
  game.start(ctx, ctx3);

  window.Blossom = Blossom;

});


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

const Blossom = __webpack_require__(2);
const Background = __webpack_require__(3);
const Word = __webpack_require__(5);

class Game {
  constructor(ctx, ctx2, ctx3, ctxWords) {
    this.blossoms = [];
    this.valid = false;
    this.selection = null;
    this.draw = this.draw.bind(this);
    this.renderBackground = this. renderBackground.bind(this);
    this.createBlossoms = this.createBlossoms.bind(this);
    this.xDim = 0;
    this.yDim = 0;
    this.ctx3 = ctx3;
    this.ctx = ctx;
    //
    for (let i = 0; i <= Game.NUM_BLOSSOMS; ++i) {
      this.blossoms.push(
        this.createBlossoms()
      );
    }
  }

  beginBackground(ctx2) {
    this.renderBackground(ctx2);
  }

  start(ctx, ctx3) {
    this.draw(ctx);
    this.drawSprite(ctx3);
    Word.prototype.renderWord();
  }

  createBlossoms() {
    return Blossom.randomBlossom(0, Game.DIM_Y, Game.NUM_BLOSSOMS, this.ctx3, this.ctx);
  }

  drawBlossoms(ctx) {
    let i = 0;

    return () => {
      if (i == 40) clearInterval(this.interval);
      this.blossoms[i].draw(ctx);
      i += 1;
    };
  }

  draw() {
    this.interval = setInterval(this.drawBlossoms(this.ctx).bind(this), 3000);
  }

  renderBackground(ctx2) {
    new Background(0, 500).scrollImage(ctx2);
  }

  collisionHandler(blossom, nextBlossom) {
    this.blossoms.forEach((blossom, idx) => {
      let nextBlossom = this.blossoms[idx + 1];
      if (blossom.x > nextBlossom.x) {
        blossom.x -= 10;
      }
    });
  }

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
      this.blossoms.forEach((blossom, idx) => {

        if ((x < blossom.x + 100 && x > blossom.x) && (y > blossom.y + 100 && y < blossom.y + 208 ) && blossom.x !== 0) {
          blossom.blossomExploded = true;
          blossom.removeBlossom();

          if (idx !== -1) {
              this.blossoms.splice(idx, 1);
          }
          blossom.explodeBlossom(this.ctx3);
        }
      });
    }
  }
}


Game.DIM_X = 1000;
Game.DIM_Y = 500;
Game.NUM_BLOSSOMS = 30;

module.exports = Game;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

BLOSSOM = new Image();
BLOSSOM.src = "./assets/images/whole_blossom.png";
const Explosion = __webpack_require__(4);


class Blossom {
  constructor(x, y, numBlosssoms, ctx3, ctx) {
    this.x = x;
    this.y = Math.random() * 400 + 6;
    this.drawnBlossoms = [];
    this.visibleBlossoms = [];
    this.height = 125;
    this.width = 125;
    this.ctx3 = ctx3;
    this.ctx = ctx;
    this.blossomExploded = false;
    this.renderBlossom = this.renderBlossom.bind(this);

    // this.isOutOfBounds = this.isOutOfBounds.bind(this)
  }
  //
  // model() {
  //   this.rot += 0.1 * this.direc;
  //   this.x += this.xVec;
  //   this.yVec += this.gravity;
  //   this.y += this.yVec;
  //   this.bounceIf();
  // }
  //
  // bounceIf() {
  //   if (this.y >= this.bottom || this.y <= this.top) {
  //     this.y = this.bottom;
  //     this.yVec = -1 * this.yVec;
  //   }
  //
  // }




  draw(ctx) {
    let increments = [1, 2];
    let dx = 1.1;
    let dy = 0.9;
    this.blossom = new Image();
    this.blossom.src = './assets/images/whole_blossom.png';
    this.blossom.onload = function() {
      // ctx.drawImage(blossom, 10, 10, 125, 125);
       // ctx.fillRect(0, 0, 1000, 500);
    };
    if (this.blossomExlpoded === true) {
      debugger
      this.blossom = ctx.createImageData(128, 128);
        for (let i = this.blossom.data.length; --i >= 0; )
          this.blossom.data[i] = 0;
          ctx.putImageData(this.blossom, this.x, this.y);
      }

    // ctx.onclick = () => {
    //
    //   // let mouseX = e.clientX;
    //   // let mouseY = e.clientY;
    //   console.log("yay");
    // };
    // return this.blossom;
    ctx.drawImage(this.blossom, this.x, this.y, 125, 125 );

    const animateCallback = () => {
      if (this.explodedBlossom !== true) {
        if (this.x <= Math.random() * 320 + 3  && this.y < Math.random() * 600 + 4) {
          this.x += dx;
          this.y += dy;
          debugger
          this.renderBlossom(ctx);
        } else if (this.x < 400) {
          debugger
           this.x += dx;
           this.y -= dy;
           this.renderBlossom(ctx);
         } else if (this.x < 730) {
           debugger
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
    window.requestAnimationFrame(animateCallback);

   }

   renderBlossom() {
     debugger
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
   //
   //
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

     // return !(
     // (this.x + this.height) < otherBlossom.y ||
     //    (this.y > (otherBlossom.y + otherBlossom.height)) ||
     //   ((this.x + this.width) < otherBlossom.x) ||
     //   (this.x > (otherBlosom.x + otherBlossom.width))
     // );
   }

   moveRandom(maxY) {
     let dy = (Math.random() * 2) - 1;
     this.y = Math.abs((this.y + (dy * 25) * 0.1) % 300);
   }

   messageUser() {

     console.log("You clicked me");

   }

   explodeBlossom() {

     let explosion = new Explosion(this.x, this.y, this.ctx3);
     explosion.drawSprite();

     // let currentFrame = 0;  // the current frame to draw
     // let counter = 0;
     // let exlpodeImage = new Image();
     // let framesPerRow;
     // this.explodeImage.onload = () => {
     //   framesPerRow = Math.floor(explodeImage.width / 128);
     // };
     //
     // explodImage.src = "../assets/images/explosion_sprite.png";
   }

   // updateSprite() {
   //   if (counter === (frameSpeed - 1))
   //    currentFrame = (currentFrame + 1) % 1020;
   //
   //  // update the counter
   //  counter = (counter + 1) % frameSpeed;
   //  }// keep track of frame rate
   // }
  // draw(ctx) {
  //
  //   let dx = 1.1;
  //   // let dy;
  //   if (this.dy === null) {
  //     this.dy = (Math.random() * 4) - 1;
  //   }
  //
  //   this.blossom = new Image();
  //   this.blossom.src = './assets/images/whole_blossom.png';
  //   this.blossom.onload = function() {
  //     // ctx.drawImage(blossom, 10, 10, 125, 125);
  //      ctx.fillRect(0, 0, 1000, 500);
  //   };
  //   // return this.blossom;
  //   ctx.drawImage(this.blossom, this.x, this.y, 125, 125 );
  //   const animateCallback = () => {
  //     for (let i = 1; i < 20; i++) {
  //       if (i === 1 && (this.y <= 150 && this.y > 0)) {
  //         this.x += dx;
  //         this.y += this.dy;
  //         this.draw(ctx);
  //       } else if ( i === 1 && (this.y >150 && this.y < 300)) {
  //         this.x +=dx;
  //         this.y -= this.dy;
  //         this.draw(ctx);
  //       } else if (this.isOutOfBounds(this.y) && this.x < 1000) {
  //
  //         this.reverseDy(this.dy);
  //         this.x += dx;
  //         this.y += this.dy;
  //         this.draw(ctx);
  //       } else if (this.x < 1000) {
  //
  //         this.x += dx;
  //         this.y += this.dy;
  //         this.draw(ctx);
  //       } else {
  //         this.x = 1;
  //         this.y = Math.random() * 70 + 10;
  //         this.draw(ctx);
  //       }
  //
  //        }
  //     };
  //     window.requestAnimationFrame(animateCallback);
  //   }


   // reverseDy(dy) {
   //   return (
   //   this.dy = dy * -1
   //   );
   // }
   //
   // isOutOfBounds(y) {
   //   if (y > 300 || y < 1 ) {
   //     return true;
   //   } else {
   //     return false;
   //   }
   // }

   // moveUp() {
   //   if {this.starty < }
   // }
   removeBlossom() {
     debugger
     delete this;
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
/* 3 */
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


/***/ }),
/* 4 */
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
      this.ctx3.drawImage(this.explodeImage, this.explodeImage.startPosX, this.explodeImage.startPosY, 128, 128, this.blossomX / 8.3, this.blossomY / 5.9, 30, 70);
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
/* 5 */
/***/ (function(module, exports) {

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


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map