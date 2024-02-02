"use strict";

/*

Øvelser

const bool = true;
const num = 41;
const str = "Julie";
const obj = {
  hands: 2,
  dogs: 1,
};
const nothing = null;
let undf;
const sym = Symbol("symbol");

/* Brug typeof til at finde ud af typen af en værdi. */

/*
let hej = "prut";

const n1 = 1;
const n2 = 2;

const s1 = "1";
const s2 = "2";

console.log(n1 + n2);
console.log(s1 + s2);

console.log(n1 + s2);
console.log(s1 + n2);

const value = "true";

if (value) {
  console.log("Value is truthy");
} else {
  console.log("Value is falsy");
}

function sayHello(firstName, lastName) {
  console.log(`Hello ${firstName} ${lastName}`);
}

sayHello();

function presentPet(firstName, animalType, animalName) {
  console.log(
    `My name is ${firstName}, I have a ${animalType} called ${animalName}`
  );
}

presentPet("Julie", "dog", "Mozart");

console.log("Helllo", presentPet);


/*

Original:

function greeting(firstName) {
  return `Hello ${firstName}`;
}

const result = greeting("Klaus");
console.log(result);
*/

/*

test 

function greeting(firstName) {
  return `Hello ${firstName}`;
}

const result = greeting("Klaus");
const txt = `Greeting is ${greeting("a name")}`;
console.log(greeting("any name"));
*/

// Areal af rektangel
/*
function udregnRektangelAreal(width, height) {
  let rektangelResult = width * height;

  console.log(`Arealet af en rektangel er  ${rektangelResult}`);
}

udregnRektangelAreal(500, 200);

// ELLER

/*

function udregnRektangelAreal(width, height) {
  let rektangelResult = width * height;
  return rektangelResult;
}

let resultatRAreal = udregnRektangelAreal(700, 200);

console.log(`Arealet af en rektangel er  ${resultatRAreal}`);

//
// fra msquaremeter til squarefeet

function convertSquareMToSquareFit(squareMeter, squareFeet = 10.7639104) {
  let result = squareMeter * squareFeet;

  console.log(
    `if you have ${squareMeter} square meter you have ${result} square feet`
  );
}

convertSquareMToSquareFit(23);

// ELLER:





function convertSquareMToSquareFit(squareMeter, squareFeet = 10.7639104) {
  let result = squareMeter * squareFeet;
  return result; returned to the caller
}

areaInSquareFeet
let areaInSquareFeet = convertSquareMToSquareFit(23);


console.log(`If you have 23 square meters, you have ${areaInSquareFeet} square feet`);




