// Desafio 1
function compareTrue(boolean1, boolean2) {
  // seu código aqui
  if (boolean1 === boolean2 && boolean1 === true) {
    return true;
  } return false;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  return string.split(' ');
}

// Desafio 4
function concatName(array) {
  // seu código aqui
  let arrayconcat = `${array[array.length - 1]}, ${array[0]}`;
  return arrayconcat;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let Totalpoints = 3 * wins + ties;
  return Totalpoints;
}

// Desafio 6
function highestCount(numbersarray) {
  // seu código aqui
  const highestnumber = Math.max(...numbersarray);
  let highestCounter = 0;
  for (let index = 0; index < numbersarray.length; index += 1) {
    if (highestnumber === numbersarray[index]) {
      highestCounter += 1;
    }
  } return highestCounter;
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
