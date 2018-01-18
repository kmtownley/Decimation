const Blossom = require("./blossom");

class Game {
  constructor() {
    this.blossoms = [];
    this.valid = false;
    this.selection = null;
    this.draw = this.draw.bind(this);
    this.xDim = 0;
    this.yDim = 0;

    // for (let i = 0; i < Game.NUM_BLOSSOMS; ++i) {
    // blossoms.push(
    //   Blossom.randomBlossom(Game.DIM_X, Game.DIM_Y, Game.NUM_BLOSSOMS)
    // );
  // }

  }

  // draw(ctx) {
  //   let newLeaf = new Leaf();
  //   newLeaf.draw(ctx);
  //   this.leaves.push(newLeaf);
  //
  //   const animationCallback = () => {
  //
  //   };
  // }

  // start(canvasEL) {
  //   const ctx = canvasEl.getContext("2d");
  //
  //   const animate = () =>  {
  //     this.moveBlossoms();
  //     this.render(ctx);
  //
  //     requestAnimationFrame(animate);
  //   };
  //
  //   animate();
  // }

  // render(ctx) {
  //   ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
  //
  //   blossoms.forEach(function (blossom) {
  //   blossom.render(ctx);
  //   });
  // }

  draw(ctx) {
  debugger
  // let blossom = new Image();
  let dx = 0.5;
  let dy = 0.5;

 // ctx.clearRect(0,0, Game.DIM_X, Game.DIM_Y);
   // ctx.beginPath();
   // ctx.arc(x, y, 10, 0, Math.PI*2);
   // ctx.fillStyle = "#ffffff";
   // blossom.onload = () => {
   //   ctx.fillRect(0, 0, 1000, 500);
   //   ctx.drawImage(blossom, this.xDim, this.yDim, 125, 125);
   // };
   // blossom.src = './assets/images/whole_blossom.png';
   let  b = new Blossom(0, 0).draw(ctx, 0, 0);

   ctx.drawImage(b, this.xDim, this.yDim, 125, 125);
   const animateCallback = () => {

   if (this.xDim < 500  && this.yDim < 500) {
     this.xDim += dx;
     this.yDim += dy;
     this.draw(ctx);
     } else {
      this.xDim = 1;
      this.yDim = 1;
      this.draw(ctx);
     // window.requestAnimationFrame(animateCallback);
     }
   };
   window.requestAnimationFrame(animateCallback);

  }
}

    // move(ctx) {
    //   let x = 10;
    //   let y = 10;
    //   ctx.beginPath();
    //   ctx.arc(x, y, 10, 0, Math.PI*2);
    //   ctx.fillStyle = "#0095DD";
    //   ctx.fill();
    //   ctx.closePath();
    //   x += 2;
    //   y += 2;
    //   setInterval(this.move, 10);
    // }
   // moveBlossoms() {
   //   this.blossoms.forEach(blossom => {
   //     Blossom.moveBlossom(Game.DIM_X, Game.DIM_Y);
   //   });
   // }
   // animate() {
   //  var cx=50;
   //  var cy=50;
   //  var radius=40;
   //
   //  // a variable to hold the current degree of rotation
   //  var degreeAngle=0;
   //  requestAnimationFrame(animate);
   //
   //  degreeAngle+=1;
   //   var radianAngle=degreeAngle*Math.PI/180;
   //   var x=cx+radius*Math.cos(radianAngle);
   //   var y=cy+radius*Math.sin(radianAngle);
   //
   //   // clear the canvas
   //   // and draw the image at its new position
   //   ctx.clearRect(0,0,canvas.width,canvas.height);
   //   ctx.drawImage(img,x,y);
   //
   // }



  // draw(ctx) {
  //
  //   ctx.fillStyle = "#ffffff";
  //   ctx.fillRect(0, 0, Game.DIM_X, Game.DIM_Y);
  //
  //   this.leaves.forEach((leaf) => {
  //     leaf.draw(ctx);
  //   });
  // }




Game.DIM_X = 1000;
Game.DIM_Y = 500;
Game.NUM_BLOSSOMS = 4;


module.exports = Game;
