BLOSSOM = new Image();
BLOSSOM.src = "./assets/images/whole_blossom.png";

DEFAULTS = {
  BLOSSOM: BLOSSOM,
  POSX: 10,
  POSY: 10,
  WIDTH: 125,
  HEIGHT: 125,
};



class Blossom {
  constructor(x, y) {
    this.x = x;
    this.y = Math.random() * 400 + 6;

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
       ctx.fillRect(0, 0, 1000, 500);
    };
    // return this.blossom;
    ctx.drawImage(this.blossom, this.x, this.y, 125, 125 );
    const animateCallback = () => {
    if (this.x <= Math.random() * 320 + 3  && this.y < Math.random() * 600 + 4) {
      this.x += dx;
      this.y += dy;
      this.draw(ctx);
    } else if (this.x < 450) {
       this.x += dx;
       this.y -= dy;
       this.draw(ctx);
     } else if (this.x < 730) {
       this.x += dx;
       this.y += dy;
       this.draw(ctx);
     } else if (this.x <= 999) {
       this.x += dx;
       this.y -= dy;
       this.draw(ctx);
     } else {
       null
     }
    };
    window.requestAnimationFrame(animateCallback);

   }

   moveRandom(maxY) {
     let dy = (Math.random() * 2) - 1;
     this.y = Math.abs((this.y + (dy * 25) * 0.1) % 300);
   }

  // draw(ctx) {
  //   debugger
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
  //         debugger
  //         this.reverseDy(this.dy);
  //         this.x += dx;
  //         this.y += this.dy;
  //         this.draw(ctx);
  //       } else if (this.x < 1000) {
  //         debugger
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



}

Blossom.randomBlossom = (maxX, maxY, numBlossoms) => {

  let blossom = new Image();
  blossom.src = "./assets/images/whole_blossom.png";

  return new Blossom(
    maxX * Math.random(),
    maxY * Math.random()
  );
};


module.exports = Blossom;
