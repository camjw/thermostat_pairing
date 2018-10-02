describe('Thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('should have a starting temperature of 20 degrees', function() {
    expect(thermostat.temperature).toEqual(20);
  });

  it('should be able to increase the temperature', function() {
    thermostat.increase()
    expect(thermostat.temperature).toEqual(21);
  });

  it('should be able to decrease the temperature', function() {
    thermostat.decrease()
    expect(thermostat.temperature).toEqual(19);
  });

  it('should have a minimum temperature of 10 degrees', function() {
    expect(thermostat.MINIMUM).toEqual(10);
  });

  it("shouldn't decrease temp below the minimum", function() {
    thermostat.temperature = thermostat.MINIMUM;
    expect(function() {
      thermostat.decrease();
    }).toThrowError("Can't go below minimum temp");
  });

  it('has a power saving mode which is on by default', function() {
    expect(thermostat.powerSaving).toEqual(true)
  })

  it('can turn power saving mode off', function() {
    thermostat.flipPowerSaving()
    expect(thermostat.powerSaving).toEqual(false)
  })
});
