import React from "react";
import Layout from "../components/Layout/Layout";
import styled from "styled-components";
import MainBody from "../components/MainBody/MainBody";
import Input from "../components/Header/Input";
import Rigth from "../components/Header/Rigth";
import SideHead from "../components/SiderBar/SideHead";
import Left from "../components/Header/Left";
import SideBody from "../components/SiderBar/SideBody";
import PostBox from "../components/MainBody/PostBox";
const MainPage = () => {
  return (
    <>
      <MainCtn>
        <Hedaerc className="header">
          <Left />

          <Input />
          <Rigth />
        </Hedaerc>
        <MeunBar className="menu">
          <SideHead />
          <SideBody />
        </MeunBar>
        <Mainbody className="body">
          <PostBox />
        </Mainbody>
      </MainCtn>
    </>
  );
};

const MainCtn = styled.div`
  overflow: hidden;
  display: grid;
  width: 100%;
  height: 100vh;
  grid-template-columns: 300px 1fr 1fr;
  grid-template-rows: 0.7fr 6fr 6fr 1fr;
  grid-template-areas:
    "header header header"
    "   a    body    body   "
    "   a     body      body   "
    "   a     body      body   ";
  .header {
    grid-area: header;
  }
  .menu {
    grid-area: a;
  }
  .body {
    grid-area: body;
  }
  background-color: aliceblue;
`;

const Hedaerc = styled.div`
  width: 100%;
  /* position: fixed; */
  display: flex;
  justify-content: center;
  background-color: #350d36;
`;

const MeunBar = styled.div`
  height: 100%;
  width: 300px;
  /* position: fixed; */
  color: white;
  background-color: #3f0e40;
`;

const Mainbody = styled.div`
  background-color: #ffffff;
  overflow-y: scroll;
`;

export default MainPage;
