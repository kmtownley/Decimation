const Blossom = require("./blossom");
const Background = require("./background");
const Word = require("./words");
const Player = require("./player");
const Explosion = require("./explosion");

class Game {
  constructor(ctx, ctx2, ctx3, ctxWords) {
    this.blossoms = [];
    this.visibleBlossoms = [];
    this.cancelGame = "";
    this.start = null;
    this.startAnimation = this.startAnimation.bind(this);
    this.createBlossoms = this.createBlossoms.bind(this);
    this.findVisibleWords = this.findVisibleWords.bind(this);
    this.drawBlossoms = this.drawBlossoms.bind(this);
    this.renderExplosion = this.renderExplosion.bind(this);
    this.explodeBlossoms = this.explodeBlossoms.bind(this);
    this.xDim = 0;
    this.yDim = 0;
    this.ctx3 = ctx3;
    this.ctx2 = ctx2;
    this.ctx = ctx;
    this.visibleWords = [];
    this.player = new Player();
    this.drawnBlossoms = 0;
    this.now;
    this.then = Date.now();
    this.delta;
    this.blossomInterval = 3000;
    this.explodeImageCount;
    this.exploding = true;
    this.round = 0;
    this.explosion = new Explosion(this.ctx3);
    this.willExplode = false;
    // this.explodeImage.count = 0;
    //
    for (let i = 0; i <= Game.NUM_BLOSSOMS; ++i) {
      this.blossoms.push(
        this.createBlossoms()
      );
    }
  }

  beginBackground() {
    this.renderBackground(this.ctx2);
  }

  // startAnimation() {
  //   let now = Date.now();
  //   let this.delta = now - this.then
  //   this.toggleStart();
  //   if (this.start) {
  //     this.draw(this.ctx);
  //     this.drawSprite(this.ctx3);
  //     Word.prototype.renderWordChoice(this.visibleWords);
  //   }
  // }

  startAnimation() {

    this.ctx3.clearRect(0, 0, 128, 128);
    if (this.exploding) {
      this.renderExplosion(this.ctx3);
    }

//
    // this.drawSprite(this.ctx3);
    // this.ctx.fillRect(0, 0, 1000, 500);
    // Explosion.prototype.renderExplosion(0, 0, this.ctx3);
    let now = Date.now();
    this.delta = now - this.then;
    if (this.visibleBlossoms) {
      this.drawVisibleBlossoms(this.ctx);
      this.explodeBlossoms();
    }

    // this.toggleStart();
    setTimeout(() => this.explodedBlossom = false, 2000);

    if (this.delta > this.blossomInterval) {


      Word.prototype.renderWordChoice(this.visibleWords);

      this.then = now - (this.delta % this.blossomInterval);
      // this.drawnBlossoms += 1;
      if (this.drawnBlossoms === 50) clearInterval(this.interval);
      if (this.drawnBlossoms === 50) {
        this.gameOver();
      }
    }
    this.findVisibleWords();
    requestAnimationFrame(this.startAnimation);
  }


  controlGame() {
    let startButton = document.getElementById("start");
    startButton.addEventListener("click", this.startAnimation, false);
    let stopButton = document.getElementById("stop").addEventListener("click",   this.gameOver, false);
  }

  toggleStart() {

    if (!this.start) {
      this.start = true;
      setInterval(() => {
      this.visibleBlossoms.push(this.blossoms.splice(0, 1));
      }, 3000);
      setInterval(() => this.findVisibleWords, 3000);
      // if (this.visibleBlossoms. )
      // this.renderExplosion(this.ctx3);
    } else if (this.start) {
      this.start = false;
    }
  }

  gameOver() {
    let gameOverMessage = document.getElementById("gameOver");
    this.stoppedGame = true;
    gameOverMessage.style.display = "inline-block";
  }

  toggleGameScreen() {
    if (this.stoppedGame === true) {
      let gameOverMessage = document.getElementById("gameOver");
      gameOverMessage.style.display = "none";
    }
  }

  drawVisibleBlossoms(ctx) {
    let idxDeleted;
    this.visibleBlossoms.forEach((blossom, idx) => {


      blossom[0].draw(ctx);
      if (blossom[0].x > 980) {
        idxDeleted = idx;
      }
    });
    // if (idxDeleted) {
    //   this.visibleBlossoms.splice(idxDeleted, 1);
    // }
  }

  createBlossoms() {
    return Blossom.randomBlossom(0, Game.DIM_Y, Game.NUM_BLOSSOMS, this.ctx3, this.ctx);
  }

  drawBlossoms(ctx) {
    // this.blossoms.forEach(blossom => {
    //   blossom.draw(this.ctx);
    // });
    this.drawnBlossoms += 1;



    // this.blossoms[this.drawnBlossoms].draw(ctx);
  }

