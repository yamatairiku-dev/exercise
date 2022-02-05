'use strict';

module.exports.culc = {
  add: (a,b) => a+b,
  sub: (a,b) => a-b,
  multi: (a,b) => a*b,
  div: (a,b) => a/b
};

module.exports.fact = a => {
  let b = 1;
  for(let i=1; i<=a; i++) {
    b *= i
  };
  return b;
};

module.exports.fact2 = factorialize

function factorialize(num) {
  if (num === 0) { return 1; }
  return num * factorialize(num-1);
};
