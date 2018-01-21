const Blossom = require("./blossom");
const Background = require("./background");
const Word = require("./words");
const Player = require("./player");

class Game {
  constructor(ctx, ctx2, ctx3, ctxWords) {
    this.blossoms = [];
    this.visibleBlossoms = [];
    // this.valid = false;
    // this.selection = null;
    this.draw = this.draw.bind(this);
    // this.renderBackground = this. renderBackground.bind(this);
    this.createBlossoms = this.createBlossoms.bind(this);
    this.findVisibleWords = this.findVisibleWords.bind(this);
    this.xDim = 0;
    this.yDim = 0;
    this.ctx3 = ctx3;
    this.ctx = ctx;
    this.visibleWords = [];
    this.player = new Player();
    this.paused = false;
    //
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
    if (!this.paused) {
    this.draw(ctx);
    this.drawSprite(ctx3);
    // this.renderBackground(ctx2);
    // let word = new Word();
    // word.findWord();
    // let player = new Player();
    // this.findVisibleWords();
    Word.prototype.renderWordChoice(this.visibleWords);
    }
  }

  togglePause() {
    debugger
    if (!this.paused) {
      this.paused = true;
      document.getElementById("")
    } else if (this.paused) {
      this.paused= false;
      // this.start(this.ctx, this.ctx3)
    }
  }

  // pauseGame() {
  //   document.getElementById("pause").innerHTMLE = <i class="fa fa-pause" aria-hidden="true"></i>;
  //
  // }
//   var startTime, endTime;
//
//   start() {
//   let startTime = new Date();
//   };
//
//   end() {
//   endTime = new Date();
//   let timeDiff = endTime - startTime; //in ms
//   // strip the ms
//   timeDiff /= 1000;
//
//   // get seconds
//   var seconds = Math.round(timeDiff);
//   console.log(seconds + " seconds");
// }


  createBlossoms() {
    return Blossom.randomBlossom(0, Game.DIM_Y, Game.NUM_BLOSSOMS, this.ctx3, this.ctx);
  }

  drawBlossoms(ctx) {
    let i = 0;
    return () => {
      if (i == 40) clearInterval(this.interval);
      this.findVisibleWords();
      this.blossoms[i].draw(ctx);
      i += 1;
    };
  }

  draw() {
    this.interval = setInterval(this.drawBlossoms(this.ctx).bind(this), 3000);
  }

  renderBackground(ctx2) {
    // debugger
    if (!this.paused) {
    new Background(0, 500).scrollImage(ctx2);
    } else {
      document.getElementById("canvasBackground").innerHTML = "PAUSED";
    }
  }

  findVisibleWords() {

    this.blossoms.forEach(blossom => {
      if (blossom.x > 0 && blossom.x < 980) {
        this.visibleBlossoms.push(blossom);
        if (this.visibleBlossoms.length > 7) {
          this.visibleBlossoms.splice(0,1);
        }
        console.log("visibleBlossoms:" + this.visibleBlossoms.length);
      }
    });
    this.visibleBlossoms.forEach(blossom => {
      // console.log(visibleBlossoms: this.visibleBlossoms)
      if (!this.visibleWords.includes(blossom.wordValue)) {
        if (this.visibleWords.length > 2) {
          this.visibleWords.splice(0, 1);
        }
        this.visibleWords.push(blossom.wordValue);

        console.log("visibleWords:" + this.visibleWords);
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
            // blossom.removeBlossom();
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
