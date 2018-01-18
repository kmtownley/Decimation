class Background {
  constructor() {
  }

  scrollImage(ctx) {
    this.img = new Image();
    this.img.src = './assets/images/footer_image_tower.png';

    this.img.onload = () => {
    let x = 0;
    let width = this.img.naturalWidth;
    let min = 0 - width;
    let count = 1;

      const loop = () => {
  
        ctx.drawImage(this.img, x, 370);
        ctx.drawImage(this.img, x + width, 370);
        ctx.drawImage(this.img, x + width * 2, 370);
        ctx.drawImage(this.img, x + width * 3, 370);
        x -= count;
        if (x < min) {
          x = 0;
        }
      };
    setInterval(loop, 9);
    };
  }

}



module.exports = Background;
