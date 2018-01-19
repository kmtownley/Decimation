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

  const game = new Game();
  game.start(ctx);

  window.Blossom = Blossom;
});
