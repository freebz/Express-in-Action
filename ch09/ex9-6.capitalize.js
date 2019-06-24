// 예제 9.6 새로운 capitalize.js

function capitalize(str) {
  var firstLetter = str.charAt(0).toUpperCase();
  var rest = str.slice(1).toLowerCase();
  return firstLetter + rest;
}

module.exports = capitalize;
