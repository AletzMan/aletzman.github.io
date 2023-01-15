"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GameObject = function GameObject(context, x, y, vx, vy, mass) {
  _classCallCheck(this, GameObject);

  this.context = context;
  this.x = x;
  this.y = y;
  this.vx = vx;
  this.vy = vy;
  this.mass = mass;
  this.isColliding = false;
};

var Square =
/*#__PURE__*/
function (_GameObject) {
  _inherits(Square, _GameObject);

  function Square(context, x, y, vx, vy, mass) {
    var _this;

    _classCallCheck(this, Square);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Square).call(this, context, x, y, vx, vy, mass)); //Set default width and height

    _this.width = 15;
    _this.height = 15;
    return _this;
  }

  _createClass(Square, [{
    key: "draw",
    value: function draw() {
      //Draw a simple square
      this.context.fillStyle = this.isColliding ? '#ff8080' : '#0099b0';
      this.context.beginPath();
      this.context.arc(this.x, this.y, this.width / 2, 0, 2 * Math.PI);
      this.context.stroke();
    }
  }, {
    key: "update",
    value: function update(secondsPassed) {
      //Move with set velocity
      this.x += this.vx * secondsPassed;
      this.y += this.vy * secondsPassed;
    }
  }]);

  return Square;
}(GameObject);

var GameWorld =
/*#__PURE__*/
function () {
  function GameWorld(canvasId) {
    _classCallCheck(this, GameWorld);

    this.canvas = null;
    this.context = null;
    this.secondsPassed = 0;
    this.oldTimeStamp = 0;
    this.gameObjects = [];
    this.resetCounter = 0;
    this.init("canvas");
  }

  _createClass(GameWorld, [{
    key: "init",
    value: function init(canvasId) {
      var _this2 = this;

      this.canvas = document.getElementById(canvasId);
      this.context = this.canvas.getContext('2d');
      this.createWorld(); // Request an animation frame for the first time
      // The gameLoop() function will be called as a callback of this request

      window.requestAnimationFrame(function (timeStamp) {
        _this2.gameLoop(timeStamp);
      });
    }
  }, {
    key: "createWorld",
    value: function createWorld() {
      this.gameObjects = [new Square(this.context, GetRandomNumber(50, 650), GetRandomNumber(50, 350), 0, 50, 1), new Square(this.context, GetRandomNumber(50, 650), GetRandomNumber(50, 350), 0, -50, 200), new Square(this.context, GetRandomNumber(50, 650), GetRandomNumber(50, 350), 50, 50, 1), new Square(this.context, GetRandomNumber(50, 650), GetRandomNumber(50, 350), 50, 50, 1), new Square(this.context, GetRandomNumber(50, 650), GetRandomNumber(50, 350), -50, 50, 1), new Square(this.context, GetRandomNumber(50, 650), GetRandomNumber(50, 350), 50, -50, 1)];
    }
  }, {
    key: "gameLoop",
    value: function gameLoop(timeStamp) {
      var _this3 = this;

      // Calculate how much time has passed
      this.secondsPassed = (timeStamp - this.oldTimeStamp) / 1000;
      this.oldTimeStamp = timeStamp; // Loop over all game objects to update

      for (var i = 0; i < this.gameObjects.length; i++) {
        this.gameObjects[i].update(this.secondsPassed);
      }

      this.detectCollisions();
      this.detectEdgeCollisions();
      this.clearCanvas(); // Loop over all game objects to draw

      for (var _i = 0; _i < this.gameObjects.length; _i++) {
        this.gameObjects[_i].draw();
      } // The loop function has reached it's end
      // Keep requesting new frames


      window.requestAnimationFrame(function (timeStamp) {
        return _this3.gameLoop(timeStamp);
      });
    }
  }, {
    key: "detectCollisions",
    value: function detectCollisions() {
      var obj1;
      var obj2;

      for (var i = 0; i < this.gameObjects.length; i++) {
        this.gameObjects[i].isColliding = false;
      }

      for (var _i2 = 0; _i2 < this.gameObjects.length; _i2++) {
        obj1 = this.gameObjects[_i2];

        for (var j = _i2 + 1; j < this.gameObjects.length; j++) {
          obj2 = this.gameObjects[j];

          if (this.rectIntersect(obj1.x, obj1.y, obj1.width, obj1.height, obj2.x, obj2.y, obj2.width, obj2.height)) {
            obj1.isColliding = true;
            obj2.isColliding = true;
            var vCollision = {
              x: obj2.x - obj1.x,
              y: obj2.y - obj1.y
            };
            var distance = Math.sqrt((obj2.x - obj1.x) * (obj2.x - obj1.x) + (obj2.y - obj1.y) * (obj2.y - obj1.y));
            var vCollisionNorm = {
              x: vCollision.x / distance,
              y: vCollision.y / distance
            };
            var vRelativeVelocity = {
              x: obj1.vx - obj2.vx,
              y: obj1.vy - obj2.vy
            };
            var speed = vRelativeVelocity.x * vCollisionNorm.x + vRelativeVelocity.y * vCollisionNorm.y;

            if (speed < 0) {
              break;
            }

            var impulse = 2 * speed / (obj1.mass + obj2.mass);
            obj1.vx -= impulse * obj2.mass * vCollisionNorm.x;
            obj1.vy -= impulse * obj2.mass * vCollisionNorm.y;
            obj2.vx += impulse * obj1.mass * vCollisionNorm.x;
            obj2.vy += impulse * obj1.mass * vCollisionNorm.y;
          }
        }
      }
    }
  }, {
    key: "detectEdgeCollisions",
    value: function detectEdgeCollisions() {
      var canvasWidth = 1000;
      var canvasHeight = 500; // Set a restitution, a lower value will lose more energy when colliding

      var restitution = 0.90;
      var obj;

      for (var i = 0; i < this.gameObjects.length; i++) {
        obj = this.gameObjects[i]; // Check for left and right

        if (obj.x < 1) {
          obj.vx = Math.abs(obj.vx) * restitution;
          obj.x = 1;
        } else if (obj.x > canvasWidth - obj.width) {
          obj.vx = -Math.abs(obj.vx) * restitution;
          obj.x = canvasWidth - obj.width;
        } // Check for bottom and top


        if (obj.y < 1) {
          obj.vy = Math.abs(obj.vy) * restitution;
          obj.y = 1;
        } else if (obj.y > canvasHeight - obj.height) {
          obj.vy = -Math.abs(obj.vy) * restitution;
          obj.y = canvasHeight - obj.height;
        }
      }
    }
  }, {
    key: "rectIntersect",
    value: function rectIntersect(x1, y1, w1, h1, x2, y2, w2, h2) {
      // Check x and y for overlap
      if (x2 > w1 + x1 || x1 > w2 + x2 || y2 > h1 + y1 || y1 > h2 + y2) {
        return false;
      }

      return true;
    }
  }, {
    key: "clearCanvas",
    value: function clearCanvas() {
      // Clear the canvas
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
  }]);

  return GameWorld;
}();