/**
 * express 도구를 install
 * http 서버를 생성하고
 * GET /로 요청하면 "반갑습니다"
 * GET /user 로 요청하면 "안녕하세요"
 * 라고 보이도록
 */

import http from "http";
import express from "express";

const host = "127.0.0.1";
const port = 4000;

const app = express();
const server = http.createServer(app);

server.listen(port, host);

app.get("/", (req, res) => {
  res.setHeader("Content-Type", "text/html;charset=UTF-8");
  /**
   * 여러번 text 를 보내고 싶을때는 write로 보내고
   * 제일 마지막에 end로 마감한다
   */
  res.write("안녕하세요<hr/>");
  res.write("오늘은 목요일<hr/>");
  res.end("반갑습니다<hr/>");
});

// 한번만 보낼수 있다.
// send는 한줄만 보낼때는 가능 한글나옴
app.get("/user", (req, res) => {
  res.setHeader("Content-Type", "text/html;charset=UTF-8");
  res.send("안녕하세요");
});
