class Player {
  constructor() {
    this.gemScore = 0;

    this.renderGems();
  }

  addGems() {
    this.gemScore += 10;
    this.renderGems();
  }

  removeGems() {
    this.gemScore -= 10;
    this.renderGems();
  }

  renderGems() {
    debugger
    document.getElementById("gemScore").innerHTML = "Score: " +  this.gemScore;
  }
}


module.exports = Player;
