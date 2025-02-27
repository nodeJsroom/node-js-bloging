const express = require("express");
const app = express();

// 일반 라우터
app.get("/", (req, res) => {
  throw new Error("에러 발생");
});

// 에러 종류에 따른 처리
app.use((err, req, res, next) => {
  if (err instanceof CustomError) {
    res.status(400).send({ error: err.message });
  } else {
    res.status(500).send("server Error!");
  }
});

// 서버 시작
app.listen(3000, () => {
  console.log(`Server is running port 3000!`);
});
