const { Sequelize, DataTypes } = require("sequelize");

// 데이터베이스 연결 설정
const sequelize = new Sequelize("blog", "root", "wjdgh159753a", {
  host: "localhost",
  dialect: "mysql",
});

// 연결 테스트
const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log("MySQL connected");
  } catch (error) {
    console.error("MySQL connection error:", error);
  }
};

testConnection();

// 모델 정의
const User = sequelize.define("User", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

// 데이터베이스 동기화
const syncDatabase = async () => {
  await sequelize.sync();
  console.log("Database synced!");
};

syncDatabase();

// 데이터 생성
const createUser = async () => {
  const user = await User.create({ name: "John", age: 25 });
  console.log("User created", user);
};

// 실행
const runApp = async () => {
  await syncDatabase();
  await createUser();
};

runApp();
