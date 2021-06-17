class Snake {
	constructor() {
		// UP, RIGHT, DOWN, LEFT
		this.direction = 1;

		// All the pieces of the snake
		this.segments = [];
		for(let i = 0; i < 5; i++) {
			this.segments.push(new Segment(10 - i, 10));
		}
	}

	update() {

	}

	render() {
		for(let i of this.segments) {
			i.render();
		}
	}
}