// Desafio 11
function generatePhoneNumber(arrayphone) {
  // seu código aqui
  let phonenumber = arrayphone.slice(2 , 11);
  let phonenumber1 = phonenumber.splice(5, 0, '-');
  let phonenumber2 = phonenumber.unshift(arrayphone[0], arrayphone[1]);
  let phonenumber3 = phonenumber.unshift('(');
  let phonenumber4 = phonenumber.splice(3, 0, ')');
  let phonenumber5 = phonenumber.splice(4, 0, '');
  let phonenumber6 = phonenumber.join('');
  let repnumber = 0;
  if (arrayphone.length !== 11) {
    return 'Array com tamanho incorreto.';
  } for (let index = 0; index < arrayphone.length; index += 1) {
    if (arrayphone[index] > 9 || arrayphone[index] < 0) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    if (arrayphone.indexOf(arrayphone[index]) !== index) {
      repnumber += 1;
      if (repnumber >= 3) {
        return 'não é possível gerar um número de telefone com esses valores';
      }
    } //aqui adicionarei o código para phone
  } return phonenumber6;
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
