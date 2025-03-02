const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

// 기본 라우트
app.get("/", (req, res) => {
  res.send("Hello World");
});

// 서버 시작
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
