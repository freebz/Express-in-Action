// 예제 2.9 random-integer.js

var MAX = 100;

function randomInteger() {
  return Math.floor((Math.random() * MAX));
}

module.exports = randomInteger;
