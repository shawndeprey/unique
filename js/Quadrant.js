function Quadrant(options)
{
	this.set = function(options){
		// Position is required for this class
		this.size = Universe.quadSize;
		this.position = new Vec2({x: options.x * this.size, y: options.y * this.size});
		this.anomaly = [];
	}

	this.init = function()
	{
		this.generateAnomolies();
	}

	this.update = function()
	{
		for(var i = 0; i < this.anomaly.length; i++){
			this.anomaly[i].update();
		}
	}

	this.hasAnomalies = function(){
		return (this.anomaly.length != 0);
	}

	this.addAnomaly = function(newAnomaly){
		this.anomaly.push(newAnomaly);
	}

	this.draw = function()
	{
		for(var i = 0; i < this.anomaly.length; i++){
			this.anomaly[i].draw();
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
		newAnomaly = null;

// Value Mapping & Object Density Logic
		if(sVal > 0.3 && sVal < 0.35){
			newAnomaly = new Asteroid();
		} else
		if(sVal > 0.35 && sVal < 0.4){
			newAnomaly = new Blackhole();
		} else
		if(sVal > 0.4 && sVal < 0.45){
			newAnomaly = new StarObj();
		} else
		if(sVal > 0.45 && sVal < 0.5){
			newAnomaly = new Planet();
		} else
		if(sVal > 0.5 && sVal < 0.55){
			newAnomaly = new Comet();
		}

		if(newAnomaly != null){
			newAnomaly.init({x:this.position.x, y:this.position.y});
			newAnomaly.position.x += Math.random() * (this.size - newAnomaly.width);
			newAnomaly.position.y += Math.random() * (this.size - newAnomaly.height);
			this.addAnomaly(newAnomaly);
		}
	}
	this.set(options);
}