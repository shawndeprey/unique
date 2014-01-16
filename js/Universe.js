function Universe(options)
{
	this.set = function(options){
		this.quadSize = options.quadSize || Universe.baseSize;
		this.quadrants = [];
	}

	this.init = function(seed)
	{
		Universe.simplex = new SimplexNoise(new Alea(seed)); // Universe.simplex.noise2D(x, y);
		this.currentPos = this.getQuadrantPosition(GameScene.camera.position);
		this.loadQuadrants();
	}

	this.update = function()
	{
		newPos = this.getQuadrantPosition(GameScene.camera.position);
		if(!this.currentPos.equal(newPos)){
			this.currentPos = newPos;
			this.loadQuadrants();
		}
	}

	this.draw = function()
	{
		if(this.quadrants != []){

		}
	}

	this.getQuadrantPosition = function(pos)
	{
		return new Vec2({x: Math.floor(pos.x / this.quadSize), y: Math.floor(pos.y / this.quadSize)});
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

	}

	this.set(options);
}

Universe.baseSize = 500;