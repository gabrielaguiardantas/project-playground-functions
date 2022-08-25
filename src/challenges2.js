// Desafio 11
function generatePhoneNumber(arrayphone) {
  // seu código aqui
  let repnumber = 0;
  for (let index = 0; index < arrayphone.length; index += 1) {
    if (arrayphone.indexOf(arrayphone[index]) !== index) {
      repnumber += 1;
      if (repnumber >= 3) {
        console.log('não é possível gerar um número de telefone com esses valores');
      }
    } if (arrayphone.length !== 11) {
      console.log('Array com tamanho incorreto.');
    }
  } return arrayphone;
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
