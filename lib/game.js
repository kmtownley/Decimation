const Blossom = require("./blossom");
const Background = require("./background");

class Game {
  constructor(ctx, ctx2, ctx3) {
    this.blossoms = [];
    this.valid = false;
    this.selection = null;
    this.draw = this.draw.bind(this);
    this.renderBackground = this. renderBackground.bind(this);
    this.createBlossoms = this.createBlossoms.bind(this);
    this.xDim = 0;
    this.yDim = 0;
    this.drawnBlossoms = [];
    this.ctx3 = ctx3;

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
    // this.renderBackground(ctx);
    this.draw(ctx);
    // this.drawSprite(ctx3);
    // this.collisionHandler();
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
    this.interval = setInterval(this.drawBlossoms(ctx).bind(this), 3000);
  }

  renderBackground(ctx2) {
    new Background(0, 500).scrollImage(ctx2);
  }

  // findVisibleBlossoms() {
  //
  //   this.blossoms.forEach(blossom => {
  //     if (blossom.x > 0) {
  //       this.visibleBlossoms.push(blossom);
  //     }
  //   });
  //   return this.visibleBlossoms;
  // }

  collisionHandler(blossom, nextBlossom) {
    this.blossoms.forEach((blossom, idx) => {
      let nextBlossom = this.blossoms[idx + 1];
      if (blossom.x > nextBlossom.x) {
        blossom.x -= 10;
      }
    });
  }



  animateCallback(ctx3) {
    debugger
    return () => {
      ctx3.clearRect(0, 0, 128, 128);
      // ctx3.drawImage(this.explodeImage, this.explodeImage.startPos, 128, 128, 128, 0, 0, 128, 128);
      //
      // this.explodeImage.startPos += 128;
      // window.requestAnimationFrame(this.animateCallback(ctx3).bind(this));
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
    debugger
    window.requestAnimationFrame(this.animateCallback(ctx3).bind(this));
  }

  drawSprite(ctx3) {

    this.height = 128;
    this.width = 128;

    // let sheetWidth = 1024;
    // let sheetHeight = 640;
    // let frameWidth = 128;
    // let frameHeight = 128;
    // let cols = 8;
    // let rows = 5;
    // let srcX;
    // let srcY;
    let framesPerRow = 8;
    let currentFrame = 0;
    this.explodeImage = new Image();
    this.explodeImage.src = "./assets/images/explosion_sprite.png";
    this.explodeImage.startPosX = 0;
    this.explodeImage.startPosY = 0;
    this.explodeImage.count = 0;

    this.explodeImage.onload = () => {
      this.ctx3.clearRect(0, 0, 128, 128);
      this.animate(ctx3);

      // const animateCallback = () => {
      //   ctx3.clearRect(0, 0, 128, 128);
      //   debugger
      //   ctx3.drawImage(this.explodeImage, this.explodeImage.startPosX, this.explodeImage.startPosY, 128, 128, 0, 0, 128, 128);
      //
      //   this.explodeImage.startPosX += 128;
      //
      //   if (this.explodeImage.startPosX >= 1024 & count <= 4) {
      //     this.explodeImage.startPosX = 0;
      //     this.explodeImage.startPosY += 128;
      //     count += 1;
      //   }
      //
      //   window.requestAnimationFrame(animateCallback);
        //
        // ctx3.drawImage(this.explodeImage, 128, 128, 128, 128, 0, 0, 128, 128);
        // ctx3.clearRect(0, 0, 128, 128);
        // ctx3.drawImage(this.explodeImage, 256, 128, 128, 128, 0, 0, 128, 128);
        // ctx3.clearRect(0, 0, 128, 128);
        // ctx3.drawImage(this.explodeImage, 384, 128, 128, 128, 0, 0, 128, 128);
        // ctx3.clearRect(0, 0, 128, 128);
      };

      // window.requestAnimationFrame(animateCallback);
    }

  // }


  //   const update = () => {
  //     currentFrame = (currentFrame + 1 % cols);
  //
  //     srcX = currentFrame * 128;
  //     srcY = 0;
  //   };
  //
  //   const createImage = (context) => {
  //
  //     update();
  //     context.drawImage(explodeImage, srcX, srcY, 128, 128);
  //   };
  //
  //   setInterval(createImage, 100);
  // }
  //
  // updateSprite() {
  //     // the current frame to draw
  //   let counter = 0;       // keep track of frame rate
  //
  //     // update to the next frame if it is time
  //   if (counter == (frameSpeed - 1)) {
  //       currentFrame = (currentFrame + 1) % endFrame;
  //
  //     // update the counter
  //     counter = (counter + 1) % frameSpeed;
  //     }
  // }

  receiveMouseXY(x, y) {
    // console.log(x, y)
    if (this.blossoms !== undefined) {
      this.blossoms.forEach(blossom => {
        // debugger
        // console.log(blossom)
        if ((x < blossom.x + 100 && x > blossom.x) && (y > blossom.y + 100 && y < blossom.y + 208 ) && blossom.x !== 0) {
          console.log("GOT IN")
          this.blossomExploded = true;
          debugger
          // delete this.blossoms[blossom];
          blossom.explodeBlossom(this.ctx3);
          // this.drawSprite();
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
