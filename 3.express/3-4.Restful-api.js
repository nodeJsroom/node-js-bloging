const express = require("express");
const app = express();
const port = 3000;

app.use(express.json()); // JSON 요청 본문 파싱

let users = []; // 사용자 데이터를 저장할 배열

// 사용자 목록 조회
app.get("/api/users", (req, res) => {
  res.json(users);
});

// 사용자 추가
app.post("/api/users", (req, res) => {
  const user = req.body;
  users.push(user);
  res.status(201).json(user); // 생성된 사용자 반환
});

// 사용자 조회
app.get("/api/users/:id", (req, res) => {
  const user = users.find((u) => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).send("User not found");
  res.json(user);
});

// 사용자 수정
app.put("/api/users/:id", (req, res) => {
  const userIndex = users.findIndex((u) => u.id === parseInt(req.params.id));
  if (userIndex === -1) return res.status(404).send("User not found");

  users[userIndex] = req.body;
  res.json(users[userIndex]);
});

// 사용자 삭제
app.delete("/api/users/:id", (req, res) => {
  const userIndex = users.findIndex((u) => u.id === parseInt(req.params.id));
  if (userIndex === -1) return res.status(404).send("User not found");

  users.splice(userIndex, 1);
  res.status(204).send(); // 삭제 후 No Content 응답
});

// 서버 시작
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
