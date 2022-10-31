import React, { useState } from "react";
import styled from "styled-components";

const Modal = ({ isOpen, close, Channels, SetChannels }) => {
  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
  console.log(isOpen);
  const [channelName, SetchannelName] = useState();

  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <div className="modalback">
      {isOpen ? (
        <ModalCtn>
          <ModalHeader>
            <CloseBtn onClick={close}>&times;</CloseBtn>
          </ModalHeader>

          <ModalBody>
            <input onChange={(e) => SetchannelName(e.target.value)} />
            <button
              onClick={() => SetChannels([...Channels, { name: channelName }])}
            >
              전송
            </button>
          </ModalBody>
          <footer>
            <button className="close" onClick={close}>
              close
            </button>
          </footer>
        </ModalCtn>
      ) : null}
    </div>
  );
};

const ModalCtn = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 150px;
  left: 750px;
  width: 700px;
  height: 700px;
  padding: 20px;
  z-index: 999;
  background-color: #f8f8f8;
  box-shadow: 0px 5px 5px 0px gray;
  border-radius: 20px;
`;

const ModalHeader = styled.div`
  display: flex;
  height: 30px;
  padding: 10px;
  border-bottom: 2px solid purple;
`;

const ModalBody = styled.div`
  height: 500px;
`;

const CloseBtn = styled.div`
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 35px;
  left: 650px;
  border: none;
  border-radius: 5px;
  background-color: #5d3d5e;
  :hover {
    background-color: #6e4d6f;
  }
`;

export default Modal;
