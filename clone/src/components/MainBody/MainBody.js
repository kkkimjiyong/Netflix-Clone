import React from "react";
import styled from "styled-components";
import MainInput from "./MainInput";
import PostBox from "./PostBox";
import { useState } from "react";

const MainBody = ({ Channels, Channel }) => {
  const [chatArr, setChatArr] = useState([]);
  console.log(chatArr);
  return (
    <MainCtn>
      <PostBox chatArr={chatArr} />
      <MainInput
        Channel={Channel}
        Channels={Channels}
        setChatArr={setChatArr}
        chatArr={chatArr}
      />
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
