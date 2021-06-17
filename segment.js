class Segment {
	static color = "rgb(50, 10, 120)";

	constructor(x, y) {
		this.pos = {
			x: x,
			y: y
		};
	}

	update() {

	}

	render(color = Segment.color) {
		cc.fillStyle = color;
		cc.fillRect(this.pos.x * TILE_SIZE, this.pos.y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
	}
}