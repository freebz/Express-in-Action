// 예제 6.3 에러 핸들러 자세히 살펴보기

if (isNaN(min) || isNaN(max)) {
  res.status(400);
  res.json({ error: "Bad request." });
  return;
}
