let a = Math.floor(Math.random() * 100);
(a > 10 ? a : a * 2) > 5
  ? 2 * a + 1
  : (a < 3 ? 1 : 2 * (a - 2)) > 4
  ? 5
  : a % 2 == 0
  ? 6
  : 7;

// условие с условным (тернарным) оператором перевести в if...else И switch()
// результат выводить в консоль, с пощью console.log()

// Решение

function fun(a) {
  let c;
  if (a > 10) {
    c = a;
  } else {
    c = a * 2;
  }
  if (c > 5) {
    c = 2 * c + 1;
  } else {
    if (c < 3) {
      c = 1;
    } else {
      c = 2 * (c - 2);
    }
  }
  if (c > 4) {
    c = 5;
  } else {
    if (c % 2 == 0) {
      c = 6;
    } else {
      c = 7;
    }
  }
  return c;
}

console.log(fun(a));
