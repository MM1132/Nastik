class Game {
	constructor() {
		this.snake = new Snake();
	}

	reset() {
		this.snake = new Snake();
	}

	update() {
		// Update the snake
		// In case of an error, reset the entire thing
		if(this.snake.update()) {
			this.reset();
		}
	}

	render() {
		// Clear out the screen first
		cc.fillStyle = "rgb(30, 240, 50)";
		cc.fillRect(0, 0, c.width, c.height);

		// Render the snake
		this.snake.render();
	}
}