// 예제 6.10 HTTP 상태 코드 설정과 JSON 전송

res.status(404).json({ error: "Response not found!" });

// 다음 코드와 같다.
res.status(404);
res.json({ error: "Response not found!" });
