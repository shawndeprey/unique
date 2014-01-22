function Field()
{
	this.init = function(options)
	{
		options.image = "img/anomaly/field/"+(["emp","radiation","rock","ice"])[Math.floor(Math.random() * 4)]+"_field1.png";
		this.set({image: options.image, x: options.x, y: options.y});
		size = (Math.random() * 100) + 100;
		this.height = size;
		this.width = size;
	}

	this.update = function()
	{
		
	}
}
Field.prototype = Entity.prototype
//ClassName.prototype.FunctionName.call(this, parameter)