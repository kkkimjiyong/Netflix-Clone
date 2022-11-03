import React, { useState } from "react";
import styled from "styled-components";

const InputModal = () => {
  return <ModalCtn></ModalCtn>;
};

const ModalCtn = styled.div`
  z-index: 999;
  position: absolute;
  top: 50px;
  background-color: ghostwhite;
  width: 750px;
  height: 300px;
  border-radius: 10px;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 17px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #898989;
    //스크롤바에 마진준것처럼 보이게
    background-clip: padding-box;
    border: 4px solid black;
    border-radius: 15px;
  }
`;
export default InputModal;
