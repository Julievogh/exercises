// const letters = ["a", "b", "c", "d", "e", "f", "g", "h"];

// let firstLetter = letters[0];

// let someLetter = letters[4];

// const anotherLetter = letters[7];

// console.log(letters[4]);

// const newarr = letters;
// newarr[4] = "prut";

// console.log(letters);

// console.log(newarr);

const people = ["Harry", "Ron", "Hermione"];

let result;

result = people.push("Draco");
console.log(result);

people.pop();

result = people.push("Neville");
result = people.push("Luna");

result = people.slice(0, 3);
result = people.splice(1, 0, "Cho");
people[1] = "Ginny";
result = people.push("Fred", "George");

const indexOfFred = people.indexOf("Fred");
console.log(indexOfFred);

result = people.splice(indexOfFred, 1);
console.log(result);

console.log(people);

const str = "abcdefghijklmn";
const arr1 = str.split("");

const str2 = "abcdefghijklmn";
const arr2 = Array.from(str2);

const str3 = "abcdefghijklmn";
const arr3 = [...str3];

console.log(str);
console.log(str2);
console.log(str3);

console.log(arr1);
console.log(arr2);
console.log(arr3);

function greeting(firstname) {
  return `Hello ${firstname}`;
}

const sayHi = greeting;

console.log(sayHi("Julie"));

console.log(greeting("Bob"));

function congreet(firstname) {
  console.log(`Hello ${firstname}`);
}

setTimeout(congreet, 2000, "Julie");

function hire(person) {
  console.log((person.hired = true));
}

function fire(person) {
  person.hired = false;
}

const person3 = {
  firstName: "Harry",
  lastName: "Potter",
  hired: false,
};

console.log(person3);

const person4 = {
  firstName: "Fred",
  lastName: "Weasley",
  hired: false,
};

console.log(person);

hire(person);

function hire2(person4) {
  person.hired = true;
}
