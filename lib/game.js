const Blossom = require("./blossom");
const Background = require("./background");
const Word = require("./words");

class Game {
  constructor(ctx, ctx2, ctx3, ctxWords) {
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
    this.ctx3 = ctx3;
    this.ctx = ctx;
    //
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

}


  start(ctx, ctx3) {
    this.draw(ctx);
    this.drawSprite(ctx3);
    Word.prototype.renderWord();
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

  beginBackground(ctx2) {
    this.renderBackground(ctx2);
  }

  // start(ctx, ctx3) {
  //   // this.renderBackground(ctx);
  //   // this.drawSprite(ctx3)
  //   this.draw(ctx);
  // }

  createBlossoms() {
    return Blossom.randomBlossom(0, Game.DIM_Y, Game.NUM_BLOSSOMS, this.ctx3, this.ctx);
  }

  drawBlossoms() {
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

      if (this.explodeImage.startPosX >= 1024 && this.explodeImage.count <= 4) {
        this.explodeImage.startPosX = 0;
        this.explodeImage.startPosY += 128;
        this.explodeImage.count += 1;
      }
      window.requestAnimationFrame(this.animateCallback().bind(this));
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
