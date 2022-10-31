import React from "react";
import styled from "styled-components";
import { useState } from "react";
import ProfileContent from "./ProfileContent";

const Right = ({ isOpen, SetisOpen, setProfile, profile }) => {
  return (
    <div>
      <ProfileBox onClick={() => SetisOpen(!isOpen)}></ProfileBox>{" "}
      {isOpen && (
        <ProfileContent
          isOpen={isOpen}
          SetisOpen={SetisOpen}
          setProfile={setProfile}
          profile={profile}
        />
      )}
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

export default Right;
