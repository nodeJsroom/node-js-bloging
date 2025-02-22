// server.js
const http = require("http");

// 서버 생성
const server = http.createServer((req, res) => {
  // 응답 헤더 설정
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello, Worlds!\n");
});

// 서버 실행
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`server is running http://localhost:${PORT}`);
});
