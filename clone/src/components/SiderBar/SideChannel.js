import React, { useState } from "react";
import styled from "styled-components";
import Modal from "../modal/modal";

const SideChannel = () => {
  const [isOpen, SetisOpen] = useState(false);
  console.log(isOpen);
  const close = () => {
    SetisOpen(false);
  };

  const [Channels, SetChannels] = useState([{ name: "" }]);
  return (
    <div>
      <ChannelCtn>
        <ChannelHeader>
          채널
          <div onClick={() => SetisOpen(!isOpen)}>버튼</div>
        </ChannelHeader>
        {Channels.map((channel) => {
          return <ChannelBox>{channel.name}</ChannelBox>;
        })}
      </ChannelCtn>
      <Modal
        isOpen={isOpen}
        close={close}
        Channels={Channels}
        SetChannels={SetChannels}
      />
    </div>
  );
};

const ChannelCtn = styled.div`
  color: #b8a6b9;
  padding: 10px 0px 10px 0px;
  min-height: 60px;
  max-height: 300px;
  border-bottom: 1px solid #5d3d5e;
  border-top: 1px solid #5d3d5e;
  font-weight: 700;
`;

const ChannelHeader = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  padding: 4px 20px 4px 20px;
  font-weight: 700;
  :hover {
    background-color: #350d36;
    cursor: pointer;
  }
  :active {
    color: white;
    background-color: #1164a3;
  }
`;

const ChannelBox = styled.div`
  padding: 4px 20px 4px 20px;
  :hover {
    background-color: #350d36;
    cursor: pointer;
  }
`;
export default SideChannel;
