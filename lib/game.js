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

    for (let i = 0; i <= Game.NUM_BLOSSOMS; ++i) {
      this.blossoms.push(
        this.createBlossoms()
      );
    }
  }

  start(ctx) {
    this.renderBackground(ctx);
    this.draw(ctx);
  }

  createBlossoms() {
    return Blossom.randomBlossom(0, Game.DIM_Y, Game.NUM_BLOSSOMS);
  }


  drawBlossoms(ctx) {
    let i = 0;

    return () => {
      if (i == 40) clearInterval(this.interval);
      this.blossoms[i].draw(ctx);
      i += 1;
    };
  }





  draw(ctx) {
  // let  b = new Blossom(0, 0).draw(ctx, 0, 0);
  // new Blossom(0, 0).draw(ctx);
    this.interval = setInterval(this.drawBlossoms(ctx).bind(this), 5000);
  // this.blossoms.forEach(blossom => {
  //   setTimeout(function() { blossom.draw(ctx)}, 1000);
  //   blossom.draw(ctx);
  // });
   // ctx.drawImage(b, this.xDim, this.yDim, 125, 125);
   // const animateCallback = () => {
   //
   // if (this.xDim < 500  && this.yDim < 300) {
   //
   //   this.xDim += dx;
   //   this.yDim += dy;
   //   this.draw(ctx);
   //   } else {
   //
   //    this.xDim = 1;
   //    this.yDim = 1;
   //    this.draw(ctx);
   //   }
   // };
   // window.requestAnimationFrame(animateCallback);

  }

  renderBackground(ctx) {
    new Background(0, 500).scrollImage(ctx);
  }




}

Game.DIM_X = 1000;
Game.DIM_Y = 500;
Game.NUM_BLOSSOMS = 20;


module.exports = Game;
