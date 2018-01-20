BLOSSOM = new Image();
BLOSSOM.src = "./assets/images/whole_blossom.png";
const Explosion = require("./explosion.js");


class Blossom {
  constructor(x, y, ctx, ctx3) {
    this.x = 0;
    this.y = Math.random() * 400 + 6;
    this.drawnBlossoms = [];
    this.visibleBlossoms = [];
    this.height = 125;
    this.width = 125;
    this.increments = [1, 2];
    this.dx = 1.1;
    this.dy = 0.9;
    this.fps = 30;
    this.now = 0;
    this.then = Date.now();
    this.interval = 1000/this.fps;
    this.delta = 0;
    this.draw = this.draw.bind(this);
    this.ctx = ctx;
    this.ctx3 = ctx3;

  }

  draw() {
    this.ctx;

    // let increments = [1, 2];
    // let dx = 1.1;
    // let dy = 0.9;

    requestAnimationFrame(this.draw);
    this.now = Date.now();
    this.delta = this.now - this.then;

    if (this.delta > this.interval) {


      this.then = this.now - (this.delta % this.interval);

      // ... Code for Drawing the Frame ...
      this.blossom = new Image();
      this.blossom.src = './assets/images/whole_blossom.png';
      // this.blossom.onload = function() {
      //   debugger
      //   this.ctx2.fillRect(0, 0, 1000, 500);
      // };
      // this.ctx.fillRect(this.x, this.y, 125, 125);
      this.ctx.drawImage(this.blossom, this.x, this.y, 125, 125 );

      // const animateCallback = () => {
      if (this.x <= Math.random() * 320 + 3  && this.y < Math.random() * 600 + 4) {
        this.x += this.dx;
        this.y += this.dy;
        this.draw(this.ctx2);
      } else if (this.x < 450) {
        this.x += this.dx;
        this.y -= this.dy;
        this.draw(this.ctx2);
      } else if (this.x < 730) {
        this.x += this.dx;
        this.y += this.dy;
        this.draw(this.ctx2);
      } else if (this.x <= 999) {
        this.x += this.dx;
        this.y -= this.dy;
        this.draw(this.ctx2);
      } else {
        return null;
      }
    }
  }
  // this.draw();


    // }
    // window.requestAnimationFrame(animateCallback);



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

   messageUser() {

     console.log("You clicked me");

   }

   explodeBlossom(ctx3) {
     debugger

     Explosion.prototype.drawSprite(this.ctx3);
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
  //   let this.dx = 1.1;
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






}

Blossom.randomBlossom = (maxX, maxY, ctx) => {
  // debugger;
  let blossom = new Image(ctx);
  blossom.src = "./assets/images/whole_blossom.png";

  // debugger
  return new Blossom(
    maxX * Math.random(),
    maxY * Math.random(),
    // numBlossoms += 1,
    ctx

  );
};


module.exports = Blossom;
