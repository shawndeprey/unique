function Quadrant(options)
{
	this.set = function(options){
		// Position is required for this class
		this.size = Universe.quadSize;
		this.position = new Vec2({x: options.x * this.size, y: options.y * this.size});
		this.anomaly = null;
	}

	this.init = function()
	{
		this.generateAnomolies();
	}

	this.update = function()
	{
		if(this.anomaly != null){
			this.anomaly.update();
		}
	}

	this.draw = function()
	{
		if(this.anomaly != null){
			this.anomaly.draw();
		}

		Firestorm.context.save();
			if(this.blendMode != undefined){
				Firestorm.context.globalCompositeOperation = this.blendMode;
			}

			Firestorm.context.translate(this.position.x, this.position.y);
			this.flipped && Firestorm.context.scale(-1, 1);
			Firestorm.context.globalAlpha = this.alpha;
			Firestorm.context.translate(-this.left_offset, -this.top_offset);

			// Debug
			if(Firestorm.DEBUG){
				Firestorm.context.globalCompositeOperation = 'lighter';
				Firestorm.context.beginPath();
					Firestorm.context.moveTo(0, 0);
					Firestorm.context.lineTo(this.size, 0);
					Firestorm.context.lineTo(this.size, this.size);
					Firestorm.context.lineTo(0, this.size);
					Firestorm.context.lineTo(0, 0);
					Firestorm.context.lineWidth = 1;
					Firestorm.context.strokeStyle = "#FF0000";
					Firestorm.context.stroke();
				Firestorm.context.closePath();
			}
		Firestorm.context.restore();
	}

	this.getSimplexValue = function()
	{
		return (Universe.simplex.noise2D(this.position.x, this.position.y) * 0.5) + 0.5;
	}

	this.generateAnomolies = function()
	{
		sVal = this.getSimplexValue();
		if(sVal > 0.3 && sVal < 0.4){
			this.anomaly = new Asteroid();
		}

		if(this.anomaly != null){
			this.anomaly.init({x:this.position.x, y:this.position.y});
			this.anomaly.position.x += Math.random() * this.size;
			this.anomaly.position.y += Math.random() * this.size;
		}
	}
	this.set(options);
}