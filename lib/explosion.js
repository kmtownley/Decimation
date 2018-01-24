class Explosion {
  constructor(ctx3, displayPosX, displayPosY) {

    this.explodeBlossom = this.explodeBlossom.bind(this);

    this.ctx3 = ctx3;
    this.start = Date.now();
    this.frame = 0;
    this.diplayPosX = displayPosX || null;
    this.displayPoxY = displayPosY || null;
    // this.blossomX = x;
    // this.blossomY = y;
    this.exploded = true;
    this.startPosX = 0;
    this.startPosY = 0;
    this.startCount = 0;
    this.explodeImage = new Image();
    this.explodeImage.src = "./assets/images/explosion_sprite.png";
  }


  explodeBlossom(ctx3, blossomX, blossomY, length, width) {
    // if (this.startPosX >= 1040 && this.startPosy >= 640) {
    //   this.startPosX = 0;
    //   thi.startPosY = 0;
    //
    // }
    // if (this.displayPosX === null)
    // this..startPosX = 0;
    // this.explodeImage.startPosY = 0;

    // return () => {
      // this.ctx3.clearRect(this.blossomX, this.blossomY, 30, 70);
      // ctx3.drawImage(this.explodeImage, this.explodeImage.startPos, 128, 128, 128, 0, 0, 128, 128);
      //
      // this.explodeImage.startPos += 128;
      // this.ctx3.clearRect(0, 0, 1000, 500);
      // window.requestAnimationFrame(this.animateCallback(ctx3).bind(this));
        if (this.exploded === true) {
          // this.ctx3.rect(20,20,150,100);
          // this.ctx3.stroke();
          // this.ctx3.lineWidth="4";
          // this.ctx3.strokeStyle="green";
          // this.ctx3.clearRect(0,0, 1000, 500);
          ctx3.drawImage(this.explodeImage, this.startPosX, this.startPosY, 128, 128, blossomX / 9.2, blossomY/ 5.9, length, width);
          // this.ctx3.fillStyle = 'green';
          // this.ctx3.fillRect(0, 0, 128, 128)

          this.startPosX += 128;

          if (this.startPosX >= 1024 & this.startCount <= 4) {
            
            this.startPosX = 0;
            this.startPosY += 128;
            this.startCount += 1;


          }
        }

    }
      // if (Date.now() - this.start < 8000) {
        // this.ctx3.clearRect(this.explodeImage.startPosX, this.explodeImage.startPosY, 0, 1000, 500);
        // window.requestAnimationFrame(this.animateCallback(this.ctx3).bind(this));
      // }
    // };
  // animate(ctx3) {
  //   window.requestAnimationFrame(this.animateCallback(this.ctx3).bind(this));

  // drawSprite() {
  //   this.explodeImage = new Image();
  //   this.explodeImage.src = "./assets/images/explosion_sprite.png";
  //   this.explodeImage.startPosX = 0;
  //   this.explodeImage.startPosY = 0;
  //   this.explodeImage.count = 0;

    // this.ctx3.clearRect(this.blossomX / 8.8, this.blossomY / 5.7, 30, 70);
    // this.explodeImage.onload = () => {
    //   this.animate(this.ctx3);


    //   };
    //
    // }





}

module.exports = Explosion;
