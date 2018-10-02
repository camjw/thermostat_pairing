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
  };
};

Thermostat.prototype.reset = function() {
  this.temperature = 20
}

Thermostat.prototype.usage = function() {
  if (this.temperature < 18) {
    return 'Low usage'
  } else if (this.temperature < 25) {
    return 'Medium usage'
  }
  else {
    return 'High usage'
  };
};
