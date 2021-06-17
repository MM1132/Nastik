window.addEventListener("keydown", function(e) {
	if([38, 39, 40, 37].includes(e.keyCode)) {
		let direction = null;
		switch(e.keyCode) {
			case 38:
				direction = 0;
				break;
			case 39:
				direction = 1;
				break;
			case 40:
				direction = 2;
				break;
			case 37:
				direction = 3;
				break;
		}
		game.snake.changeDirection(direction);
	}
});