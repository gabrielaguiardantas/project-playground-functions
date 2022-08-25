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
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let distance1 = Math.abs(cat1 - mouse);
  let distance2 = Math.abs(cat2 - mouse);
  if (distance1 > distance2) {
    return 'cat2';
  } if (distance1 === distance2) {
    return 'os gatos trombam e o rato foge';
  } return 'cat1';
}
// Desafio 8
function fizzBuzz(numbersarray2) {
  // seu código aqui
  let arrayFizzBuzz = [];
  for (let index1 = 0; index1 < numbersarray2.length; index1 += 1) {
    if (numbersarray2[index1] % 3 === 0 && numbersarray2[index1] % 5 === 0) {
      arrayFizzBuzz.push('fizzBuzz');
    } else if (numbersarray2[index1] % 3 === 0 && numbersarray2[index1] % 5 !== 0) {
      arrayFizzBuzz.push('fizz');
    } else if (numbersarray2[index1] % 5 === 0 && numbersarray2[index1] % 3 !== 0) {
      arrayFizzBuzz.push('buzz');
    } else {
      arrayFizzBuzz.push('bug!');
    }
  } return arrayFizzBuzz;
}
// Desafio 9
function encode(encString) {
  // seu código aqui
  let encodedString = [];
  for (let index2 = 0; index2 < encString.length; index2 += 1) {
    if (encString[index2] === 'a') {
      encodedString.push('1');
    } else if (encString[index2] === 'e') {
      encodedString.push('2');
    } else if (encString[index2] === 'i') {
      encodedString.push('3');
    } else if (encString[index2] === 'o') {
      encodedString.push('4');
    } else if (encString[index2] === 'u') {
      encodedString.push('5');
    } else {
      encodedString.push(encString[index2]);
    }
  }
  let encodedString2 = encodedString.join(''); 
  return encodedString2;
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
