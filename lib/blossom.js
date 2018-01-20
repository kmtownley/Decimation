// BLOSSOM = new Image();
// BLOSSOM.src = "./assets/images/whole_blossom.png";
const Word = require("./words");
const Explosion = require("./explosion");


class Blossom {
  constructor(x, y, numBlosssoms, ctx3, ctx) {
    this.x = x;
    this.y = Math.random() * 400 + 6;
    this.drawnBlossoms = [];
    this.visibleBlossoms = [];
    this.height = 125;
    this.width = 125;
    this.ctx3 = ctx3;
    this.ctx = ctx;
    this.blossomExploded = false;
    this.renderBlossom = this.renderBlossom.bind(this);
    this.decimalValue = (new Word()).decimalValue;
  }

  draw(ctx) {
    let increments = [1, 2];
    let dx = 1.1;
    let dy = 0.9;
    this.blossom = new Image();
    this.blossom.src = './assets/images/whole_blossom.png';
    this.blossom.onload = function() {
    };
    if (this.blossomExlpoded === true) {

      this.blossom = ctx.createImageData(128, 128);
        for (let i = this.blossom.data.length; --i >= 0; )
          this.blossom.data[i] = 0;
          ctx.putImageData(this.blossom, this.x, this.y);
      }

    ctx.drawImage(this.blossom, this.x, this.y, 125, 125 );
    ctx.font="24px Varela Round";
    ctx.fillText(this.decimalValue, this.x + 37, this.y + 73);


    const animateCallback = () => {
      if (this.explodedBlossom !== true) {
        if (this.x <= Math.random() * 320 + 3  && this.y < Math.random() * 600 + 4) {
          this.x += dx;
          this.y += dy;
          this.renderBlossom(ctx);
        } else if (this.x < 400) {
           this.x += dx;
           this.y -= dy;
           this.renderBlossom(ctx);
         } else if (this.x < 730) {
           this.x += dx;
           this.y += dy;
           this.renderBlossom(ctx);
         } else if (this.x <= 999) {
           this.x += dx;
           this.y -= dy;
           this.renderBlossom(ctx);
         } else {
           return null;
         }
       }
    };
    window.requestAnimationFrame(animateCallback);
   }

   renderBlossom() {

     if (this.blossomExploded === true) {
       this.blossom = this.ctx.createImageData(128, 128);
         for (let i = this.blossom.data.length; --i >= 0; )
           this.blossom.data[i] = 0;
           // this.ctx.putImageData(this.blossom, this.x, this.y);
       } else {
       this.draw(this.ctx);
     }
   }
   // findVisibleBlossoms() {
   //
   //
   //   this.drawnBlossoms.forEach(blossom => {
   //     if (blossom.x > 0) {
   //       this.visibleBlossoms.push(blossom);
   //     }
   //   });
   //   return this.visibleBlossoms;
   // }

   collisionDetected(blossom, nextBlossom) {
     this.findVisibleBlossoms();
       if (this.visibleBlossoms !== undefined) {
       this.visibleBlossoms.forEach((blossom, idx) => {
         let nextBlossom = this.vissibleBlossoms[idx + 1];
         if (blossom.x > nextBlossom.x) {
           return true;
         }
       });
     }
   }

   moveRandom(maxY) {
     let dy = (Math.random() * 2) - 1;
     this.y = Math.abs((this.y + (dy * 25) * 0.1) % 300);
   }

   explodeBlossom() {
     let explosion = new Explosion(this.x, this.y, this.ctx3);
     explosion.drawSprite();
   }



   removeBlossom() {

     delete this;
   }

}

Blossom.randomBlossom = (maxX, maxY, numBlossoms, ctx3, ctx) => {
  let blossom = new Image();
  blossom.src = "./assets/images/whole_blossom.png";
  return new Blossom(
    maxX * Math.random(),
    maxY * Math.random(),
    numBlossoms += 1,
    ctx3,
    ctx
  );
};


module.exports = Blossom;
