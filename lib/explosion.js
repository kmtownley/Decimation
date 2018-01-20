class Explosion {
  constructor(ctx3) {
    this.animateCallback = this.animateCallback.bind(this);
    this.ctx3 = ctx3;
    this.tick = 0;
    this.frame = 0;
  }
  animateCallback(ctx3) {
    debugger
    // return () => {
      // ctx3.clearRect(0, 0, 128, 128);
      debugger
      this.ctx3.drawImage(this.explodeImage, this.explodeImage.startPosX, this.explodeImage.startPosY, 128, 128, 0, 0, 128, 128);

      this.explodeImage.startPosX += 128;

      if (this.explodeImage.startPosX >= 1024 & this.explodeImage.count <= 4) {
        this.explodeImage.startPosX = 0;
        this.explodeImage.startPosY += 128;
        this.explodeImage.count += 1;
      } else if (this.explodeImage.count > 4) {
        window.cancelAnimationFrame(this.animateCallback);
      }
      // window.requestAnimationFrame(this.animateCallback(ctx3).bind(this));
    // };
    window.requestAnimationFrame(this.animateCallback.bind(this));
  }

  animate(ctx3) {
    debugger
    this.animateCallback(ctx3);
    // .bind(this);
    // window.requestAnimationFrame(this.animateCallback(ctx3).bind(this));
  }

  drawSprite(ctx3) {
    debugger
    this.explodeImage = new Image();
    this.explodeImage.src = "./assets/images/explosion_sprite.png";
    this.explodeImage.startPosX = 0;
    this.explodeImage.startPosY = 0;
    this.explodeImage.count = 0;

    // this.explodeImage.onload = () => {
      // ctx3.clearRect(0, 0, 128, 128);
      // this.animate(ctx3);
    // for (var i = 0; i < 40; i++) {
      ctx3.drawImage(this.explodeImage, this.explodeImage.startPosX, this.explodeImage.startPosY, 128, 128, 0, 0, 128, 128);

      this.explodeImage.startPosX += 128;
      ctx3.clearRect(0,0, 128, 128);

      if (this.explodeImage.startPosX >= 1024 & this.explodeImage.count <= 4) {
        this.explodeImage.startPosX = 0;
        this.explodeImage.startPosY += 128;
        this.explodeImage.count += 1;
      }

      // setInterval(this.drawSprite, 20);

    // }
    // this.drawSprite(ctx3);

      // };
  }


}

module.exports = Explosion;
