describe('Thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('should have a starting temperature of 20 degrees', function() {
    expect(thermostat.temperature).toEqual(20);
  });

  it('should be able to increase the temperature', function() {
    thermostat.increase
    expect(thermostat.temperature).toEqual(21);
  });

  it('should be able to decrease the temperature', function() {
    thermostat.decrease
    expect(thermostat.temperature).toEqual(19);
  });
});
