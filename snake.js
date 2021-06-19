class Snake {
	constructor() {
		// UP, RIGHT, DOWN, LEFT
		this.direction = 1;

		// All the pieces of the snake
		this.segments = [];
		for(let i = 0; i < 4; i++) {
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

	// Returns true if the coordinates match with any of the segments of the snake
	collides(x, y) {
		for(let i of this.segments) {
			if(i.pos.x == x && i.pos.y == y) {
				return true;
			}
		}
		return false;
	}

	update(food) {
		// Turn the snake if we have any directions waiting in the list
		if(this.directionList.length > 0) {
			// Change the direction of the snake
			if((this.direction + this.directionList[0]) % 2) {
				this.direction = this.directionList[0];
			}

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
		// Teleport throuhg walls. Yey! 
		if(this.segments[0].pos.x < 0) {
			this.segments[0].pos.x = c.width / TILE_SIZE - 1;
		} else if(this.segments[0].pos.x > c.width / TILE_SIZE - 1) {
			this.segments[0].pos.x = 0;
		} else if(this.segments[0].pos.y < 0) {
			this.segments[0].pos.y = c.height / TILE_SIZE - 1;
		} else if(this.segments[0].pos.y > c.height / TILE_SIZE - 1) {
			this.segments[0].pos.y = 0;
		}

		// Collision detection
		for(let i = 4; i < this.segments.length; i++) {
			if(this.segments[0].pos.x == this.segments[i].pos.x &&
			   this.segments[0].pos.y == this.segments[i].pos.y) {
				return 1;
			}
		}

		// Check for food
		if(this.segments[0].pos.x == food.pos.x && this.segments[0].pos.y == food.pos.y) {
			// The tail
			let tail = this.segments[this.segments.length - 1];
			for(let i = 0; i < 5; i++) {
				this.segments.push(new Segment(tail.pos.x, tail.pos.y));
			}
			// Returning 2 means that our snake just ate the food
			return 2;
		}

		return 0;
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