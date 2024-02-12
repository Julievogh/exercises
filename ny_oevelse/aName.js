// Man kan sætte ethvert navn ind

const aName = "Peter Heronimous Lind";
const firstName = aName.substring(0, aName.indexOf(" "));

const middleName = aName.substring(
  aName.indexOf(" ") + 1,
  aName.lastIndexOf(" ")
);

const lastName = aName.substring(aName.lastIndexOf(" ") + 1);

console.log("firstName", firstName + " ");
console.log("Name", middleName + " ");
console.log("lastName", lastName + " ");


//Split

const firstNameSplit = aName.split(" ")[0];
console.log("firstNameSplit", firstNameSplit)


const nameArr = aName.split(" ");
const firstNameSplit2 = nameArr[0];

// Kan også skrive [1];
const lastNameSplit2 = nameArr[nameArr.length - 1];

console.log("nameArr", nameArr);
console.log("firstNameSplit2", firstNameSplit2);
console.log("lastNameSplit2", lastNameSplit2);


const aName2 = "LKasjaslkLK";
console.log(aName2.slice(0,2).toLowerCase() +aName2[8].toUpperCase()+aName2.slice(4));


// Prøv det her navn: 

const aName3 = "MoZArt";


/*

Note: Do this exercise in the exercises folder/repository you have made earlier!

Create a capitalization3.html and capitalization3.js - there need only be output to the console!

3caPitalization
Given a single name string in an unknown case, e.g. “peter” or “PETER” - create a new string with the same name, where the third letter is uppercase, and the rest is lowercase. I.e. “peTer”.

Hint: use substring, toUpperCase, toLowerCase and simple string concatenation


Test your code with various crazy combinations of your own name, like “pETer”, “PEter”, “peteR”, “PEtER” and so on.

Make sure that it also works with longer names. Don't worry about names shorter than 3 characters.

 

Important: DO NOT look for solutions online - use the MDN documentation, and find the string methods that will help you. This exercise is about solving an unknown problem, not about finding existing solutions.

 

When complete, add, commit, and also paste the js-code here below.

*/