/*eslint-env browser*/
var milesDriven = window.prompt("how many miles have you driven?");
var gallons = window.prompt("how many gallons of fuel your car hold?");
var mpg = milesDriven / gallons;
document.write(parseInt(mpg, 10));