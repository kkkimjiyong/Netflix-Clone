import React, { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import styled from "styled-components";
import MainBody from "../components/MainBody/MainBody";
import Input from "../components/Header/Input";
import Right from "../components/Header/Right";
import SideHead from "../components/SiderBar/SideHead";
import Left from "../components/Header/Left";
import SideBody from "../components/SiderBar/SideBody";
import MyState from "../components/Header/MyState";
import ProfileModal from "../components/MainBody/ProfileModal";
import axios from "axios";

const MainPage = () => {
  const [isOpen, SetisOpen] = useState(false);
  const [profile, setProfile] = useState(false);
  const [modalIsOn, setModalIsOn] = useState(false);
  const [isInputOpen, SetisInputOpen] = useState(false);
  const [Channels, SetChannels] = useState([]);
  const [Channel, SetChannel] = useState([]);
  const [User, GetUsers] = useState();

  const GetChannel = async () => {
    try {
      const { data } = await axios.get("http://43.200.178.84/room");
      console.log(data);
      SetChannels(data);
    } catch (error) {
      console.log(error);
    }
  };
  const GetUser = async () => {
    try {
      const { data } = await axios.get("http://43.200.178.84/members");
      GetUsers(data);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(User);
  useEffect(() => {
    GetUser();
    GetChannel();
  }, []);

  return (
    <>
      <MainCtn>
        <Hedaerc className="header">
          <Left />
          <Input isInputOpen={isInputOpen} SetisInputOpen={SetisInputOpen} />
          <Right
            SetisOpen={SetisOpen}
            isOpen={isOpen}
            profile={profile}
            setProfile={setProfile}
          />{" "}
          {isInputOpen && <InputModal />}
        </Hedaerc>

        <MeunBar className="menu">
          <SideHead />
          <SideBody
            SetChannel={SetChannel}
            Channel={Channel}
            SetChannels={SetChannels}
            Channels={Channels}
            User={User}
          />
        </MeunBar>
        <Mainbody className="body">
          {modalIsOn && (
            <ProfileModal modalIsOn={modalIsOn} setModalIsOn={setModalIsOn} />
          )}
          <MainBody Channel={Channel} Channels={Channels} />
          {profile && (
            <MyState
              profile={profile}
              setProfile={setProfile}
              modalIsOn={modalIsOn}
              setModalIsOn={setModalIsOn}
            />
          )}
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
  display: flex;
  flex-direction: row;
`;

const InputModal = styled.div`
  z-index: 999;
  position: absolute;
  top: 50px;
  background-color: white;
  width: 750px;
  height: 300px;
  border-radius: 10px;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 17px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #898989;
    //스크롤바에 마진준것처럼 보이게
    background-clip: padding-box;
    border: 4px solid black;
    border-radius: 15px;
  }
`;

export default MainPage;
