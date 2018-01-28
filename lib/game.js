const Blossom = require("./blossom");
const Background = require("./background");
const Word = require("./words");
const Player = require("./player");
const Explosion = require("./explosion");

class Game {
  constructor(ctx, ctx2, ctx3, ctxWords) {
    this.blossoms = [];
    this.visibleBlossoms = [];
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
    this.explodingBlossoms = 0;
    this.isPaused = false;
    this.blossomStack;
    this.blossomIdx = 0 ;
    this.pausedGame = document.getElementById("pausedGame");
    this.gameOver = this.gameOver.bind(this);
    this.gameStopped = false;
    this.audio = document.getElementById("player");
    this.mute = document.getElementById("mute");
    this.explosionSound = document.getElementById("explosion");
    this.errorSound = document.getElementById("wrong");
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
    if (!this.isPaused) {
      this.ctx3.clearRect(0, 0, 128, 128);
      if (this.initialExplode === true) {
        this.explosionSound.play();
        this.renderExplosion(this.ctx3, 0, -10, 120, 130);
      }
      if (this.exploding === true) {
        this.blossoms.forEach((blossom, idx) => {
          if (blossom.blossomExploded === true) {
          this.renderExplosion(this.ctx3, blossom.x, blossom.y, 30, 70);
          setTimeout(() => blossom.blossomExploded = false, 800);
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
    }
  }


  controlGame() {
    let startButton = document.getElementById("start");
    startButton.addEventListener("click", () => {
      this.toggleStart();}, false);
    let stopButton = document.getElementById("stop").addEventListener("click",   this.gameOver, false);
    let pauseButton = document.getElementById("pause"); pauseButton.addEventListener("click", () => {this.togglePause();}, false);
    this.mute.addEventListener("click", () => {this.toggleMute();});
  }

  toggleMute() {
    if (this.audio.paused) {
      this.audio.volume = 0.4
      this.audio.play();
    } else {
      this.audio.pause();
    }
  }
  toggleStart() {
    if (!this.start) {
      this.start = true;
      this.isPaused = false;
      this.willExplode = true;
      this.loadBlossoms();
      this.blossomStack = setInterval(() => {
      this.visibleBlossoms.push(this.blossoms.slice(this.blossomIdx, this.blossomIdx + 1)[0]);
      this.blossomIdx += 1;

    }, 3000);
      setInterval(() => this.findVisibleWords, 3000);
    }
      this.startAnimation();
  }

  togglePause() {
    this.isPaused = !this.isPaused;
    if (this.isPaused && !this.gameStopped) {
      clearInterval(this.blossomStack);
      this.start = false;
      this.pausedGame.style.display = "inline-block";
    } else if (!this.gameStopped){
      this.toggleStart();
      this.pausedGame.style.display = "none";
    }
  }

  gameOver() {
    this.pausedGame.style.display = "none";
    // let wordContainer = document.querySelector("words").innerHTML = "Well Done";
    // wordContainer.style.display = "inline-block";
    let gameOverMessage = document.getElementById("gameOver");
    this.gameStopped = true;
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
        if (idx !== -1) {
          this.visibleBlossoms.splice(idx, 1);
        }
      }
    });
  }

  renderBackground(ctx2) {
    if (!this.isPaused) {
    new Background(0, 500).scrollImage(ctx2);
    }
  }

  findVisibleWords() {
    this.blossoms.forEach(blossom => {
      if (blossom.x > 0 && blossom.x < 980) {
      }
    });
    this.visibleBlossoms.forEach(blossom => {
      if (!this.visibleWords.includes(blossom.wordValue)) {
        if (this.visibleWords.length > 2) {
          this.visibleWords.splice(0, 1);
        }
        this.visibleWords.push(blossom.wordValue);
      }
    });
  }

  renderExplosion(ctx3, xPos, yPos, sizeX, sizeY) {
    this.blossoms.forEach(blossom => {
       blossom.explosion.explodeBlossom(ctx3, xPos, yPos, sizeX, sizeY);
    });
  }

  receiveMouseXY(x, y) {
    if (this.blossoms !== undefined) {
      this.visibleBlossoms.forEach(blossom => {
        if ((x < blossom.x + 100 && x > blossom.x) && (y > blossom.y + 100 && y < blossom.y + 208 ) && blossom.x !== 0) {

          if (Word.prototype.isMatch(blossom.wordValue)) {
            this.correctChoices += 1;
            this.player.addGems();
            Word.prototype.renderWordChoice("Decimated");
            blossom.blossomExploded = true;
            this.explodingBlossoms += 1;
            blossom.explosion.startPosX = 0;
            blossom.explosion.startPosY = 0;
            blossom.explosion.startCount = 0;
            this.exploding = true;
            this.explosionSound.play();
            setTimeout(() => {
              this.explodingBlossoms -= 1;
              if (this.explodingBlossoms === 0) {
                this.exploding = false;
              }
            }, 1200);

          } else {
            this.player.removeGems();
            this.errorSound.play();
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
