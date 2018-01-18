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
  constructor(ctx) {
    debugger
    // options.blossom = (new Image().src = "./assets/images/whole_blossom.png");
    // options.height = DEFAULTS.HEIGHT;
    // options.width = DEFAULTS.WIDTH;
    // options.posx = options.posx || DEFAULTS.POSX;
    // options.posy = options.posy || DEFAULTS.POSY;
    // this.randomBlossom(ctx);
  }

  // randomBlossom(maxX, maxY, numCircles) {
  //   debugger
  //   let blossom = new Image();
  //   blossom.src = "./assets/images/whole_blossom.png";
  //   return new Blossom(
  //     blossom.onload = () => {
  //       // ctx.fillRect(0, 0, 1000, 500);
  //       ctx.drawImage(blossom, maxX, maxY, 125, 125);
  //     }
  //   );
  //   // return blossom;
  //
  //   };


  draw(ctx, x, y) {
    this.blossom = new Image();
    this.blossom.src = './assets/images/whole_blossom.png';
    this.blossom.onload = function() {
      // ctx.drawImage(blossom, 10, 10, 125, 125);
       ctx.fillRect(0, 0, 1000, 500);

    };
    return this.blossom;
  }


}

module.exports = Blossom;
