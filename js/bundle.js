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
// import Blossom from "./blossom";

const Game = __webpack_require__(1);

document.addEventListener("DOMContentLoaded", () => {
  let canvasEl = document.getElementById("myCanvas");
  canvasEl.width = 1000;
  canvasEl.height = 500;

  let ctx = canvasEl.getContext("2d");
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, canvasEl.width, canvasEl.height);

  let backgroundEl = document.getElementById("canvasBackground");
  backgroundEl.height = 100;
  backgroundEl.width = 300;

  let ctx2 = canvasEl.getContext("2d");



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

  const game = new Game();

  game.beginBackground(ctx2);
  game.start(ctx);

  window.Blossom = Blossom;

});


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

const Blossom = __webpack_require__(2);
const Background = __webpack_require__(3);

class Game {
  constructor() {
    this.blossoms = [];
    this.valid = false;
    this.selection = null;
    this.draw = this.draw.bind(this);
    this.renderBackground = this. renderBackground.bind(this);
    this.createBlossoms = this.createBlossoms.bind(this);
    this.xDim = 0;
    this.yDim = 0;
    this.drawnBlossoms = [];

    for (let i = 0; i <= Game.NUM_BLOSSOMS; ++i) {
      this.blossoms.push(
        this.createBlossoms()
      );
    }
  }

  beginBackground(ctx2) {
    this.renderBackground(ctx2);
  }

  start(ctx) {
    // this.renderBackground(ctx);
    this.draw(ctx);
    this.collisionHandler();
  }

  createBlossoms() {
    return Blossom.randomBlossom(0, Game.DIM_Y, Game.NUM_BLOSSOMS);
  }

  drawBlossoms(ctx) {
    let i = 0;

    return () => {
      if (i == 40) clearInterval(this.interval);
      this.blossoms[i].draw(ctx);
      debugger
      i += 1;
    };
  }

  draw(ctx) {
    this.interval = setInterval(this.drawBlossoms(ctx).bind(this), 3000);
  }

  renderBackground(ctx2) {
    new Background(0, 500).scrollImage(ctx2);
  }

  findVisibleBlossoms() {
    debugger
    this.blossoms.forEach(blossom => {
      if (blossom.x > 0) {
        this.visibleBlossoms.push(blossom);
      }
    });
    return this.visibleBlossoms;
  }

  collisionHandler(blossom, nextBlossom) {
    debugger
    this.findVisibleBlossoms();
      if (this.visibleBlossoms !== undefined) {
      this.visibleBlossoms.forEach((blossom, idx) => {
        let nextBlossom = this.vissibleBlossoms[idx + 1];
        if (blossom.x > nextBlossom.x) {
          blossom.x -= 10;
        }
      });
    }
  }



//   collisionDetection() {
//     if (rect1.x < rect2.x + rect2.width &&
//    rect1.x + rect1.width > rect2.x &&
//    rect1.y < rect2.y + rect2.height &&
//    rect1.height + rect1.y > rect2.y) {
//     // collision detected!
// }
//   }

}

Game.DIM_X = 1000;
Game.DIM_Y = 500;
Game.NUM_BLOSSOMS = 20;


module.exports = Game;


/***/ }),
/* 2 */
/***/ (function(module, exports) {

BLOSSOM = new Image();
BLOSSOM.src = "./assets/images/whole_blossom.png";


class Blossom {
  constructor(x, y) {
    this.x = x;
    this.y = Math.random() * 400 + 6;
    this.drawnBlossoms = [];
    this.visibleBlossoms = [];
    this.height = 125;
    this.width = 125;

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
       ctx.fillRect(0, 0, 1000, 500);
    };
    // return this.blossom;
    ctx.drawImage(this.blossom, this.x, this.y, 125, 125 );

    const animateCallback = () => {
    if (this.x <= Math.random() * 320 + 3  && this.y < Math.random() * 600 + 4) {
      this.x += dx;
      this.y += dy;
      // if (this.collisionDetected()) {
      //   this.x -= 50;
      // }
      this.draw(ctx);
    } else if (this.x < 450) {
       this.x += dx;
       this.y -= dy;
       // if (this.collisionDetected()) {
       //   this.x -= 50;
       // }
       this.draw(ctx);
     } else if (this.x < 730) {
       this.x += dx;
       this.y += dy;
       // if (this.collisionDetected()) {
       //   this.x -= 50;
       // }
       this.draw(ctx);
     } else if (this.x <= 999) {
       this.x += dx;
       this.y -= dy;
       this.draw(ctx);
     } else {
       return null;
     }
    };
    window.requestAnimationFrame(animateCallback);

   }

   // findVisibleBlossoms() {
   //   debugger
   //
   //   this.drawnBlossoms.forEach(blossom => {
   //     if (blossom.x > 0) {
   //       this.visibleBlossoms.push(blossom);
   //     }
   //   });
   //   return this.visibleBlossoms;
   // }

   collisionDetected(blossom, nextBlossom) {
     debugger
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



}

Blossom.randomBlossom = (maxX, maxY, numBlossoms) => {

  let blossom = new Image();
  blossom.src = "./assets/images/whole_blossom.png";

  return new Blossom(
    maxX * Math.random(),
    maxY * Math.random(),
    numBlossoms += 1
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


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map