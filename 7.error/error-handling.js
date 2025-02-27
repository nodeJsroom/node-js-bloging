class ErrorHandle extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
  }
}

throw new ErrorHandle("사용자 정의 에러 발생");
