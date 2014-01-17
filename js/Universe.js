function Universe(options)
{
	// Unload the following positions around the camera's position when a new area is entered
	var unload = [
		new Vec2({x:-3,y:-3}),
		new Vec2({x:-3,y:-2}),
		new Vec2({x:-3,y:-1}),
		new Vec2({x:-3,y:0}),
		new Vec2({x:-3,y:1}),
		new Vec2({x:-3,y:2}),
		new Vec2({x:-3,y:3}),

		new Vec2({x:3,y:-3}),
		new Vec2({x:3,y:-2}),
		new Vec2({x:3,y:-1}),
		new Vec2({x:3,y:0}),
		new Vec2({x:3,y:1}),
		new Vec2({x:3,y:2}),
		new Vec2({x:3,y:3}),

		new Vec2({x:-2,y:-3}),
		new Vec2({x:-1,y:-3}),
		new Vec2({x:0,y:-3}),
		new Vec2({x:1,y:-3}),
		new Vec2({x:2,y:-3}),

		new Vec2({x:-2,y:3}),
		new Vec2({x:-1,y:3}),
		new Vec2({x:0,y:3}),
		new Vec2({x:1,y:3}),
		new Vec2({x:2,y:3})
	];

	// Load the following positions around the camera's position when a new area is entered
	var load = [
		new Vec2({x:-2,y:-2}),
		new Vec2({x:-1,y:-2}),
		new Vec2({x:0,y:-2}),
		new Vec2({x:1,y:-2}),
		new Vec2({x:2,y:-2}),

		new Vec2({x:-2,y:-1}),
		new Vec2({x:-1,y:-1}),
		new Vec2({x:0,y:-1}),
		new Vec2({x:1,y:-1}),
		new Vec2({x:2,y:-1}),

		new Vec2({x:-2,y:0}),
		new Vec2({x:-1,y:0}),
		new Vec2({x:0,y:0}),
		new Vec2({x:1,y:0}),
		new Vec2({x:2,y:0}),

		new Vec2({x:-2,y:1}),
		new Vec2({x:-1,y:1}),
		new Vec2({x:0,y:1}),
		new Vec2({x:1,y:1}),
		new Vec2({x:2,y:1}),

		new Vec2({x:-2,y:2}),
		new Vec2({x:-1,y:2}),
		new Vec2({x:0,y:2}),
		new Vec2({x:1,y:2}),
		new Vec2({x:2,y:2})
	]

	this.set = function(options){
		this.quadrants = [];
	}

	this.init = function(seed)
	{
		Universe.simplex = new SimplexNoise(new Alea(seed));
		this.currentPos = this.getQuadrantPosition(GameScene.camera.position);
		this.loadQuadrants();
	}

	this.update = function()
	{
		// Quadrant loading and unloading
		newPos = this.getQuadrantPosition(GameScene.camera.position);
		if(!this.currentPos.equal(newPos)){
			this.currentPos = newPos;
			this.loadQuadrants();
		}

		// Updating Quadrants
		if(this.quadrants != []){
			for(var i = 0; i < load.length; i++){
				x = this.currentPos.x + load[i].x;
				y = this.currentPos.y + load[i].y;
				if(this.quadrants[x] != undefined && this.quadrants[x] != null){
					if(this.quadrants[x][y] != undefined && this.quadrants[x][y] != null){
						this.quadrants[x][y].update();
					}
				}
			}
		}
	}

	this.draw = function()
	{
		if(this.quadrants != []){
			for(var i = 0; i < load.length; i++){
				x = this.currentPos.x + load[i].x;
				y = this.currentPos.y + load[i].y;
				if(this.quadrants[x] != undefined && this.quadrants[x] != null){
					if(this.quadrants[x][y] != undefined && this.quadrants[x][y] != null){
						this.quadrants[x][y].draw();
					}
				}
			}
		}
	}

	this.getQuadrantPosition = function(pos)
	{
		return new Vec2({x: Math.floor(pos.x / Universe.quadSize), y: Math.floor(pos.y / Universe.quadSize)});
	}

	this.loadQuadrants = function(){
		/*
		Ensure all quadrands in and around what the camera can see are loaded.
		C = current position, U = Unload, L = Load if not loaded
		[U][U][U][U][U][U][U]
		[U][L][L][L][L][L][U]
		[U][L][L][L][L][L][U]
		[U][L][L][C][L][L][U]
		[U][L][L][L][L][L][U]
		[U][L][L][L][L][L][U]
		[U][U][U][U][U][U][U]
		*/

		// Load Quadrants if they are not already loaded
		for(var i = 0; i < load.length; i++){
			// Get the x and y coordinates around the camera
			x = this.currentPos.x + load[i].x;
			y = this.currentPos.y + load[i].y;

			// Create a new quadrant column in memory if one has not previously been loaded
			if(this.quadrants[x] == undefined || this.quadrants[x] == null){
				this.quadrants[x] = [];
			}

			// Load the quadrant into memory if nothing exists yet
			if(this.quadrants[x][y] == undefined || this.quadrants[x][y] == null){
				this.quadrants[x][y] = new Quadrant({x:x,y:y});
				this.quadrants[x][y].init();
			}
		}

		// Onload quadrants no longer needed
		for(var i = 0; i < unload.length; i++){
			x = this.currentPos.x + unload[i].x;
			y = this.currentPos.y + unload[i].y;

			// If the position exists in memory, delete it
			if(this.quadrants[x] != undefined && this.quadrants[x] != null){
				if(this.quadrants[x][y] != undefined && this.quadrants[x][y] != null){
					delete this.quadrants[x][y];
				}
			}
		}
	}

	this.set(options);
}
Universe.quadSize = 500;
