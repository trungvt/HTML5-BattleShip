enchant();

var SpaceShip = Class.create(Sprite, {
	initialize: function() {
		Sprite.apply(this, [56, 150]);
		this.image = Game.instance.assets['res/images/rocket.png'];
		this.animationDuration = 0;
		this.addEventListener(Event.ENTER_FRAME, this.update);
		this.addEventListener(Event.TOUCH_MOVE, this.updateTouch);
	},

	update: function(event) {
		this.animationDuration += event.elapsed * 0.001;
		if (this.animationDuration > 0.25) {
			this.frame = (this.frame + 1) % 4;
			this.animationDuration -= 0.25;
		}
	},

	updateTouch: function(event) {
		this.x = event.x - this.width / 2;
		// this.y = event.y - this.height / 2;
	},

	isBounded: function(currentX, currentY) {
		if (currentX >= this.width / 2 && 
			currentX <= Game.instance.width - this.width / 2 &&
			currentY >= this.height / 2 && 
			currentY <= Game.instance.height - this.height / 2) {
			return true;
		}
		return false;
	}
});