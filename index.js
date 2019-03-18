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
  let result = drivers.map(n => n);
  result.sort(function(a, b) {
    return a.revenue - b.revenue;
  });
  return result;
}

const driversByName = function (drivers) {
  let result = drivers.map(n => n);
  result.sort(function(a,b) {
    return a.name.localeCompare(b.name);
  });
  return result;
}

const totalRevenue = function (drivers) {
  let result = 0;
  drivers.forEach(function (driver) {
    result += driver.revenue;
  });
  return result;
}

const averageRevenue = function (drivers) {
  let result = 0;
  let count = drivers.length;
  drivers.forEach(function (driver) {
    result += driver.revenue;
  });
  result = result/count;
  return result;
}
