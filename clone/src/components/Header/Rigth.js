import React from "react";
import styled from "styled-components";

const Rigth = () => {
  return (
    <div>
      <ProfileBox></ProfileBox>
    </div>
  );
};

const ProfileBox = styled.div`
  background-color: #5d3d5e;
  width: 30px;
  height: 30px;
  border-radius: 5px;
  margin-top: 15px;
  position: absolute;
  right: 150px;
  :hover {
    cursor: pointer;
    background-color: #6e4d6f;
  }
`;

export default Rigth;
