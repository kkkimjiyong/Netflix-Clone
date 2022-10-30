import React from "react";
import styled from "styled-components";

const ProfileContent = () => {
  return (
    <ProfileDetail>
      <FirstBox>
        <ProfileBox>
          <ProfileSqr></ProfileSqr>
          김지용
        </ProfileBox>
        <PrfileSelect>
          <option>상태업데이트</option>
        </PrfileSelect>
        <StandardDiv>자신을 자리비움</StandardDiv>
        <StandardDiv>알림 일시 중지</StandardDiv>
      </FirstBox>
      <SecondBox>
        <StandardDiv>프로필</StandardDiv>
        <StandardDiv>환경설정</StandardDiv>
      </SecondBox>
      <SecondBox>
        <StandardDiv>다운로드</StandardDiv>
      </SecondBox>

      <StandardDiv className="logout">로그아웃</StandardDiv>
    </ProfileDetail>
  );
};
const FirstBox = styled.div`
  padding: 30px 0px 10px 0px;
  border-bottom: 1px solid #d8d8d8;
`;

const SecondBox = styled.div`
  padding: 10px 0px 10px 0px;
  border-bottom: 1px solid #d8d8d8;
`;

const ProfileDetail = styled.div`
  position: absolute;
  right: 150px;
  top: 55px;
  width: 330px;

  background-color: #f8f8f8;
  border: none;
  border-radius: 5px;
  box-shadow: 0px 3px 3px 0px black;
`;

const ProfileBox = styled.div`
  font-weight: 900;
  font-size: 20px;
  gap: 15px;
  height: 30px;
  padding: 0px 30px 30px 30px;
  display: flex;
  align-items: center;
`;
const ProfileSqr = styled.div`
  background-color: #5d3d5e;
  width: 50px;
  height: 50px;
  border-radius: 5px;
  position: relative;
`;
const PrfileSelect = styled.select`
  width: 270px;
  height: 40px;
  margin: 0px 20px 10px 30px;
  border-radius: 5px;
  border: 1px solid #d8d8d8;
  color: #a8a8a8;
  font-size: 18px;
  :hover {
    cursor: pointer;
    border: 1px solid black;
    color: black;
  }
`;

const StandardDiv = styled.div`
  font-weight: 500;
  display: flex;
  align-items: center;
  padding: 5px 10px 5px 30px;
  :hover {
    font-weight: 800;
    color: white;
    background-color: #1264a3;
    cursor: pointer;
  }
  &.logout {
    margin: 10px 0px 15px 0px;
  }
`;
export default ProfileContent;
