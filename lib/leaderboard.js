import fb from './firebase';

class Leaderboard {
  constructor() {
    this.currentPlayer = Game.player;
    this.currentScore = Player.gemScore;
    this.highScoreOne = 0;
    this.highScoreTwo = 0;
    this.highScoreThree = 0;
    this.highScoreFour = 0;

    // this.dislayModal();

  }

  sendHighScore() {

  }

  // displayModal() {
  //   let modal2 = document.getElementById('myModal2');
  //   let btn2 = document.getElementById("myBtn2");
  //   let span2 = document.getElementsByClassName("close")[0];
  //   btn2.onclick = function() {
  //       modal2.style.display = "block";
  //   };
  //
  //   span2.onclick = function() {
  //     modal2.style.display = "none";
  //   };
  //
  //   window.onclick = function(event) {
  //     if (event.target == modal2) {
  //       modal2.style.display = "none";
  //     }
  //   };
  // }

  sendHighScores() {
  let newScore = [{
    // name: localStorage.getItem('userName'),
    score: this.currentScore,
    inverseScore: -(this.currentScore)
  }];
  if (parseInt(this.currentScore) > this.highScoreOne) {
      db.ref('scores').push(newScore);

    }
    this.displayHighScores();
  }

  displayHighScores() {

  document.getElementById('leaderboard').innerHTML = '';
  document.getElementById('leaderboard').innerHTML += '<h3 class="scores">High Scores</h3><br/>';
  let i = 0;
    fb.ref('scores').orderByChild('0/invscore').on('child_added', (data) => {
      let childScoreHolder = data.val();
      if (childScoreHolder != undefined) {
        let childScore = childScoreHolder[0];
        if (i < 5) {
          document.getElementById('scores').innerHTML +=  childScore.currentScore + '<br/>';
          i += 1;
        }
      }
    });
  }
}

module.export = Leaderboard;
