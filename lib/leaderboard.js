import fb from './firebase';

class Leaderboard {
  constructor() {

    // this.currentScore = Player.gemScore;
    this.highScoreOne = 0;
    this.highScoreTwo = 0;
    this.highScoreThree = 0;
    this.highScoreFour = 0;

    // this.dislayModal();

  }

  // sendHighScore() {
  //
  // }

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

  sendHighScores(gemScore) {
  let newScore = [{
    // name: localStorage.getItem('userName'),
    score: gemScore,
    inverseScore: -(gemScore)
  }];
  console.log(gemScore)
  if (parseInt(gemScore)) {
      fb.ref('scores').push(newScore);

    }
    this.displayHighScores();
  }

  displayHighScores() {
  document.getElementById('scores').innerHTML = '';
  document.getElementById('leaderboard').innerHTML = '';
  document.getElementById('leaderboard').innerHTML += '<h3 class="scores">High Scores</h3><br/>';
  let i = 0;

    fb.ref('scores').orderByChild('0/inverseScore').on('child_added', (data) => {
      let childScoreHolder = data.val();
      if (childScoreHolder !== undefined) {
        debugger
        let childScore = childScoreHolder[0];
        if (i < 11) {
          document.getElementById('scores').innerHTML +=  `${i + 1}. ` + childScore.score + ' points <br/>';
          i += 1;
        }
      }
    });
  }

  clearHighScore() {
    document.getElementById
  }
}

export default Leaderboard;
