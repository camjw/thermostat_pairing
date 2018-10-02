$(document).ready(function(){
  var thermostat = new Thermostat();

  $("#temperature").text(thermostat.temperature);
  $("#is_power_saving").text("on.");

  $("#increase_temp").click(function() {
    thermostat.increase();
    $("#temperature").text(thermostat.temperature);
  })

  $("#decrease_temp").click(function() {
    thermostat.decrease();
    $("#temperature").text(thermostat.temperature);
  })

  $("#flip_power_saving").click(function() {
    thermostat.flipPowerSaving();
    if (thermostat.powerSaving) {
      $("#is_power_saving").text("on.");
    }
    else {
      $("#is_power_saving").text("off.");
    }
  })

})
