class Game {
	constructor() {
		this.snake = new Snake();
		this.food = new Food();
	}

	reset() {
		this.snake = new Snake();
	}

	update() {
		// Update the snake
		// In case of an error, reset the entire thing
		switch(this.snake.update(this.food)) {
			case 0:
				break;
			case 1:
				this.reset();
				break;
			case 2:
				this.food.changePos(this.snake);
				break;
		}
	}

	render() {
		// Clear out the screen first
		cc.fillStyle = "rgb(30, 240, 50)";
		cc.fillRect(0, 0, c.width, c.height);

		// Render the snake
		this.snake.render();

		// Render the food
		this.food.render();
	}
}