'use strict';

function pow(x, n) {
  if (n === 0) return 1;
  if (n < 0) return 1 / pow(x, -n);
  return x * pow(x, n - 1);
}

function sumTo(n) {
  return (n * (n + 1)) / 2;
}

function isLeapYear(year) {
  return (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0);
}

function factorial(n) {
  if (n === 0)
    return 1n;
  return BigInt(n) * factorial(n - 1);
}

export function fib(n) {
  let a = 0n;
  let b = 1n;
  for (let i = 0; i < n; i++) {
    let temp = b;
    b = a + b;
    a = temp;
  }
  return a;
}

console.log(fib(0));   // 0n
console.log(fib(100)); // 354224848179261915075n

function compare(x) {
  return function (y) {
    return y > x ? true : y < x ? false : null;
  };
}

function sum(...args) {
  return args.reduce((acc, curr) => acc + curr, 0);
}
