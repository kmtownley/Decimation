const Blossom = require("./blossom");
const Background = require("./background");

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
     // window.requestAnimationFrame(animateCallback);
     }
   };
   window.requestAnimationFrame(animateCallback);
  }

  renderBackground() {

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
