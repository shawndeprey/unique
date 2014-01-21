function GameScene()
{
	GameScene.camera = new Camera({x: Firestorm.width * 0.5, y: Firestorm.height * 0.5});
	var ship = new Ship({image: "img/ships/ship1.png", x: Firestorm.width * 0.5, y: Firestorm.height * 0.5})
	var stars = new Stars();
	var universe = new Universe();

	this.Init = function()
	{
		ship.init();
		stars.init();
		universe.init("Unique"); // Passing in seed
	}

	this.Update = function()
	{
		ship.update();
		GameScene.camera.update(new Vec2({x: ship.position.x, y: ship.position.y}), false);
		GameScene.camera.zoom(Firestorm.input.getWheel());
		stars.update();
		universe.update();
	}

	this.Draw = function()
	{
		Firestorm.clear("black");

		stars.draw();
		Firestorm.context.save();
			GameScene.camera.draw();
			universe.draw();
			ship.draw();
		Firestorm.context.restore();
	}
}
GameScene.inherits(BaseScene);