class Game {
	constructor() {
		this.reset();

		this.score = 0;
	}

	reset() {
		this.snake = new Snake();
		this.food = new Food();
		this.score = 0;
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
				this.score++;
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

		// Render the score
		cc.fillStyle = "black";
		cc.font = "bold 40px Verdana";
		cc.fillText("Score: " + this.score, 10, c.height - 10);
	}
}