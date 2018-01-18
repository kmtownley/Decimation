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
  game.draw(ctx);
});


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

const Blossom = __webpack_require__(3);

class Game {
  constructor() {
    this.blossoms = [];
    this.valid = false;
    this.selection = null;
    this.draw = this.draw.bind(this);
    this.xDim = 0;
    this.yDim = 0;

    // for (let i = 0; i < Game.NUM_BLOSSOMS; ++i) {
    // blossoms.push(
    //   Blossom.randomBlossom(Game.DIM_X, Game.DIM_Y, Game.NUM_BLOSSOMS)
    // );
  // }

  }

  // draw(ctx) {
  //   let newLeaf = new Leaf();
  //   newLeaf.draw(ctx);
  //   this.leaves.push(newLeaf);
  //
  //   const animationCallback = () => {
  //
  //   };
  // }

  // start(canvasEL) {
  //   const ctx = canvasEl.getContext("2d");
  //
  //   const animate = () =>  {
  //     this.moveBlossoms();
  //     this.render(ctx);
  //
  //     requestAnimationFrame(animate);
  //   };
  //
  //   animate();
  // }

  // render(ctx) {
  //   ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
  //
  //   blossoms.forEach(function (blossom) {
  //   blossom.render(ctx);
  //   });
  // }

  draw(ctx) {
  debugger
  // let blossom = new Image();
  let dx = 0.5;
  let dy = 0.5;

 // ctx.clearRect(0,0, Game.DIM_X, Game.DIM_Y);
   // ctx.beginPath();
   // ctx.arc(x, y, 10, 0, Math.PI*2);
   // ctx.fillStyle = "#ffffff";
   // blossom.onload = () => {
   //   ctx.fillRect(0, 0, 1000, 500);
   //   ctx.drawImage(blossom, this.xDim, this.yDim, 125, 125);
   // };
   // blossom.src = './assets/images/whole_blossom.png';
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
     // window.requestAnimationFrame(animateCallback);
     }
   };
   window.requestAnimationFrame(animateCallback);

  }
}

    // move(ctx) {
    //   let x = 10;
    //   let y = 10;
    //   ctx.beginPath();
    //   ctx.arc(x, y, 10, 0, Math.PI*2);
    //   ctx.fillStyle = "#0095DD";
    //   ctx.fill();
    //   ctx.closePath();
    //   x += 2;
    //   y += 2;
    //   setInterval(this.move, 10);
    // }
   // moveBlossoms() {
   //   this.blossoms.forEach(blossom => {
   //     Blossom.moveBlossom(Game.DIM_X, Game.DIM_Y);
   //   });
   // }
   // animate() {
   //  var cx=50;
   //  var cy=50;
   //  var radius=40;
   //
   //  // a variable to hold the current degree of rotation
   //  var degreeAngle=0;
   //  requestAnimationFrame(animate);
   //
   //  degreeAngle+=1;
   //   var radianAngle=degreeAngle*Math.PI/180;
   //   var x=cx+radius*Math.cos(radianAngle);
   //   var y=cy+radius*Math.sin(radianAngle);
   //
   //   // clear the canvas
   //   // and draw the image at its new position
   //   ctx.clearRect(0,0,canvas.width,canvas.height);
   //   ctx.drawImage(img,x,y);
   //
   // }



  // draw(ctx) {
  //
  //   ctx.fillStyle = "#ffffff";
  //   ctx.fillRect(0, 0, Game.DIM_X, Game.DIM_Y);
  //
  //   this.leaves.forEach((leaf) => {
  //     leaf.draw(ctx);
  //   });
  // }




Game.DIM_X = 1000;
Game.DIM_Y = 500;
Game.NUM_BLOSSOMS = 4;


module.exports = Game;


/***/ }),
/* 2 */,
/* 3 */
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


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map