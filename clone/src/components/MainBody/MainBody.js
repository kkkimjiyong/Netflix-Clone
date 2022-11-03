import React from "react";
import MainInput from "./MainInput";
import PostBox from "./PostBox";
import { useState } from "react";
import styled from "styled-components";

const MainBody = () => {
  // const socket = io("https://hi-prac.shop");

  // { path: "/socket.io", transports: ["websocket"] },
  // { cors: { origin: "ws://hi-prac.shop:5000" } }

  // socket.on("receive", (message, from) => {
  //   console.log(message);
  //   setChatArr((chatArr) => [
  //     ...chatArr,
  //     { nickname: message.nickname, message: message.message, from: from },
  //   ]);

  const [chatArr, setChatArr] = useState([]);

  return (
    <MainCtn>
      <PostBox chatArr={chatArr} />
      <MainInput chatArr={chatArr} setChatArr={setChatArr} />
    </MainCtn>
  );
};

const MainCtn = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export default MainBody;
