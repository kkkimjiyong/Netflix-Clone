import React from "react";
import styled from "styled-components";
import { IoTimeOutline, IoEllipsisVertical } from "react-icons/io5";
import ProfileModal from "../MainBody/ProfileModal";

const MyState = ({ profile, setProfile, modalIsOn, setModalIsOn }) => {
  return (
    <MystateCtn>
      <ProfilTextarea>
        <ProfileSpan>프로필</ProfileSpan>
        <ProfileButton onClick={() => setProfile(!profile)}>
          &times;
        </ProfileButton>
      </ProfilTextarea>
      <Postarea>
        <Postimg src="https://ifh.cc/g/YOrnMQ.jpg"></Postimg>
        <ProfileNameDiv>
          <span>김재우(9기)</span>
          <button onClick={() => setModalIsOn(!modalIsOn)}>편집</button>
        </ProfileNameDiv>
        <NamePronunciation>재우</NamePronunciation>
        <OnlineState>온라인</OnlineState>
        <TimeBox>
          <IoTimeOutline style={{ fontSize: "22" }} />
          {""} 현지 시간 오전 10:07
        </TimeBox>
        <StateButtonArea>
          <StateButton>상태 설정</StateButton>
          <EtcButton style={{ fontSize: "19px" }}>
            <IoEllipsisVertical />
          </EtcButton>
        </StateButtonArea>
      </Postarea>
      <ContactInfo>
        <span>연락처 정보</span>
        <button>Edit</button>
      </ContactInfo>
      <AddressInfo>
        <div>이메일 주소</div>
        <div>Phone</div>
      </AddressInfo>
      {modalIsOn && (
        <ProfileModal modalIsOn={modalIsOn} setModalIsOn={setModalIsOn} />
      )}
    </MystateCtn>
  );
};

export default MyState;
const MystateCtn = styled.div`
  background-color: white;
  border: 1px solid #dddddd;
  width: 310px;
  position: relative;
`;
const Postarea = styled.div`
  height: 460px;
  display: flex;
  flex-direction: column;
  border-bottom: 0.5px solid #dddddd;
  justify-content: space-around;
  /* margin-left: 20px; */
`;
const ProfilTextarea = styled.div`
  justify-content: space-between;
  border-bottom: 1px solid #dddddd;
  height: 48px;
  font-size: 23px;
  font-weight: 700;
  display: flex;
  align-items: center;
`;
const ProfileButton = styled.button`
  margin-right: 10px;
  width: 40px;
  height: 40px;
  font-size: 35px;
  background-color: transparent;
  border-radius: 5px;
  color: #606060;
  border: none;
  cursor: pointer;
  :hover {
    background-color: #b899b9;
  }
`;
const ProfileSpan = styled.span`
  margin-left: 20px;
`;
const Postimg = styled.img`
  width: 280px;
  height: 255px;
  border-radius: 5px;
  margin: 20px auto 10px auto;
`;
const ProfileNameDiv = styled.div`
  display: flex;
  margin: 0 12px 0 20px;
  justify-content: space-between;
  span {
    font-size: 25px;
    font-weight: 600;
  }
  button {
    background-color: transparent;
    border: none;
    font-size: 16px;
    font-weight: 1000;
    color: #0b4c8c;
    cursor: pointer;

    :hover {
      text-decoration: underline;
    }
  }
`;
const NamePronunciation = styled.div`
  margin-left: 20px;
  margin-bottom: 15px;
  font-size: 14px;
  font-weight: 500;
`;
const OnlineState = styled.div`
  margin-left: 20px;
  font-size: 14px;
`;
const TimeBox = styled.div`
  margin-left: 20px;
  font-size: 14px;
  display: flex;
  align-items: center;
`;
const StateButtonArea = styled.div`
  gap: 2px;
  display: flex;
  justify-content: space-around;
  margin: 10px 0 20px 15px;
  button {
    margin-right: 10px;
    border-radius: 5px;
    border: 1px solid #dddddd;
    background-color: transparent;
  }
`;
const StateButton = styled.button`
  width: 280px;
  height: 36px;
  background-color: white;
  border: 1px solid #dddddd;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 900;
  background-color: white;
  transition: all 0.1s;
  cursor: pointer;
  :hover {
    background-color: #f8f8f8;
  }
`;
const EtcButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ContactInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 20px 12px 0 20px;
  span {
    font-size: 18px;
    font-weight: 700;
  }
  button {
    background-color: transparent;
    border: none;
    font-size: 15px;
    font-weight: 600;
    color: #0b4c8c;
    cursor: pointer;

    :hover {
      text-decoration: underline;
    }
  }
`;
const AddressInfo = styled.div`
  font-size: 14px;
  margin-left: 20px;
  margin-top: 20px;
`;
