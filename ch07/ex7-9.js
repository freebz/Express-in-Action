// 예제 7.9 EJS 필터를 추가해 배열 합산하기

ejs.filters.sum = function(arr) {
  var result = 0;
  for (var i = 0; i < arr.length; i++) {
    result += arr[i];
  }
  return result;
};
