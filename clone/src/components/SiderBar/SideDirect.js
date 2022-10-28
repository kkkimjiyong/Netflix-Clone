import React from "react";
import styled from "styled-components";

const SideDirect = () => {
  return (
    <div>
      <DirectCtn>
        <DirectBox>다이렉트 메시지</DirectBox>
      </DirectCtn>
    </div>
  );
};
const DirectCtn = styled.div`
  color: #b8a6b9;
  font-size: 12px;
  padding: 10px 0px 10px 0px;
  font-weight: 500;
  font-size: 20px;
  min-height: 60px;
  max-height: 500px;
  border-bottom: 1px solid #5d3d5e;
  border-top: 1px solid #5d3d5e;
  font-weight: 700;
`;

const DirectBox = styled.div`
  font-size: 14px;
  padding: 4px 4px 4px 20px;
  color: #b8a6b9;
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
export default SideDirect;
