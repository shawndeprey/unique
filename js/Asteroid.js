function Asteroid()
{
	this.init = function(options)
	{
		options.image = "img/anomaly/asteroid/asteroid1.png";
		this.set({image: options.image, x: options.x, y: options.y});
	}

	this.update = function()
	{
		
	}
}
Asteroid.prototype = Entity.prototype
//ClassName.prototype.FunctionName.call(this, parameter)