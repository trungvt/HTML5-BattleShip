enchant();

var Obstacle = Class.create(Sprite, {
	initialize: function(x, y) {
		Sprite.apply(this, [60, 60]);
		this.image = Game.instance.assets['res/images/meteor.gif'];
		this.x = x;
		this.y = -this.height;
		this.rotationSpeed = Math.random() * 100 - 50;
		this.rotation = Math.floor(Math.random() * 360);
		var speed = Math.floor(Math.random() * 10) + 3;
		this.addEventListener(Event.ENTER_FRAME, function(){ this.updateAction(speed)});
	},

	updateAction: function(speed) {
		this.rotation += this.rotationSpeed;
		// moving
		this.y += speed;
		if (this.y > Game.instance.height) {
			this.parentNode.removeChild(this);
		}
		// collision
		if (this.intersect(Game.instance.gameScene.ship)) {
			var resultScene = new ResultScene();
			Game.instance.resultScene = resultScene;
			Game.instance.replaceScene(resultScene);
		}
	}
});