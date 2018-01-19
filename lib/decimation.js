const Blossom = require("./blossom");
// import Blossom from "./blossom";

const Game = require('./game');

document.addEventListener("DOMContentLoaded", () => {
  let canvasEl = document.getElementById("myCanvas");
  canvasEl.width = 1000;
  canvasEl.height = 500;

  let ctx = canvasEl.getContext("2d");
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, canvasEl.width, canvasEl.height);

  let backgroundEl = document.getElementById("canvasBackground");
  backgroundEl.height = 100;
  backgroundEl.width = 300;

  let ctx2 = canvasEl.getContext("2d");



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
  game.start(ctx);

  window.Blossom = Blossom;
});
