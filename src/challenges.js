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
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList(array2, string1) {
  // seu código aqui
  let arrayObject = [];
  for (let index2 = 0; index2 < array2.length; index2 += 1) {
    arrayObject.push = {
      tech: array2[index2],
      name: string1,
    };
  } return arrayObject;
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
