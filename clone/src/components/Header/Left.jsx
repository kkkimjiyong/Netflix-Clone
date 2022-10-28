import React from "react";
import LeftIconItem from "../../element/lefticon";
import RightIconItem from "../../element/RightIcon";
import WatchIconItem from "../../element/WatchIcon";
import styled from "styled-components";
const Left = () => {
  return (
    <IconBox>
      <LeftDiv>
        <LeftIconItem />
      </LeftDiv>
      <RightDiv>
        <RightIconItem />
      </RightDiv>
      <WatchDiv>
        <WatchIconItem />
      </WatchDiv>
    </IconBox>
  );
};

export default Left;

const IconBox = styled.div`
  gap: 10px;
  width: 120px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-items: space-around;
`;
const LeftDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 7px;
  :hover {
    background-color: #6e4d6f;
  }
`;
const RightDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 7px;
  width: 30px;
  height: 30px;
  :hover {
    background-color: #6e4d6f;
  }
`;
const WatchDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 7px;
  width: 30px;
  height: 30px;
  :hover {
    background-color: #6e4d6f;
  }
`;
