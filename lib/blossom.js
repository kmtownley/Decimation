BLOSSOM = new Image();
BLOSSOM.src = "./assets/images/whole_blossom.png";
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

    // this.isOutOfBounds = this.isOutOfBounds.bind(this)
  }
  //
  // model() {
  //   this.rot += 0.1 * this.direc;
  //   this.x += this.xVec;
  //   this.yVec += this.gravity;
  //   this.y += this.yVec;
  //   this.bounceIf();
  // }
  //
  // bounceIf() {
  //   if (this.y >= this.bottom || this.y <= this.top) {
  //     this.y = this.bottom;
  //     this.yVec = -1 * this.yVec;
  //   }
  //
  // }




  draw(ctx) {
    let increments = [1, 2];
    let dx = 1.1;
    let dy = 0.9;
    this.blossom = new Image();
    this.blossom.src = './assets/images/whole_blossom.png';
    this.blossom.onload = function() {
      // ctx.drawImage(blossom, 10, 10, 125, 125);
       // ctx.fillRect(0, 0, 1000, 500);
    };
    if (this.blossomExlpoded === true) {
      debugger
      this.blossom = ctx.createImageData(128, 128);
        for (let i = this.blossom.data.length; --i >= 0; )
          this.blossom.data[i] = 0;
          ctx.putImageData(this.blossom, this.x, this.y);
      }

    // ctx.onclick = () => {
    //
    //   // let mouseX = e.clientX;
    //   // let mouseY = e.clientY;
    //   console.log("yay");
    // };
    // return this.blossom;
    ctx.drawImage(this.blossom, this.x, this.y, 125, 125 );

    const animateCallback = () => {
      if (this.explodedBlossom !== true) {
        if (this.x <= Math.random() * 320 + 3  && this.y < Math.random() * 600 + 4) {
          this.x += dx;
          this.y += dy;
          debugger
          this.renderBlossom(ctx);
        } else if (this.x < 400) {
          debugger
           this.x += dx;
           this.y -= dy;
           this.renderBlossom(ctx);
         } else if (this.x < 730) {
           debugger
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
     debugger
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

     // return !(
     // (this.x + this.height) < otherBlossom.y ||
     //    (this.y > (otherBlossom.y + otherBlossom.height)) ||
     //   ((this.x + this.width) < otherBlossom.x) ||
     //   (this.x > (otherBlosom.x + otherBlossom.width))
     // );
   }

   moveRandom(maxY) {
     let dy = (Math.random() * 2) - 1;
     this.y = Math.abs((this.y + (dy * 25) * 0.1) % 300);
   }

   messageUser() {

     console.log("You clicked me");

   }

   explodeBlossom() {

     let explosion = new Explosion(this.x, this.y, this.ctx3);
     explosion.drawSprite();

     // let currentFrame = 0;  // the current frame to draw
     // let counter = 0;
     // let exlpodeImage = new Image();
     // let framesPerRow;
     // this.explodeImage.onload = () => {
     //   framesPerRow = Math.floor(explodeImage.width / 128);
     // };
     //
     // explodImage.src = "../assets/images/explosion_sprite.png";
   }

   // updateSprite() {
   //   if (counter === (frameSpeed - 1))
   //    currentFrame = (currentFrame + 1) % 1020;
   //
   //  // update the counter
   //  counter = (counter + 1) % frameSpeed;
   //  }// keep track of frame rate
   // }
  // draw(ctx) {
  //
  //   let dx = 1.1;
  //   // let dy;
  //   if (this.dy === null) {
  //     this.dy = (Math.random() * 4) - 1;
  //   }
  //
  //   this.blossom = new Image();
  //   this.blossom.src = './assets/images/whole_blossom.png';
  //   this.blossom.onload = function() {
  //     // ctx.drawImage(blossom, 10, 10, 125, 125);
  //      ctx.fillRect(0, 0, 1000, 500);
  //   };
  //   // return this.blossom;
  //   ctx.drawImage(this.blossom, this.x, this.y, 125, 125 );
  //   const animateCallback = () => {
  //     for (let i = 1; i < 20; i++) {
  //       if (i === 1 && (this.y <= 150 && this.y > 0)) {
  //         this.x += dx;
  //         this.y += this.dy;
  //         this.draw(ctx);
  //       } else if ( i === 1 && (this.y >150 && this.y < 300)) {
  //         this.x +=dx;
  //         this.y -= this.dy;
  //         this.draw(ctx);
  //       } else if (this.isOutOfBounds(this.y) && this.x < 1000) {
  //
  //         this.reverseDy(this.dy);
  //         this.x += dx;
  //         this.y += this.dy;
  //         this.draw(ctx);
  //       } else if (this.x < 1000) {
  //
  //         this.x += dx;
  //         this.y += this.dy;
  //         this.draw(ctx);
  //       } else {
  //         this.x = 1;
  //         this.y = Math.random() * 70 + 10;
  //         this.draw(ctx);
  //       }
  //
  //        }
  //     };
  //     window.requestAnimationFrame(animateCallback);
  //   }


   // reverseDy(dy) {
   //   return (
   //   this.dy = dy * -1
   //   );
   // }
   //
   // isOutOfBounds(y) {
   //   if (y > 300 || y < 1 ) {
   //     return true;
   //   } else {
   //     return false;
   //   }
   // }

   // moveUp() {
   //   if {this.starty < }
   // }
   removeBlossom() {
     debugger
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
