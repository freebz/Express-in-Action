// 예제 4.13 파일 전송의 성공 여부 출력하기

res.sendFile(filePath, function(err) {
  if (err) {
    console.error("File failed to send.");
  } else {
    console.log("File sent!");
  }
});
