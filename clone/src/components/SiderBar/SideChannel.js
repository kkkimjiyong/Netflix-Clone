import React from "react";
import styled from "styled-components";

const SideChannel = () => {
  return (
    <div>
      <ChannelCtn>
        <ChannelBox> 채널</ChannelBox>
      </ChannelCtn>
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

const ChannelBox = styled.div`
  font-size: 14px;
  padding: 4px 4px 4px 20px;
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
export default SideChannel;
