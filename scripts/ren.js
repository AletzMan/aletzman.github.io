class GameObject {
	constructor(context, x, y, vx, vy, mass) {
		this.context = context;
		this.x = x;
		this.y = y;
		this.vx = vx;
		this.vy = vy;
		this.mass = mass;

		this.isColliding = false;
	}
}
class Square extends GameObject {
	constructor(context, x, y, vx, vy, mass) {
		super(context, x, y, vx, vy, mass);

		//Set default width and height
		this.width = 15;
		this.height = 15;
	}

	draw() {
		//Draw a simple square
		this.context.fillStyle = this.isColliding ? '#ff8080' : '#0099b0';
		this.context.beginPath();
		this.context.arc(this.x, this.y, this.width / 2, 0, 2*Math.PI);
		this.context.stroke();
	}

	update(secondsPassed) {
		//Move with set velocity
		this.x += this.vx * secondsPassed;
		this.y += this.vy * secondsPassed;
	}
}
class GameWorld {

	constructor(canvasId) {
		this.canvas = null;
		this.context = null;
		this.secondsPassed = 0;
		this.oldTimeStamp = 0;
		this.gameObjects = [];
		this.resetCounter = 0;

		this.init("canvas");
	}

	init(canvasId) {
		this.canvas = document.getElementById(canvasId);
		this.context = this.canvas.getContext('2d');

		this.createWorld();

		// Request an animation frame for the first time
		// The gameLoop() function will be called as a callback of this request
		window.requestAnimationFrame((timeStamp) => { this.gameLoop(timeStamp) });
	}

	createWorld() {
		this.gameObjects = [
			new Square(this.context, GetRandomNumber(50, 650), GetRandomNumber(50, 350), 0, 50, 1),
			new Square(this.context, GetRandomNumber(50, 650), GetRandomNumber(50, 350), 0, -50, 200),
			new Square(this.context, GetRandomNumber(50, 650), GetRandomNumber(50, 350), 50, 50, 1),
			new Square(this.context, GetRandomNumber(50, 650), GetRandomNumber(50, 350), 50, 50, 1),
			new Square(this.context, GetRandomNumber(50, 650), GetRandomNumber(50, 350), -50, 50, 1),
			new Square(this.context, GetRandomNumber(50, 650), GetRandomNumber(50, 350), 50, -50, 1)
		];
	}

	gameLoop(timeStamp) {
		// Calculate how much time has passed
		this.secondsPassed = (timeStamp - this.oldTimeStamp) / 1000;
		this.oldTimeStamp = timeStamp;

		// Loop over all game objects to update
		for (let i = 0; i < this.gameObjects.length; i++) {
			this.gameObjects[i].update(this.secondsPassed);
		}

		this.detectCollisions();
		this.detectEdgeCollisions();

		this.clearCanvas();

		// Loop over all game objects to draw
		for (let i = 0; i < this.gameObjects.length; i++) {
			this.gameObjects[i].draw();
		}

		// The loop function has reached it's end
		// Keep requesting new frames
		window.requestAnimationFrame((timeStamp) => this.gameLoop(timeStamp));
	}

	detectCollisions() {
		let obj1;
		let obj2;

		for (let i = 0; i < this.gameObjects.length; i++) {
			this.gameObjects[i].isColliding = false;
		}

		for (let i = 0; i < this.gameObjects.length; i++) {
			obj1 = this.gameObjects[i];
			for (let j = i + 1; j < this.gameObjects.length; j++) {
				obj2 = this.gameObjects[j];

				if (this.rectIntersect(obj1.x, obj1.y, obj1.width, obj1.height, obj2.x, obj2.y, obj2.width, obj2.height)) {
					obj1.isColliding = true;
					obj2.isColliding = true;

					let vCollision = { x: obj2.x - obj1.x, y: obj2.y - obj1.y };
					let distance = Math.sqrt((obj2.x - obj1.x) * (obj2.x - obj1.x) + (obj2.y - obj1.y) * (obj2.y - obj1.y));
					let vCollisionNorm = { x: vCollision.x / distance, y: vCollision.y / distance };
					let vRelativeVelocity = { x: obj1.vx - obj2.vx, y: obj1.vy - obj2.vy };
					let speed = vRelativeVelocity.x * vCollisionNorm.x + vRelativeVelocity.y * vCollisionNorm.y;

					if (speed < 0) {
						break;
					}

					let impulse = 2 * speed / (obj1.mass + obj2.mass);
					obj1.vx -= (impulse * obj2.mass * vCollisionNorm.x);
					obj1.vy -= (impulse * obj2.mass * vCollisionNorm.y);
					obj2.vx += (impulse * obj1.mass * vCollisionNorm.x);
					obj2.vy += (impulse * obj1.mass * vCollisionNorm.y);
				}
			}
		}
	}
	detectEdgeCollisions() {
		const canvasWidth = 1000;
		const canvasHeight = 500;

		// Set a restitution, a lower value will lose more energy when colliding
		const restitution = 0.90;
		let obj;
		for (let i = 0; i < this.gameObjects.length; i++) {
			obj = this.gameObjects[i];

			// Check for left and right
			if (obj.x < 1) {
				obj.vx = Math.abs(obj.vx) * restitution;
				obj.x = 1;
			} else if (obj.x > canvasWidth - obj.width) {
				obj.vx = -Math.abs(obj.vx) * restitution;
				obj.x = canvasWidth - obj.width;
			}

			// Check for bottom and top
			if (obj.y < 1) {
				obj.vy = Math.abs(obj.vy) * restitution;
				obj.y = 1;
			} else if (obj.y > canvasHeight - obj.height) {
				obj.vy = -Math.abs(obj.vy) * restitution;
				obj.y = canvasHeight - obj.height;
			}
		}
	}

	rectIntersect(x1, y1, w1, h1, x2, y2, w2, h2) {

		// Check x and y for overlap
		if (x2 > w1 + x1 || x1 > w2 + x2 || y2 > h1 + y1 || y1 > h2 + y2) {
			return false;
		}

		return true;
	}

	clearCanvas() {
		// Clear the canvas
		this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
	}
}