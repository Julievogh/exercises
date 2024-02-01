function momsberegner(momsPercentage = 25, beloeb) {
  beloeb = 3000;

  let beregnMoms = beloeb * momsPercentage;

  console.log(beregnMoms);
}

momsberegner(25, 1000);
