class Background {
  constructor() {
  }

  scrollImage(ctx2) {
    this.img = new Image();
    this.img.src = './assets/images/footer_image_tower.png';

    this.img.onload = () => {
    let x = 0;
    let width = this.img.naturalWidth;
    let min = 0 - width;
    let count = 1;

      const loop = () => {
        ctx2.fillRect(0, 0, 1000, 500);
        ctx2.drawImage(this.img, x, 370);
        ctx2.drawImage(this.img, x + width, 370);
        ctx2.drawImage(this.img, x + width * 2, 370);
        ctx2.drawImage(this.img, x + width * 3, 370);
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




// class Background {
//   constructor(ctx2) {
//     this.x = 0;
//     this.count = 1;
//     this.img = new Image();
//     this.img.src = './assets/images/footer_image_tower.png';
//     this.width = 405;
//     this.min = 0 - this.width;
//     this.ctx2 = ctx2;
//   }
//
//   scrollImage() {
//     // let x = 0;
//     // let width = this.img.naturalWidth;
//     // let min = 0 - width;
//     // let count = 1;
//     // this.img = new Image();
//     // this.img.src = './assets/images/footer_image_tower.png';
//
//     // this.img.onload = () => {
//
//       // const loop = () => {
//         this.ctx2.fillRect(0, 0, 1000, 500);
//         this.ctx2.drawImage(this.img, this.x, 370);
//         this.ctx2.drawImage(this.img, this.x + this.width, 370);
//         this.ctx2.drawImage(this.img, this.x + this.width * 2, 370);
//         this.ctx2.drawImage(this.img, this.x + this.width * 3, 370);
//         this.x -= this.count;
//         if (this.x < this.min) {
//           this.x = 0;
//         }
//       // };
//     // setInterval(loop, 9);
//     // };
//   }
// }
//
// module.exports = Background;
