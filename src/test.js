// Desafio 13
function hydrate(drinkString) {
    // seu código aqui
    let drinkString1 = /\d+/g;
    let drinkString2 = drinkString.match(drinkString1);
    let drinkString3 = Array.from(drinkString2);
    function simpleArraySum(ar) {
      var sum = 0;
      for (var i = 0; i < ar.length; i += 1) {
        sum += ar[i];
      }
      return sum;
    } if (simpleArraySum(drinkString3) > 1) {
      return `${simpleArraySum(drinkString3)} copos de água`;
    } return `${simpleArraySum(drinkString3)} copo de água`;
  }