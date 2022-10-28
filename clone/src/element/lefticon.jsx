import React from "react";
import styled from "styled-components";
import { ReactComponent as LeftIcon } from "../asset/LeftIcon.svg";

const LeftIconItem = ({ stroke = "white", size = "16", strokeWidth = "2" }) => {
  return (
    <>
      <LeftIcon
        stroke={stroke}
        size={size}
        strokeWidth={strokeWidth}
        style={{ cursor: "pointer", backGroundColor: "black" }}
      ></LeftIcon>
    </>
  );
};

export default LeftIconItem;
// const LeftIcon = styled.div`
//   cursor: pointer;
// `;
