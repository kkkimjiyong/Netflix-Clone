import React from "react";
import styled from "styled-components";
import { ReactComponent as RightIcon } from "../asset/RightIcon.svg";

const RightIconItem = ({
  stroke = "white",
  size = "16",
  strokeWidth = "2",
}) => {
  return (
    <>
      <RightIcon
        stroke={stroke}
        size={size}
        strokeWidth={strokeWidth}
        style={{ cursor: "pointer" }}
      ></RightIcon>
    </>
  );
};

export default RightIconItem;
