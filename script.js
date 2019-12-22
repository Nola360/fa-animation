// Break chain animations

function breakChain() {
  let chain = document.getElementById('chain');
  chain.innerHTML = '&#xf0c1;';

  setTimeout(function () {
    chain.innerHTML = '&#xf127';
  }, 1000);
}

breakChain();
// Break Chain Every 2 seconds
setInterval(breakChain, 2000);


// Charge Battery
function chargeBattery() {
  // Emoty battery Case
  let battery = document.getElementById('battery');
  battery.innerHTML = '&#xf244;';
  // 25% filled
  setTimeout(function () {
    battery.innerHTML = '&#xf243;';
  }, 1000)
  // 50% Filled battery
  setTimeout(function () {
    battery.innerHTML = '&#xf242;';
  }, 2000)
  // 75% filled battery
  setTimeout(function () {
    battery.innerHTML = '&#xf241;';
  }, 3000)
  // 100% filled
  setTimeout(function () {
    battery.innerHTML = '&#xf240;';
  }, 4000)
}

// Run animation function
chargeBattery();

// Runs animation every 5 seconds
setInterval(chargeBattery, 5000);


function hourGlassImage() {
  let hourglass = c = document.getElementById('hourglass');
  hourglass.innerHTML = '&#xf251';

  setTimeout(function () {
    hourglass.innerHTML = '&#xf252;';
  }, 1000)

  setTimeout(function () {
    hourglass.innerHTML = '&#xf253;';
  }, 2000)
}

hourGlassImage();
setInterval(hourGlassImage, 3000);


function thermostat() {
  let thermos = document.getElementById('thermos');
  thermos.innerHTML = '&#xf2cb;';
  setTimeout(function () {
    thermos.innerHTML = '&#xf2ca;';
  }, 1000)

  setTimeout(function () {
    thermos.innerHTML = '&#xf2c9;';
  }, 2000)

  setTimeout(function () {
    thermos.innerHTML = '&#xf2c8;';
  }, 3000)

  setTimeout(function () {
    thermos.innerHTML = '&#xf2c7;';
  }, 4000)
}

thermostat();
setInterval(thermostat, 5000)