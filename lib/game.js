const Blossom = require("./blossom");
const Background = require("./background");
const Word = require("./words");
const Player = require("./player");

class Game {
  constructor(ctx, ctx2, ctx3, ctxWords) {
    this.blossoms = [];
    this.visibleBlossoms = [];
    this.numBlossoms = 50;
    this.cancelGame = "";
    this.start = null;
    // this.valid = false;
    // this.selection = null;
    this.draw = this.draw.bind(this);
    this.startAnimation = this.startAnimation.bind(this);
    // this.renderBackground = this. renderBackground.bind(this);
    this.createBlossoms = this.createBlossoms.bind(this);
    this.findVisibleWords = this.findVisibleWords.bind(this);
    this.xDim = 0;
    this.yDim = 0;
    this.ctx3 = ctx3;
    this.ctx2 = ctx2;
    this.ctx = ctx;
    this.visibleWords = [];
    this.player = new Player();
    this.drawnBlossoms = 0;
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

  startAnimation() {
    debugger

    this.toggleStart();
    if (this.start) {
      debugger
      this.draw(this.ctx);
      this.drawSprite(this.ctx3);
      Word.prototype.renderWordChoice(this.visibleWords);
    }
  }


  controlGame() {
    debugger
    let startButton = document.getElementById("start");
    startButton.addEventListener("click", this.startAnimation, false);

    debugger
    let stopButton = document.getElementById("stop").addEventListener("click",   this.gameOver, false);
    // this.startAnimation();
  }
  // resetGame() {
  //   this.blossoms = [];
  //   for (let i = 0; i <= Game.NUM_BLOSSOMS; ++i) {
  //     this.blossoms.push(
  //       this.createBlossoms()
  //     );
  //     Player.gemscore = 0;
  //   }
  //   this.draw();
  // }
  // pauseGame(ctx) {
  //   debugger
  //   this.cancelGame = true;
  //   Blossom.prototype.draw;
  // }

  togglePause() {
    debugger
    if (!this.paused) {
      this.paused = true;
    } else if (this.paused) {
      this.paused= false;
      // this.start(this.ctx, this.ctx3)
    }
  }

  toggleStart() {
    if (!this.start) {
      this.start = true;
    } else if (this.start) {
      this.start = false;
    }
  }

  gameOver() {
    debugger
    let gameOverMessage = document.getElementById("gameOver");
    // let knownFacts = document.querySelector(".known-facts").innerHTML =
    this.stoppedGame = true;
    gameOverMessage.style.display = "inline-block";
  }

  toggleGameScreen() {
    debugger
    if (this.stoppedGame === true) {
      let gameOverMessage = document.getElementById("gameOver");
      gameOverMessage.style.display = "none";
    }
  }

  createBlossoms() {
    return Blossom.randomBlossom(0, Game.DIM_Y, Game.NUM_BLOSSOMS, this.ctx3, this.ctx);
  }

  drawBlossoms(ctx) {
    let i = 0;
    return () => {
      if (i === 10) clearInterval(this.interval);
      if (i === 10) {
        this.gameOver();
      }
      this.findVisibleWords();
      this.blossoms[i].draw(ctx);
      i += 1;
      this.numBlossoms -= 1;
    };
  }

  draw() {
    this.interval = setInterval(this.drawBlossoms(this.ctx).bind(this), 3000);
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
        // console.log("visibleBlossoms:" + this.visibleBlossoms.length);
      }
    });
    this.visibleBlossoms.forEach(blossom => {
      // console.log(visibleBlossoms: this.visibleBlossoms)
      if (!this.visibleWords.includes(blossom.wordValue)) {
        if (this.visibleWords.length > 2) {
          this.visibleWords.splice(0, 1);
        }
        this.visibleWords.push(blossom.wordValue);

        // console.log("visibleWords:" + this.visibleWords);
        Word.prototype.renderWordChoice(this.visibleWords);
      }
    });
    // setInterval(this.findVisibleWords, 3000);
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

  animateCallback(ctx3) {
    return () => {
      ctx3.clearRect(0, 0, 128, 128);
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
      this.visibleBlossoms.forEach((blossom, idx) => {

        if ((x < blossom.x + 100 && x > blossom.x) && (y > blossom.y + 100 && y < blossom.y + 208 ) && blossom.x !== 0) {
          //bl
          if (Word.prototype.isMatch(blossom.wordValue)) {
            this.correctChoices += 1;
            this.player.addGems();
            blossom.blossomExploded = true;
            if (idx !== -1) {
              this.visibleBlossoms.splice(idx, 1);
            }
            console.log(this.blossoms.length)
            blossom.explodeBlossom(this.ctx3);
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
