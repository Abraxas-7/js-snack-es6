function sottoarray(fnArray, min, max) {
  let sottoInsieme = [];

  for (let i = min; i <= max; i++) {
    sottoInsieme.push(fnArray[i]);
  }

  return sottoInsieme;
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let myArray = [];

for (let i = 0; i < 100; i++) {
  myArray.push(getRandomNumber(1, 100));
}

let a,b;

do {
    a = getRandomNumber(0, 100);
    b = getRandomNumber(0, 100);
}   while (a > b);


console.log(a, b);
console.log(sottoarray(myArray, a, b));



