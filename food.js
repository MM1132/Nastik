class Food {
	static color = "rgb(230, 30, 45)";

	constructor() {
		this.pos = {
			x: 5,
			y: 5
		};
	}

	changePos(snake) {
		// Generate new position
		this.pos = {
			x: Math.floor(Math.random() * c.width / TILE_SIZE),
			y: Math.floor(Math.random() * c.height / TILE_SIZE)
		};
		// If such potition collides with any segments of the snake
		if(snake.collides(this.pos.x, this.pos.y)) {
			this.changePos(snake);
		}
	}

	update() {

	}

	render() {
		cc.fillStyle = Food.color;
		cc.fillRect(this.pos.x * TILE_SIZE, this.pos.y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
	}
}