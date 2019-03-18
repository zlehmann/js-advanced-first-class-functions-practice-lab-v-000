// Code your solution in this file!
function logDriverNames (drivers) {
  drivers.forEach(function(el) {
    console.log(el.name);
  });
}

const logDriversByHometown = function (drivers, location) {
  drivers.forEach(function(driver, loc) {
    if (loc === location) {
      console.log(driver.name);
    }
  });
}