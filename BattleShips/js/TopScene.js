enchant();

var TopScene = Class.create(Scene, {
	initialize: function() {
		var game, bg, title, start, startAnimationTimer, isViewable;
		Scene.apply(this);
		game = Game.instance;

		bg = new Sprite(game.width, game.height);
		bg.image = game.assets['res/images/common_background.png'];

		title = new Sprite(250, 100);
		title.image = game.assets['res/images/title.png'];
		title.x = -title.width;
		title.y = game.height / 2 - title.height;
		this.titleBar = title;

		start = new Sprite(300, 100);
		start.image = game.assets['res/images/start.png'];
		start.x = game.width / 2 - start.width / 2;
		start.y = title.y + start.height;
		this.startButton = start;

		this.startAnimationTimer = 0;
		this.isViewable = true;

		this.addChild(bg);
		this.addChild(title);
		this.addChild(start);

		this.addEventListener(Event.ENTER_FRAME, this.update);
		this.addEventListener(Event.TOUCH_START, this.touchToStart);
	},

	update: function(event) {
		this.startAnimationTimer += event.elapsed;
		if (this.startAnimationTimer >= 500) {
			this.startAnimationTimer = 0;
			if (this.isViewable == true) {
				this.isViewable = false;
				this.removeChild(this.startButton);
			} else {
				this.isViewable = true;
				this.addChild(this.startButton);
			}
		}
		if (this.titleBar.x < Game.instance.width / 2 - this.titleBar.width / 2) {
			this.titleBar.x += 10;
		}
		// bgm
		if (Game.instance.bgm.currentTime >= Game.instance.bgm.duration) {
			Game.instance.bgm.play();
		}
	},

	touchToStart: function(event) {
		var gameScene = new GameScene();
		Game.instance.gameScene = gameScene;
		Game.instance.replaceScene(gameScene);
	}
});