// try {
//   // 에러가 발생할 수있는 코드
//   const result = riskFunction();
// } catch (error) {
//   console.error("에러 발생:", error);
// }

async function example() {
  try {
    const result = await errorAsyncFunction();
  } catch (error) {
    console.error("에러 발생", error);
  }
}
