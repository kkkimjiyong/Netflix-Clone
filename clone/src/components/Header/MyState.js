import React from "react";
import styled from "styled-components";
import WatchIconItem from "../../element/WatchIcon";

const MyState = () => {
  return (
    <MystateCtn>
      <ProfilTextarea>
        <ProfileSpan>프로필</ProfileSpan>
      </ProfilTextarea>
      <Postarea>
        <Postimg src="https://ifh.cc/g/YOrnMQ.jpg"></Postimg>
        <ProfileNameDiv>
          <span>김재우(9기)</span>
          <button>편집</button>
        </ProfileNameDiv>
        <div>재우</div>
        <div>온라인</div>
        <div>
          <WatchIconItem style={{ color: "black" }} />
          현지시간 오전 10:07
        </div>
        <StateButtonArea>
          <StateButton>상태 설정</StateButton>
          <button>:</button>
        </StateButtonArea>
      </Postarea>
      <ContactInfo>
        <span>연락처 정보</span>
        <button>Edit</button>
      </ContactInfo>
      <div>
        <div>이메일 주소</div>
        <div>Phone</div>
      </div>
    </MystateCtn>
  );
};

export default MyState;
const MystateCtn = styled.div`
  background-color: white;
  border: 1px solid #dddddd;
  width: 375px;
  height: 800px;
  position: relative;
`;
const Postarea = styled.div`
  height: 515px;
  display: flex;
  flex-direction: column;
  border-bottom: 0.5px solid #dddddd;
  justify-content: space-around;
  margin-left: 20px;
`;
const ProfilTextarea = styled.div`
  border-bottom: 1px solid #dddddd;
  height: 57px;
  font-size: 23px;
  font-weight: 700;
  display: flex;
  align-items: center;
`;
const ProfileSpan = styled.span`
  margin-left: 20px;
`;
const Postimg = styled.img`
  width: 280px;
  height: 255px;
  border-radius: 5px;
  margin: 20px auto 10px 25px;
`;
const ProfileNameDiv = styled.div`
  display: flex;
  margin: 0 12px 0 20px;
  justify-content: space-between;
  span {
    font-size: 28px;
    font-weight: 700;
  }
  button {
    background-color: transparent;
    border: none;
    font-size: 18px;
    font-weight: 600;
    color: #0b4c8c;
    cursor: pointer;

    :hover {
      text-decoration: underline;
    }
  }
`;
const StateButtonArea = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
  button {
    border: 1px solid #dddddd;
    background-color: transparent;
  }
`;
const StateButton = styled.button`
  width: 300px;
  height: 40px;
  background-color: white;
  border: 1px solid #dddddd;
  border-radius: 5px;
  font-size: 18px;
  font-weight: 900;
  background-color: white;
  transition: all 0.1s;
  cursor: pointer;
  :hover {
    background-color: #f8f8f8;
  }
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
    font-size: 18px;
    font-weight: 600;
    color: #0b4c8c;
    cursor: pointer;

    :hover {
      text-decoration: underline;
    }
  }
`;
