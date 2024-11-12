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

// Creo un array contenente 100 numeri random tra 1 e 100
let myArray = [];

for (let i = 0; i < 100; i++) {
  myArray.push(getRandomNumber(1, 100));
}

// Genero due numeri random per l'intervallo
let a,b;

do {
    a = getRandomNumber(0, 100);
    b = getRandomNumber(0, 100);
}   while (a > b);

// Stampo l'array iniziale, l'intervallo e il mio array
console.log(myArray);
console.log(`Intervallo: [${a}, ${b}]`);
console.log(sottoarray(myArray, a, b));

