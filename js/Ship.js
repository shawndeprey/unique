function Ship(options)
{
	this.set(options);
	this.init = function()
	{
		this.speed = 500;
	}

	this.update = function()
	{
		if(Firestorm.input.held('up',true)) this.position.addVec(new Vec2({x:0, y:(this.speed * Firestorm.clock.getDelta()) * -1}));
		if(Firestorm.input.held('down',true)) this.position.addVec(new Vec2({x:0, y:(this.speed * Firestorm.clock.getDelta())}));
		if(Firestorm.input.held('left',true)) this.position.addVec(new Vec2({y:0, x:(this.speed * Firestorm.clock.getDelta()) * -1}));
		if(Firestorm.input.held('right',true)) this.position.addVec(new Vec2({y:0, x:(this.speed * Firestorm.clock.getDelta())}));
	}
}
Ship.prototype = Entity.prototype;