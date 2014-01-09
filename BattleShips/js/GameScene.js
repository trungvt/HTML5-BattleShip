enchant();
var GameScene = Class.create(Scene, {
	initialize: function() {
		var game, bg1, bg2, ship, obstacleGroup, bulletGroup, scoreLabel, score;
		Scene.apply(this);

		game = Game.instance;

		obstacleGroup = new Group();
		this.obstacleGroup = obstacleGroup;
		this.obstaclesGenerateTimer = 0;

		bulletGroup = new Group();
		this.bulletGroup = bulletGroup;
		this.bulletsGenerateTimer = 0;

		// setup the background
		bg1 = new GameBackground();
		bg1.x = 0;
		bg1.y = -bg1.height;

		bg2 = new GameBackground();
		bg2.x = 0;
		bg2.y = 0;
		// setup the space ship
		ship = new SpaceShip();
		this.ship = ship;
		ship.x = game.width / 2 - ship.width / 2;
		ship.y = game.height - ship.height;

		// score label
		score = 0;
		game.score = score;
		scoreLabel = new Label(game.SCORE_TEXT + score);
		scoreLabel.x = -90;
		scoreLabel.y = 10;
		scoreLabel.color = "white";
		scoreLabel.font = "20px strong";
		scoreLabel.textAlign = "center";
		scoreLabel._style.textShadow ="-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black";
		this.scoreLabel = scoreLabel;

		this.addChild(bg1);
		this.addChild(bg2);
		this.addChild(obstacleGroup);
		this.addChild(bulletGroup);
		this.addChild(ship);
		this.addChild(scoreLabel);

		this.addEventListener(Event.ENTER_FRAME, this.updateFrame);
	},

	updateFrame: function(event) {
		// bgm
		if (Game.instance.bgm.currentTime >= Game.instance.bgm.duration) {
			Game.instance.bgm.play();
		}
		this.obstaclesGenerateTimer += event.elapsed;
		this.bulletsGenerateTimer += event.elapsed;
		// attack
		if (this.bulletsGenerateTimer >= 400) {
			this.bulletsGenerateTimer = 0;
			var bullet = new Bullet(this.ship.x + this.ship.width / 2, this.ship.y);
			this.bulletGroup.addChild(bullet);
		}
		// enemies
		if (this.obstaclesGenerateTimer >= 50 && this.obstacleGroup.childNodes.length <= 10) {
			this.obstaclesGenerateTimer = 0;
			var obstacle = new Obstacle(Math.random() * Game.instance.width, 0);
			this.obstacleGroup.addChild(obstacle);
		}
	}
});