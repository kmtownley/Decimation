const Blossom = require("./blossom");
const Background = require("./background");

class Game {
  constructor(ctx, ctx2, ctx3) {
    this.blossoms = [];
    this.valid = false;
    this.blossomExploded = false;
    this.selection = null;
    this.draw = this.draw.bind(this);
    this.drawSprite = this.drawSprite.bind(this);
    // this.renderBackground = this.renderBackground.bind(this);
    this.createBlossoms = this.createBlossoms.bind(this);
    this.gameLoop = this.gameLoop.bind(this);
    this.xDim = 0;
    this.yDim = 0;
    this.drawnBlossoms = [];
    this.lastTime = (new Date()).getTime();
    this.currentTime = 0;
    this.delta = 0;
    this.ctx = ctx;
    this.ctx2 = ctx2;
    this.ctx3 = ctx3;
    this.blossom = new Blossom(this.ctx2, this.ctx3);
    this.background = new Background(this.ctx2);

    for (let i = 0; i <= Game.NUM_BLOSSOMS; ++i) {
      this.blossoms.push(
        this.createBlossoms(this.ctx)
      );
    }
  }

  gameLoop() {
    this.currentTime = (new Date()).getTime();
    this.delta = (this.currentTime - this.lastTime) / 1000;
    this.ctx.clearRect(0, 0, 1000, 500);
    // this.draw(ctx);
    // this.renderBackground(this.ctx2);
    this.drawSprite();
    this.background.scrollImage();
    this.draw();
    window.requestAnimationFrame(this.gameLoop);

    this.lastTime = this.currentTime;


  }
  // function update(progress) {
  // // Update the state of the world for the elapsed time since last render
  // }
  //
  // function draw() {
  //   // Draw the state of the world
  // }
  //
  // function loop(timestamp) {
  //   var progress = timestamp - lastRender
  //
  //   update(progress)
  //   draw()
  //
  //   lastRender = timestamp
  //   window.requestAnimationFrame(loop)
  // }
  // var lastRender = 0
  // window.requestAnimationFrame(loop)

  // beginBackground(ctx2) {
  //   this.renderBackground(ctx2);
  // }

  // start(ctx, ctx3) {
  //   // this.renderBackground(ctx);
  //   // this.drawSprite(ctx3)
  //   this.draw(ctx);
  // }

  createBlossoms() {
    // debugger
    // return Blossom.randomBlossom(0, Game.DIM_Y, this.ctx2);
    let blossom = new Image();
    blossom.src = "./assets/images/whole_blossom.png";

    // debugger
    return new Blossom(
      0 * Math.random(),
      450 * Math.random(),
      // numBlossoms += 1,
      this.ctx2,
      this.ctx3

    );
  }

  drawBlossoms() {
    let i = 0;
    return () => {
      if (i == 40) clearInterval(this.interval);
      this.blossoms[i].draw(this.ctx);

      i += 1;
    };
  }

  draw() {


    this.interval = setInterval(this.drawBlossoms(this.ctx).bind(this), 6000);
  }

  collisionHandler(blossom, nextBlossom) {
    this.blossoms.forEach((blossom, idx) => {
      let nextBlossom = this.blossoms[idx + 1];
      if (blossom.x > nextBlossom.x) {
        blossom.x -= 10;
      }
    });
  }



  animateCallback() {
    debugger
    return () => {
      this.ctx3.clearRect(0, 0, 128, 128);

      this.ctx3.drawImage(this.explodeImage, this.explodeImage.startPosX, this.explodeImage.startPosY, 128, 128, 0, 0, 128, 128);

      this.explodeImage.startPosX += 128;

      if (this.explodeImage.startPosX >= 1024 && this.explodeImage.count <= 4) {
        this.explodeImage.startPosX = 0;
        this.explodeImage.startPosY += 128;
        this.explodeImage.count += 1;
      // }
      } else if (this.explodeImage.count > 4) {
        // return null;
         window.cancelAnimationFrame(this.animateCallback().bind(this));
      }
      window.requestAnimationFrame(this.animateCallback().bind(this));
    };
  }

  animate(ctx3) {

    window.requestAnimationFrame(this.animateCallback().bind(this));
  }

  drawSprite(ctx3) {
    debugger
    this.explodeImage = new Image();
    this.explodeImage.src = "./assets/images/explosion_sprite.png";
    this.explodeImage.startPosX = 0;
    this.explodeImage.startPosY = 0;
    this.explodeImage.count = 0;

    this.explodeImage.onload = () => {
      // this.ctx3.clearRect(0, 0, 128, 128);
      this.animate(ctx3);

      };
    }

  receiveMouseXY(x, y) {
    // console.log(x, y)
    if (this.blossoms !== undefined) {
      this.blossoms.forEach(blossom => {
        // debugger
        // console.log(blossom)
        if ((x < blossom.x + 100 && x > blossom.x) && (y > blossom.y + 100 && y < blossom.y + 208 ) && blossom.x !== 0) {
          // console.log("GOT IN")
          this.blossomExploded = true;
          debugger
          // delete this.blossoms[blossom];
          // blossom.explodeBlossom(this.ctx3);
          this.drawSprite();
        }
      });
    }
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



Game.DIM_X = 1000;
Game.DIM_Y = 500;
Game.NUM_BLOSSOMS = 30;


module.exports = Game;
