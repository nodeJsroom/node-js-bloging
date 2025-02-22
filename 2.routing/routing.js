// routing.js
const http = require("http");

// 서버 생성
const server = http.createServer((req, res) => {
  // URL 요청에 따라 라우팅
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("This HomePage \n");
  } else if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("This is About \n");
  } else if (req.url === "/contract") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("This is Contract");
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 Not Found");
  }
});

// 서버 실행
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`server is running: ${PORT}`);
});
