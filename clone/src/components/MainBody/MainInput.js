import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { RiSendPlane2Fill } from "react-icons/ri";
import { useSelector } from "react-redux";
import { io } from "socket.io-client";
import axios from "axios";

const MainInput = ({ setChatArr, chatArr }) => {
  const { userinfo } = useSelector((state) => state.slack);
  const socket = io("http://43.200.178.84", {
    transports: ["websocket"],
  });

  const [Message, SetMessage] = useState(100);
  console.log(Message);
  const onSubmithandler = () => {
    //보내는 룸네임(new_room에 들어가는 값과 같아야함.)
    socket.emit("new_message", {
      message: Message,
      room: localStorage.getItem("channel"),
      email: "wldyddkssud@naver.com",
      data: Date.now(),
    });
    SetMessage("");
    console.log(Message);
  };

  const GetChats = async () => {
    try {
      const { data } = await axios.get("http://43.200.178.84/chats");
      console.log(data);
      setChatArr(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    GetChats();
    console.log(1);
    //우리가 들어가고싶은 룸이름이 들어가고,
    socket.emit("new_room", localStorage.getItem("channel"));

    //위에서 입장한 룸네임값으로 설정된 메세지만 들어온다.
    //나중에 서버에서 emit을 해줄때는 "receive"네임스페이스를 이용하면 더 좋을듯.
    socket.on("receive", (msg) => {
      console.log(msg);
      setChatArr(msg);
      // setChatArr((chatArr) => [
      //   ...chatArr,
      //   {
      //     message: message.message,
      //     email: message.email,
      //     room: message.room,
      //   },
      // ]);
    });
  }, []);

  console.log(chatArr);

  return (
    <InputCtn>
      <InputTopBox>각종 버튼들</InputTopBox>
      <InputMidBox
        value={Message}
        onChange={(e) => SetMessage(e.target.value)}
        placeholder="메시지 보내기"
      ></InputMidBox>
      <InputBottomBox>
        <SendIcon onClick={() => onSubmithandler()}>
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
  cursor: pointer;
  left: 20px;
  width: 20px;
  height: 20px;
`;

export default MainInput;
