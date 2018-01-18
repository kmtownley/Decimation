const Game = require('./game');

document.addEventListener("DOMContentLoaded", () => {
  let canvasEl = document.getElementById("myCanvas");
  canvasEl.width = 1000;
  canvasEl.height = 500;

  let ctx = canvasEl.getContext("2d");
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, canvasEl.width, canvasEl.height);

  // let ctx2 = canvasEl2.getContent("2d");



  // var x = canvasEl.width/2;
  // var y = canvasEl.height-30;
  // var dx = 2;
  // var dy = -2;
  // function draw() {
  //   // drawing code
  //   ctx.beginPath();
  //   ctx.rect(x, y, 50, 50);
  //   ctx.fillStyle = "#FF0000";
  //   ctx.fill();
  //   ctx.closePath();
  //   x += dx;
  //   y += dy;
  //
  // }
  // setInterval(draw, 10);

  const game = new Game();
  // game.draw(ctx);
  game.draw(ctx);
});
