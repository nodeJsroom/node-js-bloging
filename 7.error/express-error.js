const express = require("express");
const app = express();

// 일반 라우터
app.get("/", (req, res) => {
  throw new Error("에러 발생");
});

// 에러 처리 미들웨어
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Server Error!");
});

// 서버 시작
app.listen(3000, () => {
  console.log(`Server is running port 3000!`);
});
