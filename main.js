var c = document.getElementById("canvas");
var cc = c.getContext("2d");

const TILE_SIZE = 20;

var game = new Game();
function main_loop() {
	game.update();
	game.render();
}
setInterval(main_loop, 1000 / 10);