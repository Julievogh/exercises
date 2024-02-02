"use strict";

// Min version

/*
function momsBeregner(momsPercentage = 25, beloeb) {
  beloeb = 3000;

  let beregnMoms = beloeb * momsPercentage;

  console.log(beregnMoms);
}

momsBeregner(25, 100);


// Klaus version:


function momsBeregner2(beloeb, moms) {
  console.log(beloeb + (beloeb * moms) / 100);
}

momsBeregner2(100, 25);


// Klaus version 2:



function momsBeregner3(beloeb, moms = 25) {
  console.log(beloeb + (beloeb * moms) / 100);
}

momsBeregner3(100);



// Klaus version 3:

function momsBeregner4(beloeb, moms = 25) {
  console.log(beloeb + (beloeb * moms) / 100);
}

momsBeregner4(100);

*/
function momsBeregner5(beloeb, moms = 25) {
  return beloeb + (beloeb * moms) / 100;
}

let beregnMoms = momsBeregner5(100);

console.log(beregnMoms);
