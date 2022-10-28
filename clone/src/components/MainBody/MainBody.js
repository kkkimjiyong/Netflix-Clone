import React from "react";
import styled from "styled-components";
const MainBody = () => {
  return (
    <>
      <PostBox>포스트 박스 공간입니다.</PostBox>
    </>
  );
};

export default MainBody;

const PostBox = styled.div`
  width: 100%;
  height: 500px;
  border: 0.3px solid black;
`;
