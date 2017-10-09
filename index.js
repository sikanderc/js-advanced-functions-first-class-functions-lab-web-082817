// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers) {return [drivers[0], drivers[1]];}

const returnLastTwoDrivers = function (drivers) {return drivers.slice(-2);}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function (integer) { return function (fare) {return integer * fare;}}

function fareDoubler(integer) { return integer * 2; }

function fareTripler(integer) { return integer * 3; }

function selectDifferentDrivers(arrayOfDrivers, aFunc) {return aFunc(arrayOfDrivers);}
