// Areal af rektangel
/*
function udregnRektangelAreal(width, height) {
  let rektangelResult = width * height;

  console.log(`Arealet af en rektangel er  ${rektangelResult}`);
}

udregnRektangelAreal(500, 200);
*/
// ELLER

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
  
  /*
  
  
  function convertSquareMToSquareFit(squareMeter, squareFeet = 10.7639104) {
    let result = squareMeter * squareFeet;
    return result; returned to the caller
  }
  
  areaInSquareFeet
  let areaInSquareFeet = convertSquareMToSquareFit(23);
  
  
  console.log(`If you have 23 square meters, you have ${areaInSquareFeet} square feet`);
  
  
  */


  


