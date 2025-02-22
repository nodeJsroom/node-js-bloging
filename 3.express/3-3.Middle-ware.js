// 요청 로깅 미들웨어
// app.js 파일 생성
const express = require("express");
const app = express();
const port = 3000;

app.use((res, req, next) => {
  console.log(`${req.method} ${req.url}`);
  next(); // 다음 미들웨어 또는 핸들러 진행
});

// 기본 라우트
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// 서버 시작
app.listen(port, () => {
  console.log(`Server is running is at ${port}`);
});
