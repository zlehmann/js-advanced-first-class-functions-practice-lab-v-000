function logDriverNames(drivers){
  drivers.forEach((driver)=> {
    console.log(driver.name)
  })
}

function logDriversByHometown(drivers, hometown){
  drivers.forEach((driver)=> {
    if(driver.hometown == hometown){
      console.log(driver.name)
    }
  })
}

function driversByRevenue(drivers){
  let sorted = drivers.sort((driverOne, driverTwo) => {
    return driverOne.revenue - driverTwo.revenue
  })
  return sorted
}

function driversByName(drivers){
  let sorted = drivers.sort((driverOne, driverTwo) => {
    return driverOne.name.localeCompare(driverTwo.name)
  })
  return sorted
}

function totalRevenue(drivers){
  return drivers.reduce(function(previous, currentDriver){
    return currentDriver.revenue + previous
  }, 0)
}

function averageRevenue(drivers){
  return totalRevenue(drivers) / drivers.length
}
