DEFAULTS = {
  COLOR: "#008B8B",
  HEIGHT: 30,
  WIDTH: 30,
  SPEED: 4,
};

class Leaf {
  constructor(options = {}) {
    options.color = DEFAULTS.color;
    options.height = DEFAULTS.height;
    options.width = DEFAULTS.width;
    options.speed = DEFAULTS.speed;
  }

  draw(ctx) {
    ctx.fillRect(25, 25, 100, 100);
    ctx.fillStyle = options.color;

    ctx.beginPath();
    ctx.arc(100, 100, 20, 0, 2*Math.PI, true);
    ctx.strokeStyle = "green";
    ctx.lineWidth = 5;
    ctx.stroke();
    ctx.fillStyle = "blue";
    ctx.fill();
  }
}

module.exports = Leaf;
