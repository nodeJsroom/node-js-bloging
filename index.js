const http = require("http");

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello, Worlsds! \n");
});

server.listen(8500, "127.0.0.1", () => {
  console.log("Server running at http://127.0.0.1:8500/");
});

const fs = require("fs");

fs.readFile("file.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log(data);
});
