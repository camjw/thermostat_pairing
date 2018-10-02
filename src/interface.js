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

  $('#update_temp').click(function() {
    var location = $('#location').val()
    console.log(location)
    $.get('https://api.openweathermap.org/data/2.5/weather?q='+location+'&appid=e911065bc54820857eac371350815d0b', function(data) {
      $('#current_temp').text(data.main.temp - 273.15);
    })
  })



})
