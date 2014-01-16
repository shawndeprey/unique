function Stars()
{
	this.stars = [];

	this.init = function()
	{
		// Image filename post-fixes
		var white = [1,4,7];
		var blue = [2,5,8];
		var red = [3,6,9];

		// Generate a larger number of smaller background stars
		for(var i = 0; i < 500; i++){
			var variant = Math.random();
			if(variant < 0.80){
				newStar = new Star({image: "img/star/star"+white[0]+".png"});
			} else
			if(variant > 0.80 && variant < 0.905){
				newStar = new Star({image: "img/star/star"+blue[0]+".png"});
			} else {
				newStar = new Star({image: "img/star/star"+red[0]+".png"});
			}
			newStar.init();
			newStar.depth = Math.floor(Math.random() * 100) + 100;
			this.stars.push(newStar);
		}

		// Generate closer stars
		for(var i = 0; i < 250; i++){
			var starNum = Math.floor(Math.random()*3);
			var variant = Math.random();
			if(variant < 0.80){
				newStar = new Star({image: "img/star/star"+white[starNum]+".png"});
			} else
			if(variant > 0.80 && variant < 0.905){
				newStar = new Star({image: "img/star/star"+blue[starNum]+".png"});
			} else {
				newStar = new Star({image: "img/star/star"+red[starNum]+".png"});
			}
			newStar.init();
			newStar.depth = Math.floor(Math.random() * 100) + 1;
			this.stars.push(newStar);
		}
	}

	this.update = function()
	{
		// Grab the distance the camera has moved since the last frame
		xMovement = GameScene.camera.xMovement();
		yMovement = GameScene.camera.yMovement();

		// Tell all the stars what's up!
		if(xMovement != 0 || yMovement != 0){
			for(var i = 0; i < this.stars.length; i++){
				this.stars[i].update(xMovement, yMovement);
			}
		}
	}

	this.draw = function()
	{
		for(var i = 0; i < this.stars.length; i++){
			this.stars[i].draw();
		}
	}
}

Stars.StarColors = ["Blue","Red","White","Yellow"];