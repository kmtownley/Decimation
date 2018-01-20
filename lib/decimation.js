const Blossom = require("./blossom");

const Game = require('./game');

document.addEventListener("DOMContentLoaded", () => {
  let canvasEl = document.getElementById("myCanvas");
  canvasEl.width = 1000;
  canvasEl.height = 500;
  canvasLeft = canvasEl.offsetLeft;
  canvasTop = canvasEl.offsetTop;


  let ctx = canvasEl.getContext("2d");
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, canvasEl.width, canvasEl.height);



  let clickyEl = document.querySelector(".clicky");



  clickyEl.addEventListener("click", (e) => {
    let x = e.pageX - canvasLeft;
    let y = e.pageY - canvasTop;
    console.log(x, y);
    game.receiveMouseXY(x, y);
  });
  // canvasEl.onclick = function(e) {
  //   // let x = e.clientX;
  //   // let y = e.clientY;
  //   let x = e.pageX - canvasLeft;
  //   let y = e.pageY - canvasTop;
  //   console.log(x, y);
  //
  //   game.receiveMouseXY(x, y);
  // };

  let backgroundEl = document.getElementById("canvasBackground");
  backgroundEl.height = 100;
  backgroundEl.width = 300;

  let ctx2 = canvasEl.getContext("2d");

  let explosionEl = document.getElementById("canvasExplosion");
  explosionEl.height = 128;
  explosionEl.width = 128;

  let ctx3 = explosionEl.getContext("2d");



  // canvasEl.addEventListener('click', () => {
  //  console.log('canvas click');
  // });
  // let canvasPosition = {
  //   x: canvasEl.offset().left,
  //   y: canvasEl.offset().top
  // };
  //
  // canvasEl.on('click', function(e) {
  //
  //   // use pageX and pageY to get the mouse position
  //   // relative to the browser window
  //
  //   var mouse = {
  //       x: e.pageX - canvasPosition.x,
  //       y: e.pageY - canvasPosition.y
  //   };
  // });

  const game = new Game();

  game.beginBackground(ctx2);
  game.start(ctx, ctx3);

  window.Blossom = Blossom;

});
