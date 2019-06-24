// 예제 9.1 capitalize 함수의 첫 번째 버전 (capitalize.js)

function capitalize(str) {
  var firstLetter = str[0].toUpperCase();
  var rest = str.slice(1).toLowerCase();
  return firstLetter + rest;
}

module.exports = capitalize;
