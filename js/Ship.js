function Ship(options)
{
	this.set(options);
	this.init = function()
	{
		// Weapon Attributes
		this.weaponLevel = 1; // this should be hard to get a good mutation on
		this.coneSize = 75; // degrees
		this.fireRate = 200; // in milliseconds
		this.weaponDamage = 5; // Arbitrary numbers
		this.weaponType = 1; // This does not just go up. It should mutate between 1 & n at random chance.
		this.numberOfWeapons = 1; // Mutate between 1 - 4

		// Defensive Attributes
		this.life = 10;
		// Radiation Shield
		this.baseRadiationShieldLife = 10;
		this.radiationShieldLevel = 1;
		this.radiationShieldLife = this.baseRadiationShieldLife * this.radiationShieldLevel;
		this.baseRadiationShieldRegenRate = 1;
		this.radiationShieldRegenRate = this.baseRadiationShieldRegenRate * this.radiationShieldLevel;
		this.radiationShieldRebuildWaitTime = 2000; // In Milliseconds
		this.baseRadiationShieldRebuildRate = 100; // In Milliseconds
		this.radiationShieldRebuildRate = this.radiationShieldLevel * this.baseRadiationShieldRebuildRate;
		// Physical Shield
		this.basePhysicalShieldLife = 10;
		this.physicalShieldLevel = 1;
		this.physicalShieldLife = this.basePhysicalShieldLife * this.physicalShieldLevel;
		this.basePhysicalShieldRegenRate = 1;
		this.physicalShieldRegenRate = this.basePhysicalShieldRegenRate * this.physicalShieldLevel;
		this.physicalShieldRebuildWaitTime = 2000; // In Milliseconds
		this.basePhysicalShieldRebuildRate = 100; // In Milliseconds
		this.physicalShieldRebuildRate = this.physicalShieldLevel * this.basePhysicalShieldRebuildRate;
		// Heat Shield
		this.baseHeatShieldLife = 10;
		this.heatShieldLevel = 1;
		this.heatShieldLife = this.baseHeatShieldLife * this.heatShieldLevel;
		this.baseHeatShieldRegenRate = 1;
		this.heatShieldRegenRate = this.baseHeatShieldRegenRate * this.heatShieldLevel;
		this.heatShieldRebuildWaitTime = 2000; // In Milliseconds
		this.baseHeatShieldRebuildRate = 100; // In Milliseconds
		this.heatShieldRebuildRate = this.heatShieldLevel * this.baseHeatShieldRebuildRate;
		// Hull
		this.baseHullLife = 10;
		this.hullLevel = 1;
		this.hullLife = this.baseHullLife * this.hullLevel;
		this.baseHullRegenRate = 1;
		this.hullRegenRate = this.baseHullRegenRate * this.hullLevel;
		this.hullRebuildWaitTime = 2000; // In Milliseconds
		this.baseHullRebuildRate = 100; // In Milliseconds
		this.hullRebuildRate = this.hullLevel * this.baseHullRebuildRate;
		// EMP Shield
		this.baseEmpShieldLife = 10;
		this.empShieldLevel = 1;
		this.empShieldLife = this.baseEmpShieldLife * this.empShieldLevel;
		this.baseEmpShieldRegenRate = 1;
		this.empShieldRegenRate = this.baseEmpShieldRegenRate * this.empShieldLevel;
		this.empShieldRebuildWaitTime = 2000; // In Milliseconds
		this.baseEmpShieldRebuildRate = 100; // In Milliseconds
		this.empShieldRebuildRate = this.empShieldLevel * this.baseEmpShieldRebuildRate;

		// Maneuvering Attributes
		this.baseSpeed = 250;
		this.engineType = 1; // This should mutate between 1 & n at random chance;
		this.speed = this.baseSpeed * this.engineType; // Speed tied to engine type and base speed
		this.baseTurnSpeed = 200;
		this.turnEngineType = 1; // This should mutate between 1 & n at random chance;
		this.turnSpeed = this.baseTurnSpeed * this.turnEngineType; // Turn Speed tied to turn engine type and base turn speed
		this.baseAcceleration = 10;
		this.acceleration = this.baseAcceleration * this.engineType; // Acceleration also tied to engine type
		this.landingLevel = 1; // How good the ship is at landing on a planet
		this.evacuationLevel = 1; // How good the ship is at evacuating a planet

		// Discovery Attributes
		this.radarLevel = 1;
		this.baseSightDistance = 500;
		this.sightDistance = this.radarLevel * this.baseSightDistance;

		// Human Survival
		this.foodLevel = 1;
		this.humansNeededToOperate = 1; // Humans need food to work. 1 human to 1 food level.
		this.robotWorkers = 0; // Robots do not need food to work

		// Utility (for use outside genetic mutations)
		// Number of Ships (Chance to Get Positive evolutionary trait increases)

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