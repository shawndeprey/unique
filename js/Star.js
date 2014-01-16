function Star(options)
{
	this.set(options);
	this.init = function()
	{
		this.repositionOnX();
		this.repositionOnY();
		this.speed = 100
	}

	this.update = function(xMovement, yMovement)
	{
		this.position.x += xMovement / this.depth;
		this.position.y += yMovement / this.depth;

		// Reposition based on bounds of screen
		if(this.position.x < -6){
			this.position.x = Firestorm.width + 6;
			this.repositionOnY();
		} else
		if(this.position.x > Firestorm.width + 6){
			this.position.x = -6;
			this.repositionOnY();
		}

		if(this.position.y < -6){
			this.position.y = Firestorm.height + 6;
			this.repositionOnX();
		} else
		if(this.position.y > Firestorm.height + 6){
			this.position.y = -6;
			this.repositionOnX();
		}
	}

	this.repositionOnY = function(){
		this.position.y = Math.floor(Math.random()*Firestorm.height) - this.height * 0.5;
	}

	this.repositionOnX = function(){
		this.position.x = Math.floor(Math.random()*Firestorm.width) - this.width * 0.5;
	}
}
Star.prototype = Entity.prototype;