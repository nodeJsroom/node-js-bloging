// 데이터베이스 연결
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/mydatabase", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

// 스키마 및 모델 정의
const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

const User = mongoose.model("User", userSchema);

// CRUD 데이터 생성
const createUser = async () => {
  const user = new User({ name: "Alice", age: 30 });
  await user.save();
  console.log("User created", user);
};

// 데이터 읽기
const getUsers = async () => {
  const users = await User.find();
  console.log("Users:", users);
};

// 실행
createUser();
getUsers();
