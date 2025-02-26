const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const dotenv = require("dotenv");
const helmet = require("helmet");
const cors = require("cors");

dotenv.config();

const app = express();
app.use(express.json());
app.use(helmet());
app.use(cors());

const users = []; // 사용자 정보를 저장할 배열

// 사용자 등록
app.post("/register", async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).send("Username and password are required");
    }

    const existingUser = users.find((user) => user.username === username);

    if (existingUser) {
      return res.statusCode(400).send("Username already exists");
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    users.push({ username, password: hashedPassword });
    res.status(201).send("User registered");
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

// 사용자 조회
app.get("/users", (req, res) => {
  const userList = users.map((user) => ({ username: user.username }));
  res.json(userList);
});

// 사용자 로그인
app.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = users.find((u) => u.username === username);
    if (!user) return res.status(400).send("User not found");

    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) return res.status(403).send("invalid password");

    const token = jwt.sign(
      { username: user.username },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );
    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

// 인증 미들웨어
const authenticateJWT = (req, res, next) => {
  const token = req.headers["authorization"]?.split(" ")[1];
  if (!token) return res.sendStatus(403);

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};

// 인증된 라우트
app.get("/dashboard", authenticateJWT, (req, res) => {
  res.send(`Welcome ${req.user.username}`);
});

// 서버 시작
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
