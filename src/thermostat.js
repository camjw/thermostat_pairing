function Thermostat() {
  this.temperature = 20;
  this.MINIMUM = 10;
  this.powerSaving = true;
}

Thermostat.prototype.increase = function() {
  this.temperature += 1;
  if (this.temperature > this.maximum()) {
    throw new Error("Can't go above maximum temp");
    this.temperature = this.maximum()
  }
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

Thermostat.prototype.maximum = function() {
  if (this.powerSaving) {
    return 25
  } else {
    return 32
  }
}
