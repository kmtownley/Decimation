BLOSSOM = new Image();
BLOSSOM.src = "./assets/images/whole_blossom.png";


class Blossom {
  constructor(ctx) {
    debugger
  }


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
