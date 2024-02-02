"use strict";

// Areal af rektangel

function udregnRektangelAreal(width, height) {
  let areal = width * height;
  return areal;
}

console.log(`Arealet er ${udregnRektangelAreal(500, 300)}`);

// From sqM to sqF
function convertSquareMToSquareFt(sqMeter) {
  let fromSMtoSF = 10.76 * sqMeter;
  return fromSMtoSF;
}

const sqMeterToConvert = 23;
console.log(
  `Hvis du har ${sqMeterToConvert} m2, så er resultatet er ${convertSquareMToSquareFt(
    sqMeterToConvert
  )}`
);
