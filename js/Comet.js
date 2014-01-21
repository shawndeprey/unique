function Comet()
{
	this.init = function(options)
	{
		options.image = "img/anomaly/comet/comet1.png";
		this.set({image: options.image, x: options.x, y: options.y});
	}

	this.update = function()
	{
		
	}
}
Comet.prototype = Entity.prototype
//ClassName.prototype.FunctionName.call(this, parameter)