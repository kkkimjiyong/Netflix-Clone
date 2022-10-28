import React from "react";
import styled from "styled-components";
import { ReactComponent as WacthIcon } from "../asset/WatchIcon.svg";

const WatchIconItem = ({
  stroke = "white",
  size = "16",
  strokeWidth = "2",
}) => {
  return (
    <>
      <WacthIcon
        stroke={stroke}
        size={size}
        strokeWidth={strokeWidth}
        style={{ cursor: "pointer" }}
      ></WacthIcon>
    </>
  );
};

export default WatchIconItem;
