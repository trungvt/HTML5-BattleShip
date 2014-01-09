enchant();

var Bullet = Class.create(Sprite, {
	initialize: function(x, y) {
		Sprite.apply(this, [40, 40]);

		var speed;
		speed = 10;
		this.speed = speed;
		this.image = Game.instance.assets['res/images/bullet.png'];
		this.x = x - this.width / 2;
		this.y = y - this.height;

		this.addEventListener(Event.ENTER_FRAME, this.update);
	},

	update: function(event) {
		this.y -= this.speed;
		// big bang!
		for (var i = Game.instance.gameScene.obstacleGroup.childNodes.length - 1; i >= 0; i--) {;
			var obstacle = Game.instance.gameScene.obstacleGroup.childNodes[i];
			if (this.intersect(obstacle)) {
				if (this != null && this.parentNode != null) {
					this.parentNode.removeChild(this);
				}
				Game.instance.gameScene.obstacleGroup.removeChild(obstacle);
				// score recorded
				Game.instance.score += 1;
				Game.instance.gameScene.scoreLabel.text = Game.instance.SCORE_TEXT + Game.instance.score;
			}
		};
		if (this.y <= -this.height) {
			if (this != null && this.parentNode != null) {
				this.parentNode.removeChild(this);
			}
		}
	}
});