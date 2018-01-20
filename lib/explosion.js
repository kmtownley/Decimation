class Explosion {
  constructor(x, y, ctx3) {
    this.animateCallback = this.animateCallback.bind(this);

    this.ctx3 = ctx3;
    this.start = Date.now();
    this.frame = 0;
    this.blossomX = x;
    this.blossomY = y;
  }


  animateCallback(ctx3) {

    return () => {
      // this.ctx3.clearRect(this.blossomX, this.blossomY, 30, 70);
      // ctx3.drawImage(this.explodeImage, this.explodeImage.startPos, 128, 128, 128, 0, 0, 128, 128);
      //
      // this.explodeImage.startPos += 128;
      // window.requestAnimationFrame(this.animateCallback(ctx3).bind(this));
      this.ctx3.drawImage(this.explodeImage, this.explodeImage.startPosX, this.explodeImage.startPosY, 128, 128, this.blossomX / 9.2, this.blossomY / 5.9, 30, 70);
      this.explodeImage.startPosX += 128;

      if (this.explodeImage.startPosX >= 1024 & this.explodeImage.count <= 4) {
        this.explodeImage.startPosX = 0;
        this.explodeImage.startPosY += 128;
        this.explodeImage.count += 1;

      }

      if (Date.now() - this.start < 8000) {
      window.requestAnimationFrame(this.animateCallback(this.ctx3).bind(this));
      }
    };
  }

  animate(ctx3) {

    window.requestAnimationFrame(this.animateCallback(this.ctx3).bind(this));
  }

  drawSprite() {
    this.explodeImage = new Image();
    this.explodeImage.src = "./assets/images/explosion_sprite.png";
    this.explodeImage.startPosX = 0;
    this.explodeImage.startPosY = 0;
    this.explodeImage.count = 0;

    // this.ctx3.clearRect(this.blossomX / 8.8, this.blossomY / 5.7, 30, 70);
    this.explodeImage.onload = () => {
      this.animate(this.ctx3);


      };

    }
  // animateCallback(ctx3) {
  //
  //   // return () => {
  //     // ctx3.clearRect(0, 0, 128, 128);
  //
  //     this.ctx3.drawImage(this.explodeImage, this.explodeImage.startPosX, this.explodeImage.startPosY, 128, 128, 0, 0, 128, 128);
  //
  //     this.explodeImage.startPosX += 128;
  //
  //     if (this.explodeImage.startPosX >= 1024 && this.explodeImage.count <= 4) {
  //       this.explodeImage.startPosX = 0;
  //       this.explodeImage.startPosY += 128;
  //       this.explodeImage.count += 1;
  //     } else if (this.explodeImage.count > 4) {
  //       window.cancelAnimationFrame(request);
  //     }
  //     // window.requestAnimationFrame(this.animateCallback(ctx3).bind(this));
  //   // };
  //   let request = window.requestAnimationFrame(this.animateCallback.bind(this));
  // }
  //
  // animate(ctx3) {
  //
  //   this.animateCallback(ctx3);
  //   // .bind(this);
  //   // window.requestAnimationFrame(this.animateCallback(ctx3).bind(this));
  // }
  //
  // drawSprite(ctx3) {
  //
  //   this.explodeImage = new Image();
  //   this.explodeImage.src = "./assets/images/explosion_sprite.png";
  //   this.explodeImage.startPosX = 0;
  //   this.explodeImage.startPosY = 0;
  //   this.explodeImage.count = 0;
  //
  //   // this.explodeImage.onload = () => {
  //     // ctx3.clearRect(0, 0, 128, 128);
  //     // this.animate(ctx3);
  //   // for (var i = 0; i < 40; i++) {
  //     ctx3.drawImage(this.explodeImage, this.explodeImage.startPosX, this.explodeImage.startPosY, 128, 128, 0, 0, 128, 128);
  //
  //     this.explodeImage.startPosX += 128;
  //     ctx3.clearRect(0,0, 128, 128);
  //
  //     if (this.explodeImage.startPosX >= 1024 & this.explodeImage.count <= 4) {
  //       this.explodeImage.startPosX = 0;
  //       this.explodeImage.startPosY += 128;
  //       this.explodeImage.count += 1;
  //     }
  //
  //     // setInterval(this.drawSprite, 20);
  //
  //   // }
  //   // this.drawSprite(ctx3);
  //
  //     // };
  // }


}

module.exports = Explosion;
