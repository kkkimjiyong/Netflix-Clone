import React from "react";
import styled from "styled-components";
import MainInput from "./MainInput";
import PostBox from "./PostBox";
const MainBody = () => {
  return (
    <MainCtn>
      <PostBox />
      <MainInput />
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
