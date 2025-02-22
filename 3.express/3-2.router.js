const express = require("express");
const app = express();
const port = 3000;

// JSON 요청 본문 파싱
app.use(express.json());

// 라우터 생성
const router = express.Router();

app.get("/", (req, res) => {
  res.send("Welcome to the API!");
});

// 라우터 핸들러 설정
router.get("/users", (req, res) => {
  res.json([{ id: 1, name: "John Doe" }]);
});

router.get("/products", (req, res) => {
  res.json([{ id: 2, name: "Product A" }]);
});

// 라우터를 애플리케이션에 추가
app.use("/api", router);

// 서버 시작
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
