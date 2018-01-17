const Leaf = require("./leaf");

class Game {
  constructor() {
    this.leafs = [];
  }

  draw(ctx) {
    Leaf.new(10, 10, 100, 100);
  }
}

module.exports = Game;
