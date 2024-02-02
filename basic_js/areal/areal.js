"use strict";

// Areal af rektangel

function udregnRektangelAreal(width, height) {
  let areal = width * height;
  return areal;
}

console.log(`Arealet er ${udregnRektangelAreal(500, 300)}`);

// From sqM to sqF
function convertSquareMToSquareFt(sqMeter) {
  return 10.76 * sqMeter;
}

const sqMeterToConvert = 23;
console.log(
  `Hvis du har ${sqMeterToConvert} m2, så er resultatet er ${convertSquareMToSquareFt(
    sqMeterToConvert
  )}`
);

const arealToSquareFeet = convertSquareMToSquareFt(
  udregnRektangelAreal(500, 300)
);
console.log(arealToSquareFeet);
