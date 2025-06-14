const returnFirstTwoDrivers = (drivers) => {
  return drivers.slice(0, 2);
}
const returnLastTwoDrivers = (drivers) => {
  return drivers.slice(-2);
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
const createFareMultiplier = (multiplier) => {
  return function(fare) {
    return fare * multiplier;
  }
}
const fareDoubler = (fare) => {
  return createFareMultiplier(2)(fare);
}
const fareTripler = (fare) => {
  return createFareMultiplier(3)(fare);
}
 const selectDifferentDrivers = (drivers, fn) => {
  return fn(drivers);
}