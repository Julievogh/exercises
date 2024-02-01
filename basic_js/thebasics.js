"use strict";

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