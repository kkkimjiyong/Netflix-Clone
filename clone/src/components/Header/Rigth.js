import React from "react";
import styled from "styled-components";
import { useState } from "react";
import ProfileContent from "./ProfileContent";

const Rigth = () => {
  const [isOpen, SetisOpen] = useState(false);
  return (
    <div>
      <ProfileBox onClick={() => SetisOpen(!isOpen)}></ProfileBox>{" "}
      {isOpen && <ProfileContent>아아아아아</ProfileContent>}
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
