// app.js 파일 생성
const express = require("express");
const app = express();
const port = 3000;

// Default Route Setting
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// Server Start
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
