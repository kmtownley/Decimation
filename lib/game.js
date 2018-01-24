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
    this.start = false;
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
    this.exploding = false;
    this.round = 0;
    this.explosion = new Explosion(this.ctx3);
    this.initialExplode = true;
    this.alreadyStarted = false;
    this.startCount = 0;

  }


  loadBlossoms() {
    if (this.start === true) {
      for (let i = 0; i <= Game.NUM_BLOSSOMS; ++i) {
        this.blossoms.push(
          this.createBlossoms()
        );
      }
    }
  }

  beginBackground() {
    this.renderBackground(this.ctx2);
  }

  startAnimation() {
    // if (this.startCount === 1) {
      this.ctx3.clearRect(0, 0, 128, 128);
      if (this.initialExplode === true) {
        this.renderExplosion(this.ctx3, 0, -10, 120, 130);
      }
      if (this.exploding === true) {
        this.blossoms.forEach((blossom, idx) => {
          if (blossom.blossomExploded === true) {
          this.renderExplosion(this.ctx3, blossom.x, blossom.y, 30, 70);
          setTimeout(() => blossom.blossomExploded = false, 2400);
          }
        });
      }
      setTimeout(() => this.initialExplode = false, 2000);
      this.explodeBlossoms();
      let now = Date.now();
      this.delta = now - this.then;
      if (this.visibleBlossoms && this.start === true) {
        this.drawVisibleBlossoms(this.ctx);
      }

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

    // } else {
    //   return null;
    // }
  }


  controlGame() {
    let startButton = document.getElementById("start");
    startButton.addEventListener("click", () => {
      this.toggleStart()}, false);
    let stopButton = document.getElementById("stop").addEventListener("click",   this.gameOver, false);
  }

  toggleStart() {
    if (!this.start) {
      this.start = true;
      this.willExplode = true;
      let idx = 0;
      this.loadBlossoms();
      setInterval(() => {
      this.visibleBlossoms.push(this.blossoms.slice(idx, idx + 1)[0]);
      idx += 1;


    }, 3000);
      setInterval(() => this.findVisibleWords, 3000);
    }
      this.startAnimation();
    // this.startAnimation();
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

      if (!blossom.blossomExploded) {
      blossom.draw(ctx);
      if (blossom.x > 980) {
        idxDeleted = idx;
      }
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
    this.drawnBlossoms += 1;
  }

  explodeBlossoms() {
    this.visibleBlossoms.forEach((blossom, idx) => {
      if (blossom.blossomExploded === true) {
        // blossom.explodeBlossom(this.ctx3);
        // console.log(blossom)

        if (idx !== -1) {
          this.visibleBlossoms.splice(idx, 1);
        }

        // blossom.blossomExploded === true;
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
        // this.visibleBlossoms.push(blossom);

        // if (this.visibleBlossoms.length > 7) {
        //   this.visibleBlossoms.splice(0,1);
        // }
      }
    });
    this.visibleBlossoms.forEach(blossom => {
      if (!this.visibleWords.includes(blossom.wordValue)) {
        if (this.visibleWords.length > 2) {
          this.visibleWords.splice(0, 1);
        }
        this.visibleWords.push(blossom.wordValue);

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

  renderExplosion(ctx3, xPos, yPos, sizeX, sizeY) {
    this.explosion.explodeBlossom(ctx3, xPos, yPos, sizeX, sizeY);
    // setTimeout(() => this.exploding = false, 2000);
  }

  receiveMouseXY(x, y) {
    if (this.blossoms !== undefined) {
      this.visibleBlossoms.forEach(blossom => {
        if ((x < blossom.x + 100 && x > blossom.x) && (y > blossom.y + 100 && y < blossom.y + 208 ) && blossom.x !== 0) {

          if (Word.prototype.isMatch(blossom.wordValue)) {
            this.correctChoices += 1;
            this.player.addGems();

            Word.prototype.renderWordChoice("Decimated");
            // blossom.explodeBlossom(this.ctx3);

            // this.willExplode = true;

            blossom.blossomExploded = true;
            this.explosion.startPosX = 0;
            this.explosion.startPosY = 0;
            this.explosion.startCount = 0;
            this.exploding = true;
            setTimeout(() => this.exploding = false, 3000);

            // this.explodeBlossoms();
            // this.renderExplosion(this.ctx3, blossom.x, blossom.y, 30, 70);

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
