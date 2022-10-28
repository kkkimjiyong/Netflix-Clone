import React from "react";
import styled from "styled-components";
import SideChannel from "./SideChannel";
import SideDirect from "./SideDirect";
import SideFeat from "./SideFeat";

const SideBody = () => {
  return (
    <>
      <SideFeat />
      <SideChannel />
      <SideDirect />
    </>
  );
};

export default SideBody;
