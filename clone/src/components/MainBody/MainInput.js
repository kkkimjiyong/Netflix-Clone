import React from "react";
import styled from "styled-components";

const MainInput = () => {
  return (
    <InputCtn>
      <InputTopBox>각종 버튼들</InputTopBox>
      <InputMidBox placeholder="메시지 보내기"></InputMidBox>
      <InputBottomBox>dd</InputBottomBox>
    </InputCtn>
  );
};

const InputCtn = styled.div`
  position: absolute;
  bottom: 0px;
  margin: 20px;
  width: 98%;
  height: 150px;
  border: 2px solid #e2e2e2;
  border-radius: 10px;
`;

const InputTopBox = styled.div`
  height: 40px;
  background-color: #f8f8f8;
  padding: 5px 15px 5px 15px;
  align-items: center;
  display: flex;
`;

const InputMidBox = styled.input`
  font-size: 18px;
  height: 40px;
  width: 50%;
  padding: 10px;
  border: none;
  :focus {
    outline: none;
  }
`;

const InputBottomBox = styled.div`
  /* border-top: 2px solid black; */
  height: 15px;
  padding: 10px;
  background-color: #f8f8f8;
  align-items: center;
  display: flex;
`;

export default MainInput;
