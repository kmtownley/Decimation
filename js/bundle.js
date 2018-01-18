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

const Game = __webpack_require__(1);

document.addEventListener("DOMContentLoaded", () => {
  let canvasEl = document.getElementById("myCanvas");
  canvasEl.width = 1000;
  canvasEl.height = 500;

  let ctx = canvasEl.getContext("2d");
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, canvasEl.width, canvasEl.height);

  // let ctx2 = canvasEl2.getContent("2d");



  // var x = canvasEl.width/2;
  // var y = canvasEl.height-30;
  // var dx = 2;
  // var dy = -2;
  // function draw() {
  //   // drawing code
  //   ctx.beginPath();
  //   ctx.rect(x, y, 50, 50);
  //   ctx.fillStyle = "#FF0000";
  //   ctx.fill();
  //   ctx.closePath();
  //   x += dx;
  //   y += dy;
  //
  // }
  // setInterval(draw, 10);

  const game = new Game();
  debugger
  // game.draw(ctx);
  game.start(ctx);
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
    this.xDim = 0;
    this.yDim = 0;

    // for (let i = 0; i < Game.NUM_BLOSSOMS; ++i) {
    // blossoms.push(
    //   Blossom.randomBlossom(Game.DIM_X, Game.DIM_Y, Game.NUM_BLOSSOMS)
    // );
  // }

  }

  start(ctx) {
    this.draw(ctx);
    this.renderBackground(ctx);
  }





  draw(ctx) {
  debugger
  let dx = 0.5;
  let dy = 0.5;
  let  b = new Blossom(0, 0).draw(ctx, 0, 0);

   ctx.drawImage(b, this.xDim, this.yDim, 125, 125);
   const animateCallback = () => {

   if (this.xDim < 500  && this.yDim < 500) {
     this.xDim += dx;
     this.yDim += dy;
     this.draw(ctx);
     } else {
      this.xDim = 1;
      this.yDim = 1;
      this.draw(ctx);
     }
   };
   window.requestAnimationFrame(animateCallback);

  }

  renderBackground(ctx) {
    debugger

    let bg = new Background(0, 500).scrollImage(ctx);
    // this.img = new Image();
    // this.img.src = './assets/images/footer_image_tower.png';
    //
    // this.img.onload = () => {
    // let x = 0;
    // let width = this.img.naturalWidth;
    // let min = 0-width;
    // let count = 1;
    //
    //   const loop = () => {
    //     ctx.drawImage(this.img, x, 370);
    //     ctx.drawImage(this.img, x + width, 370);
    //     ctx.drawImage(this.img, x + width * 2, 370);
    //     ctx.drawImage(this.img, x + width * 3, 370);
    //     x -= count;
    //     if (x < min) {
    //       x = 0;
    //     }
    //   };
    //   setInterval(loop, 9);
    // };


    // Background.scrollImage(ctx);
  }




}






Game.DIM_X = 1000;
Game.DIM_Y = 500;
Game.NUM_BLOSSOMS = 4;


module.exports = Game;


/***/ }),
/* 2 */
/***/ (function(module, exports) {

BLOSSOM = new Image();
BLOSSOM.src = "./assets/images/whole_blossom.png";

DEFAULTS = {
  BLOSSOM: BLOSSOM,
  POSX: 10,
  POSY: 10,
  WIDTH: 125,
  HEIGHT: 125,
};



class Blossom {
  constructor(ctx) {
    debugger
    // options.blossom = (new Image().src = "./assets/images/whole_blossom.png");
    // options.height = DEFAULTS.HEIGHT;
    // options.width = DEFAULTS.WIDTH;
    // options.posx = options.posx || DEFAULTS.POSX;
    // options.posy = options.posy || DEFAULTS.POSY;
    // this.randomBlossom(ctx);
  }

  // randomBlossom(maxX, maxY, numCircles) {
  //   debugger
  //   let blossom = new Image();
  //   blossom.src = "./assets/images/whole_blossom.png";
  //   return new Blossom(
  //     blossom.onload = () => {
  //       // ctx.fillRect(0, 0, 1000, 500);
  //       ctx.drawImage(blossom, maxX, maxY, 125, 125);
  //     }
  //   );
  //   // return blossom;
  //
  //   };


  draw(ctx, x, y) {
    this.blossom = new Image();
    this.blossom.src = './assets/images/whole_blossom.png';
    this.blossom.onload = function() {
      // ctx.drawImage(blossom, 10, 10, 125, 125);
       ctx.fillRect(0, 0, 1000, 500);

    };
    return this.blossom;
  }


}

module.exports = Blossom;


/***/ }),
/* 3 */
/***/ (function(module, exports) {

class Background {
  constructor() {
  }

  scrollImage(ctx) {
    this.img = new Image();
    this.img.src = './assets/images/footer_image_tower.png';

    this.img.onload = () => {
    let x = 0;
    let width = this.img.naturalWidth;
    let min = 0 - width;
    let count = 1;

      const loop = () => {
  
        ctx.drawImage(this.img, x, 370);
        ctx.drawImage(this.img, x + width, 370);
        ctx.drawImage(this.img, x + width * 2, 370);
        ctx.drawImage(this.img, x + width * 3, 370);
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