enchant();

var ResultScene = Class.create(Scene, {
	initialize: function() {
		var GAME_OVER = "GAME OVER";
		var FINAL_SCORE = "SCORE: ";
		var CONTINUE_GAME = "TAP TO CONTINUE";
		var game, bg, gameoverLabel, finalScoreLabel, continueLabel, continueLabelTimer, continueLabelViewable;
		Scene.apply(this);
		game = Game.instance;

		bg = new Sprite(game.width, game.height);
		bg.image = game.assets['res/images/common_background.png'];
		bg.x = 0;
		bg.y = 0;

		gameoverLabel = new Label(GAME_OVER);
		gameoverLabel.x = game.width / 2 - gameoverLabel.width / 2;
		gameoverLabel.y = game.height / 2 - 100;
		gameoverLabel.color = "white";
		gameoverLabel.font = "40px strong";
		gameoverLabel.textAlign = "center";
		gameoverLabel._style.textShadow ="-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black";

		finalScoreLabel = new Label(FINAL_SCORE + game.score);
		finalScoreLabel.x = game.width / 2 - finalScoreLabel.width / 2;
		finalScoreLabel.y = game.height / 2;
		finalScoreLabel.color = "white";
		finalScoreLabel.font = "20px strong";
		finalScoreLabel.textAlign = "center";
		finalScoreLabel._style.textShadow ="-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black";

		continueLabel = new Label(CONTINUE_GAME);
		continueLabel.x = game.width / 2 - continueLabel.width / 2;
		continueLabel.y = game.height / 2 + 100;
		continueLabel.color = "red";
		continueLabel.font = "30px strong";
		continueLabel.textAlign = "center";
		continueLabel._style.textShadow ="-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black";
		this.continueLabel = continueLabel;

		this.continueLabelTimer = 0;
		this.continueLabelViewable = true;

		this.addChild(bg);
		this.addChild(gameoverLabel);
		this.addChild(finalScoreLabel);
		this.addChild(continueLabel);

		this.addEventListener(Event.ENTER_FRAME, this.update);
		this.addEventListener(Event.TOUCH_START, this.onTouch);
	},

	update: function(event) {
		// bgm
		if (Game.instance.bgm.currentTime >= Game.instance.bgm.duration) {
			Game.instance.bgm.play();
		}
		this.continueLabelTimer += event.elapsed;
		if (this.continueLabelTimer >= 400) {
			this.continueLabelTimer = 0;
			if (this.continueLabelViewable == true) {
				this.continueLabelViewable = false;
				this.removeChild(this.continueLabel);
			} else {
				this.continueLabelViewable = true;
				this.addChild(this.continueLabel);
			}
		}
	},

	onTouch: function(event) {
		Game.instance.assets['res/sounds/click.mp3'].play();
		var topScene = new TopScene();
		Game.instance.topScene = topScene;
		Game.instance.replaceScene(topScene);
	}
});