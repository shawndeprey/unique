function Blackhole()
{
	this.init = function(options)
	{
		options.image = "img/anomaly/blackhole/blackhole1.png";
		this.set({image: options.image, x: options.x, y: options.y});
	}

	this.update = function()
	{
		
	}
}
Blackhole.prototype = Entity.prototype
//ClassName.prototype.FunctionName.call(this, parameter)