// Code your solution in this file!
const logDriverNames = function (drivers) {
  drivers.forEach(function(el) {
    console.log(el.name);
  });
}

const logDriversByHometown = function (drivers, location) {
  drivers.forEach(function(driver) {
    if (driver.hometown === location) {
      console.log(driver.name);
    }
  });
}

const driversByRevenue = function (drivers) {
  let result = drivers;
  result.sort(function(a.revenue, b.revenue) {
    return a-b;
  });
  return result;
}
