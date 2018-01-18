const Blossom = require("./blossom");
const Background = require("./background");
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