  explodeBlossoms() {
    // debugger
    this.visibleBlossoms.forEach(blossom => {
      if (blossom[0].willExplode === true) {
        blossom[0].explodeBlossom(this.ctx3);
      }
    });
  }

  renderBackground(ctx2) {
    if (!this.paused) {
    new Background(0, 500).scrollImage(ctx2);
    }
  }

  findVisibleWords() {
    this.blossoms.forEach(blossom => {
      if (blossom.x > 0 && blossom.x < 980) {
        this.visibleBlossoms.push(blossom);
        if (this.visibleBlossoms.length > 7) {
          this.visibleBlossoms.splice(0,1);
        }
      }
    });
    this.visibleBlossoms.forEach(blossom => {
      if (!this.visibleWords.includes(blossom.wordValue)) {
        if (this.visibleWords.length > 2) {
          this.visibleWords.splice(0, 1);
        }
        this.visibleWords.push(blossom[0].wordValue);

        // Word.prototype.renderWordChoice(this.visibleWords);
      }
    });
  }
  //
  // collisionHandler(blossom, nextBlossom) {
  //   this.blossoms.forEach((blossom, idx) => {
  //     let nextBlossom = this.blossoms[idx + 1];
  //     if (blossom.x > nextBlossom.x) {
  //       blossom.x -= 10;
  //     }
  //   });
  // }

  renderExplosion() {
    // let explosionInit = new Explosion(this.ctx3);
    this.explosion.explodeBlossom(0, -10, 120, 130);
    setTimeout(() => this.exploding = false, 2000);

  }
  // renderExplosion(ctx3) {
  //
  //   this.explodeImage = new Image();
  //   this.explodeImage.src = "./assets/images/explosion_sprite.png";
  //   this.explodeImage.startPosX = 0;
  //   this.explodeImage.startPosY = 0;
  //   if (!this.explodeImageCount) {
  //     this.explodeImageCount = 0;
  //   }
  //   // return () => {
  //
  //     if (this.explodeImageCount <= 4) {
  //     this.ctx3.clearRect(0, 0, 128, 128);
  //     this.ctx3.drawImage(this.explodeImage, this.explodeImage.startPosX, this.explodeImage.startPosY, 128, 128, 0, 0, 128, 128);
  //     this.explodeImage.startPosX += 128;
  //
  //     if (this.explodeImage.startPosX >= 1024 & this.explodeImage.count <= 4) {
  //       this.explodeImage.startPosX = 0;
  //       this.explodeImage.startPosY += 128;
  //       this.explodeImageCount += 1;
  //     }
  //
  //   } else {
  //     this.ctx3.clearRect(0, 0, 128, 128);
  //     return null;
  //   }
  //   this.renderExplosion(this.ctx3);
  //      // window.requestAnimationFrame(this.animateCallback(ctx3).bind(this));
  //   // };
  // }

  // animate(ctx3) {
  //    // window.requestAnimationFrame(this.animateCallback(ctx3).bind(this));
  // }

  // drawSprite() {
  //
  //   this.explodeImage = new Image();
  //   this.explodeImage.src = "./assets/images/explosion_sprite.png";
  //   this.explodeImage.startPosX = 0;
  //   this.explodeImage.startPosY = 0;
  //   if (!this.explodeImage.count) {
  //     this.explodeImage.count = 0;
  //   }
  //   this.explodeImage.onload = () => {
  //     // this.ctx3.clearRect(0, 0, 128, 128);
  //     this.animateCallback(this.ctx3);
  //     };
  //   }

  receiveMouseXY(x, y) {
    if (this.blossoms !== undefined) {
      this.visibleBlossoms.forEach((blossom, idx) => {
        if ((x < blossom[0].x + 100 && x > blossom[0].x) && (y > blossom[0].y + 100 && y < blossom[0].y + 208 ) && blossom[0].x !== 0) {

          if (Word.prototype.isMatch(blossom[0].wordValue)) {
            this.correctChoices += 1;
            this.player.addGems();
            blossom[0].blossomExploded = true;
            this.exploding = true;
            if (idx !== -1) {
              this.visibleBlossoms.splice(idx, 1);
            }
          ;
            // this.visibleBlossoms.push(this.blossoms[idx+3].wordV)
            Word.prototype.renderWordChoice("Decimated");
            debugger
            // blossom[0].explodeBlossom(this.ctx3);
            this.willExplode = true;
            this.explodeBlossoms();
            // this.renderExplosion(blossom[0].x, blossom[0].y, 30, 70)


          } else {
            this.player.removeGems();
          }
        }
      });
    }
  }
}


Game.DIM_X = 1000;
Game.DIM_Y = 500;
Game.NUM_BLOSSOMS = 50;

module.exports = Game;
