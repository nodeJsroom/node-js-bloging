# Node.js 이미지 사용
FROM node:14

# 작업 디렉토리 설정
WORKDIR /app

# 패키지.json과 패키지-lock.json 복사
COPY package*.json ./

# 의존성 설치
RUN npm install 

# 애플리케이션 소스 복사
COPY . .

# 애플리케이션 포트 노출
EXPOSE 5000

# 애플리케이션 실행 명령
CMD ["npm", "start"]
