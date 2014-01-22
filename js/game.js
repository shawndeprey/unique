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
document.write('<script src="js/Asteroid.js"></script>');
document.write('<script src="js/Blackhole.js"></script>');
document.write('<script src="js/StarObj.js"></script>');
document.write('<script src="js/Planet.js"></script>');
document.write('<script src="js/Comet.js"></script>');
document.write('<script src="js/Field.js"></script>');
document.write('<script src="js/Supernova.js"></script>');

function Start()
{
	Firestorm.initialize({width: window.innerWidth, height: window.innerHeight});

// Load Assets
	Firestorm.assetManager.add("img/ships/ship1.png");
	for(var j = 1; j < 10; j++){
		Firestorm.assetManager.add("img/star/star"+j+".png");
	}
	Firestorm.assetManager.add("img/anomaly/asteroid/asteroid1.png");
	Firestorm.assetManager.add("img/anomaly/blackhole/blackhole1.png");
	Firestorm.assetManager.add("img/anomaly/planet/planet1.png");
	Firestorm.assetManager.add("img/anomaly/star/star1.png");
	Firestorm.assetManager.add("img/anomaly/comet/comet1.png");
	Firestorm.assetManager.add("img/anomaly/field/emp_field1.png");
	Firestorm.assetManager.add("img/anomaly/field/radiation_field1.png");
	Firestorm.assetManager.add("img/anomaly/field/rock_field1.png");
	Firestorm.assetManager.add("img/anomaly/field/ice_field1.png");
	Firestorm.assetManager.add("img/anomaly/supernova/supernova1.png");

// Load initial scene
	Firestorm.run(GameScene);
}