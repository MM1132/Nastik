var c = document.getElementById("canvas");
var cc = c.getContext("2d");

var game = new Game();
function main_loop() {
	game.update();
	game.render();
}
setInterval(main_loop, 1000 / 10);