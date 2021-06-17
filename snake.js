class Snake {
	constructor() {
		// UP, RIGHT, DOWN, LEFT
		this.direction = 1;

		// All the pieces of the snake
		this.segments = [];
		for(let i = 0; i < 10; i++) {
			this.segments.push(new Segment(10 - i, 10));
		}

		// A list for the direction where the snake will turn towards
		this.directionList = [];
	}

	changeDirection(direction) {
		if(direction != null) {
			if(this.directionList.length < 2) {
				this.directionList.push(direction);
			}
		}
	}

	update() {
		// Turn the snake if we have any directions waiting in the list
		if(this.directionList.length > 0) {
			// Change the direction of the snake
			this.direction = this.directionList[0];
			// Remove the direction from the list that has been used
			this.directionList.shift();
		}

		// Remove the tail
		let tail = this.segments.pop();
		
		// Add the tail to the front
		this.segments.unshift(tail);

		// Change the coordinates of the segment moved to the front
		this.segments[0].pos.y = this.segments[1].pos.y;
		this.segments[0].pos.x = this.segments[1].pos.x;
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
				this.segments[0].pos.x = this.segments[1].pos.x - 1;
				break;
		}

		// Collision detection
		for(let i = 4; i < this.segments.length; i++) {
			if(this.segments[0].pos.x == this.segments[i].pos.x &&
			   this.segments[0].pos.y == this.segments[i].pos.y) {
				return true;
			}
		}
		return false;
	}

	render() {
		// Render the head of the snake
		this.segments[0].render("rgb(0, 0, 0)");

		// Render all the other segments of the snake
		for(let i = 1; i < this.segments.length; i++) {
			this.segments[i].render();
		}
	}
}