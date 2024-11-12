// Trova la bici con il peso minore e stampa la sua marca e peso
const biciclette = [
  {
    marca: "Trek",
    peso: 11,
  },
  {
    marca: "Cannondale",
    peso: 8,
  },
  {
    marca: "Scott",
    peso: 10,
  },
  {
    marca: "Specialized",
    peso: 9,
  },
  {
    marca: "Giant",
    peso: 12,
  },
];

let min = biciclette[0].peso;
let indiceBici = 0;

for (let i = 1; i < biciclette.length; i++) {
  if (biciclette[i].peso < min) {
    min = biciclette[i].peso;
    indiceBici = i;
  }
}

let risposta = document.getElementById("risposta");

risposta.innerHTML = `${biciclette[indiceBici].marca}, con un peso di ${min}kg`;
