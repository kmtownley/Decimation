class Background {


  draw(ctx) {
    debugger
    this.background = new Image();
    this.background.src = './assets/images/footer_image_tower.png';
    this.background.onload = function() {
      // ctx.drawImage(blossom, 10, 10, 125, 125);
       ctx.fillRect(0, 0, 1000, 500);

    };
    return this.background;
  }
}


module.exports = Background;
