function Quadrant(options)
{
	this.set = function(options){
		// Position is required for this class
		this.position = new Vec2({x: options.x, y: options.y});
		this.size = options.size || Universe.baseSize;
	}

	this.init = function(seed)
	{
	}

	this.update = function()
	{
		
	}

	this.draw = function()
	{
		
	}
	this.set(options);
}