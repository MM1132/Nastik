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
		// Remove the tail
		let tail = this.segments.pop();
		
		// Add the tail to the front
		this.segments.unshift(tail);

		// Change the coordinates of the segment moved to the front
		switch(this.direction) {
			case 0:
				this.segments[0].pos.y = this.segments[1].pos.y - 1;
				break;
			case 1:
				this.segments[0].pos.x = this.segments[1].pos.x + 1;
				break;
			case 2:
				this.segments[0].pos.y = this.segments[1].pos.y + 1;
				break;
			case 3:
				this.segments[0].pos.x = this.segments[1].pos.x + 1;
				break;
		}
	}

	render() {
		for(let i of this.segments) {
			i.render();
		}
	}
}