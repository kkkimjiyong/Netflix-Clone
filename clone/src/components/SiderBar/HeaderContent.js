import React from "react";
import styled from "styled-components";

const HeaderContent = () => {
  return (
    <SideDetail>
      <FirstBox>
        <SideSqr /> HangHae99
      </FirstBox>

      <StandardDiv></StandardDiv>
    </SideDetail>
  );
};

const SideDetail = styled.div`
  position: absolute;
  left: 20px;
  width: 330px;
  height: 500px;
  background-color: #f8f8f8;
  border: none;
  border-radius: 7px;
  box-shadow: 0px 3px 3px 0px black;
`;

const FirstBox = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: black;
  display: flex;
  align-items: center;
  padding: 30px 0px 30px 30px;
  border-bottom: 1px solid #d8d8d8;
`;

const SideSqr = styled.div`
  background-color: #5d3d5e;
  width: 50px;
  height: 50px;
  border-radius: 5px;
  position: relative;
  margin-right: 20px;
`;

const StandardDiv = styled.div`
  font-weight: 500;
  display: flex;
  align-items: center;
  padding: 5px 10px 5px 30px;
  color: black;
  :hover {
    font-weight: 800;
    color: white;
    background-color: #1264a3;
    cursor: pointer;
  }
`;

export default HeaderContent;
