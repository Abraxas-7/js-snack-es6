function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const squadre = [
  {
    nome: "Milan",
    punti: 0,
    falliSubiti: 0,
  },
  {
    nome: "Inter",
    punti: 0,
    falliSubiti: 0,
  },
  {
    nome: "Roma",
    punti: 0,
    falliSubiti: 0,
  },
  {
    nome: "Juventus",
    punti: 0,
    falliSubiti: 0,
  },
];

const puntiMin = 0;
const puntiMax = 50;
const falliMin = 0;
const falliMax = 5;

for (let i = 0; i < squadre.length; i++) {
  squadre[i].punti = getRandomNumber(puntiMin, puntiMax);
  squadre[i].falliSubiti = getRandomNumber(falliMin, falliMax);
}


let fallisquadre = [];

for (let i = 0; i < squadre.length; i++) {
  fallisquadre.push(squadre[i].nome, squadre[i].falliSubiti);
}

let elUl = document.getElementById("listaSquadre");

for (let i = 0; i < squadre.length; i++) {
  let elLi = document.createElement("li");
  elLi.innerHTML = `${squadre[i].nome} - Falli subiti: ${squadre[i].falliSubiti}`;
  elUl.appendChild(elLi);
}
    

console.log(elUl);