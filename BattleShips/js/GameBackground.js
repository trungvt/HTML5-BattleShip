enchant();

var GameBackground = Class.create(Sprite, {
	initialize: function() {
		Sprite.apply(this);
		this.image = Game.instance.assets['res/images/background.jpg'];
		this.width = Game.instance.width;
		this.height = Game.instance.height;

		this.addEventListener(Event.ENTER_FRAME, this.updateAnimation);
	},

	updateAnimation: function(event) {
		if (this.y >= this.height) {
			this.y = -this.height;
		}
		this.y += 3;
	}
});