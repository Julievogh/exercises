console.log("create basic files");


const person1 = {
    firstName: "Julie",
    age: 25,
    student: true,
  };
  
  console.log(person1);
  
  person1.age++;
  
  console.log(person1);
  
  
  const person2 = person1;
  
  person2.firstName = "Bob";
  
  console.log(person1.firstName);
  
  
  const student1 = {
    firstName: "Harry",
    lastName: "Potter",
  };
  
  const student2 = {
    firstName: "Harry",
    lastName: "Potter",
  };
  
  
  student1.firstName = student2.firstName;
  student1.lastName = student2.lastName;
  
  
  if (student1 === student2) {
    console.log("They are the same person");
  } else {
    console.log("They are not the same person");  
  }
  
  
  console.log(student1);
  