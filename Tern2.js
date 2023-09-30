let a = Math.floor(Math.random() * 20) + 1;
function manyChecks() {
  console.log(`a = ${a}`);

  return (
    (a > 10
      ? 'a is bigger than 10'
      : 'a is less than or equal to 10 ' +
        (a === 5 ? 'an example of a special case' : '')) +
    (a === 15 ? 'but a is not 15' : '') +
    (a > 5 ? 'and a is greater than 5' : 'and a is less than or equal to 5 ') +
    (a % 2 ? ' and a is odd' : ' and a is even ')
  );
}

// manyChecks();

// условие с условным (тернарным) оператором перевести в if...else И switch()
// результат выводить в консоль, с пощью console.log()

// Решение

function newManyChecks() {
  function step1() {
    if (a > 10) {
      return 'a is bigger than 10';
    }
    return 'a is less than or equal to 10';
  }

  function step2(step1) {
    switch (a) {
      case 5:
        return step1 + ' an example of a special case';
      case 15:
        return step1 + ' but a is not 15';
      default:
        return step1;
    }
  }

  function step3(step2) {
    if (a > 5) {
      return step2 + ' and a is greater than 5';
    }
    return step2 + ' and a is less than or equal to 5';
  }

  function step4(step3) {
    if (a % 2) {
      return step3 + ' and a is odd';
    }
    return step3 + ' and a is even';
  }
  return step4(step3(step2(step1())));
}

console.log(manyChecks());
console.log(newManyChecks());
