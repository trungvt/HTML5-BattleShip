// start the enchant.js
enchant();

// document load
window.onload = function() {
	var game = new Game(480, 600);
	game.SCORE_TEXT = "SCORE: ";

	// pre-load the main resources
	game.preload('res/images/common_background.png');
	game.preload('res/images/background.jpg');
	game.preload('res/images/title.png');
	game.preload('res/images/start.png');
	game.preload('res/images/rocket.png');
	game.preload('res/images/meteor.gif')
	game.preload('res/images/bullet.png');
	game.preload('res/sounds/bgm.wav');
	game.preload('res/sounds/bang.mp3');
	game.preload('res/sounds/explosion.mp3');
	game.preload('res/sounds/click.mp3');

	game.fps = 30;
	game.scale = 1;
	game.onload = function() {
		var topScene = new TopScene();
		game.topScene = topScene;
		game.pushScene(topScene);
		// bgm
		game.bgm = game.assets['res/sounds/bgm.wav'];
		game.bgm.play();
	}
	game.start();

	window.scrollTo(0, 0);
};