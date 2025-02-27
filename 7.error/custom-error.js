class CustomError extends Error {
  constructor(message, statusCode) {
    super(message); // 부모 클래스의 생성자 호출
    this.name = this.constructor.name; // 에러 이름 설정
    this.statusCode = statusCode; // 추가 속성 설정
    Error.captureStackTrace(this, this.constructor); // 스택 트레이스 캡처
  }
}

// 사용 예시
function riskFunction() {
  throw new CustomError("사용자 정의 에러 발생", 400);
}

try {
  riskFunction();
} catch (error) {
  console.error(`Error Name: ${error.name}`);
}
