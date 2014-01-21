function StarObj()
{
	this.init = function(options)
	{
		options.image = "img/anomaly/star/star1.png";
		this.set({image: options.image, x: options.x, y: options.y});
		size = (Math.random() * 250) + 250;
		this.height = size;
		this.width = size;
	}

	this.update = function()
	{
		
	}
}
StarObj.prototype = Entity.prototype
//ClassName.prototype.FunctionName.call(this, parameter)