import React from "react";
import styled from "styled-components";

const SideHead = () => {
  return (
    <Header>
      HangHae99
      <PostBtn></PostBtn>
    </Header>
  );
};

const Header = styled.div`
  position: relative;
  padding: 15px;
  font-weight: 700;
  font-size: 20px;
  height: 40px;
  border-bottom: 1px solid #5d3d5e;
  border-top: 1px solid #5d3d5e;
  :hover {
    background-color: #350d36;
    cursor: pointer;
  }
`;

const PostBtn = styled.div`
  background-color: #6e4d6f;
  position: absolute;
  right: 10px;
  top: 20px;
  border-radius: 30px;
  width: 30px;
  height: 30px;
  :hover {
    background-color: #5d3d5e;
  }
`;

export default SideHead;
