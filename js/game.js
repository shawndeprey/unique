// Libraries
document.write('<script src="js/library/simplex-noise.js"></script>');

// Load Scenes here
document.write('<script src="scenes/GameScene.js"></script>');

// Load Objects here
document.write('<script src="js/Ship.js"></script>');
document.write('<script src="js/Stars.js"></script>');
document.write('<script src="js/Star.js"></script>');
document.write('<script src="js/Universe.js"></script>');
document.write('<script src="js/Quadrant.js"></script>');
document.write('<script src="js/Anomaly.js"></script>');

function Start()
{
	Firestorm.initialize({width: window.innerWidth, height: window.innerHeight});

// Load Assets
	Firestorm.assetManager.add("img/ships/ship1.png");
	for(var j = 1; j < 10; j++){
		Firestorm.assetManager.add("img/star/star"+j+".png");
	}

// Load initial scene
	Firestorm.run(GameScene);
}