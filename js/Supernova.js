function Supernova()
{
	this.init = function(options)
	{
		options.image = "img/anomaly/supernova/supernova1.png";
		this.set({image: options.image, x: options.x, y: options.y});
		size = (Math.random() * 100) + 100;
		this.height = size;
		this.width = size;
	}

	this.update = function()
	{
		
	}
}
Supernova.prototype = Entity.prototype
//ClassName.prototype.FunctionName.call(this, parameter)