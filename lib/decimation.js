const Blossom = require("./blossom");
const Game = require('./game');
const Words = require('./words');

document.addEventListener("DOMContentLoaded", () => {
  let canvasEl = document.getElementById("myCanvas");
  canvasEl.width = 1000;
  canvasEl.height = 500;
  canvasLeft = canvasEl.offsetLeft;
  canvasTop = canvasEl.offsetTop;

  let ctx = canvasEl.getContext("2d");
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, canvasEl.width, canvasEl.height);

  let canvasWords = document.getElementById("canvasWords");
  canvasWords.width = 80;
  canvasWords.height = 80;
  let ctxWords = document.getElementById("canvasWords");

  let clickyEl = document.querySelector(".clicky");
  clickyEl.addEventListener("click", (e) => {
    let x = e.pageX - canvasLeft;
    let y = e.pageY - canvasTop;
    game.receiveMouseXY(x, y);
  });

  let modal = document.getElementById('myModal');
  let btn = document.getElementById("myBtn");
  let span = document.getElementsByClassName("close")[0];
  btn.onclick = function() {
      modal.style.display = "block";
  };

  span.onclick = function() {
      modal.style.display = "none";
  };
  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  };

  let backgroundEl = document.getElementById("canvasBackground");
  backgroundEl.height = 100;
  backgroundEl.width = 300;

  let ctx2 = canvasEl.getContext("2d");

  let explosionEl = document.getElementById("canvasExplosion");
  explosionEl.height = 128;
  explosionEl.width = 128;

  let ctx3 = explosionEl.getContext("2d");

  const game = new Game(ctx, ctx2, ctx3, ctxWords);


  game.beginBackground(ctx2);
  game.controlGame();
  game.toggleStart();
  game.loadBlossoms();
  // game.start(ctx, ctx3);


  // let pauseButton = document.getElementById("pause");
  // pauseButton.addEventListener("click", () =>  game.togglePause);

  // window.Blossom = Blossom;

});
