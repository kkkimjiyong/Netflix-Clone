import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { RiSendPlane2Fill } from "react-icons/ri";

const MainInput = () => {
  const [Message, SetMessage] = useState();
  console.log(Message);

  // socket.emit("message" , Message)
  return (
    <InputCtn>
      <InputTopBox>각종 버튼들</InputTopBox>
      <InputMidBox
        // value={Message}
        onChange={(e) => SetMessage(e.target.value)}
        placeholder="메시지 보내기"
      ></InputMidBox>
      <InputBottomBox>
        <SendIcon>
          <RiSendPlane2Fill />
        </SendIcon>
      </InputBottomBox>
    </InputCtn>
  );
};

const InputCtn = styled.div`
  position: relative;
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
  width: 98%;
  height: 40px;
  padding: 10px;
  border: none;
  :focus {
    outline: none;
  }
`;

const InputBottomBox = styled.div`
  /* border-top: 2px solid black; */
  width: 83%;
  height: 15px;
  padding: 10px;
  background-color: #f8f8f8;
  align-items: center;
  display: flex;
  /* justify-content: space-between; */
`;

const SendIcon = styled.div`
  left: 20px;
  width: 20px;
  height: 20px;
`;

export default MainInput;
