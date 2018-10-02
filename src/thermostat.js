function Thermostat() {
  this.temperature = 20;
  this.MINIMUM = 10;
  this.powerSaving = true;
}

Thermostat.prototype.increase = function() {
  this.temperature += 1;
};

Thermostat.prototype.decrease = function() {
  this.temperature -= 1;
  if (this.temperature < this.MINIMUM) {
    throw new Error("Can't go below minimum temp");
    this.temperature = this.MINIMUM
  }
};

Thermostat.prototype.flipPowerSaving = function() {
  if (this.powerSaving) {
    this.powerSaving = false
  } else {
    this.powerSaving = true
  }
}
