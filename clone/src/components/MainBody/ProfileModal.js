import React, { useState } from "react";
import styled from "styled-components";

const ProfileModal = ({ modalIsOn, setModalIsOn }) => {
  const [visible, setVisible] = useState(false);
  console.log(modalIsOn);
  return (
    <>
      <ProfileModalCtn>
        <ProfileModalWrap>
          {" "}
          <ProfileSetDiv>
            <span style={{ fontSize: "20px", fontWeight: "700" }}>
              내 프로필 편집
            </span>
          </ProfileSetDiv>
          <ModalBody>
            {" "}
            <ProfileNamePlusDiv>
              <div>
                <NameInputDiv>
                  성명
                  <NameInput></NameInput>
                </NameInputDiv>
                <MarkDiv>
                  <div>표시 이름</div>
                  <MarkNameInput></MarkNameInput>
                </MarkDiv>
              </div>
              <ProfilePic>
                <ProfilePicSpan>프로필 사진</ProfilePicSpan>
                <ProfilePicImg src="https://ifh.cc/g/YOrnMQ.jpg"></ProfilePicImg>
                <ProfileButtonDiv>
                  <ProfileUp>사진 업로드</ProfileUp>
                  <ProfileRm>사진 제거</ProfileRm>
                </ProfileButtonDiv>
              </ProfilePic>
            </ProfileNamePlusDiv>
            <RegulationDiv>
              <div style={{ color: "#7c7c7c", fontWeight: "600" }}>
                이는 고객님의 이름이거나 Slack에서 불리고 싶은 별명일 수
                있습니다.
              </div>
              <span style={{ fontWeight: "bolder" }}>
                이 워크스페이스의 사용자 지정 규칙:
              </span>
              <div>
                본명과 기수를 포함하여 이름을 설정해 주세요! 예)김항해(3기)
              </div>
            </RegulationDiv>
            <JobDiv>
              <div>직함</div>
              <JobInput placeholder="직함"></JobInput>
            </JobDiv>
            <IntroduceDiv>
              <div style={{ fontSize: "13px" }}>
                고객님이 HangHae99에서 어떤 일을 하는지 사람들에게 알려 주세요.
              </div>
            </IntroduceDiv>
            <NameRecodeDiv>
              <div>이름 기록</div>
              <NameRecodeBtn>오디오 클립 기록</NameRecodeBtn>
            </NameRecodeDiv>
            <NamePrononciDiv>
              <div>이름 발음</div>
              <NamePrononciInput></NamePrononciInput>
            </NamePrononciDiv>
            <ExampleDiv style={{ fontSize: "13px" }}>
              음성 발음이거나 본인의 이름과 비슷하게 들리는 단어의 예시일 수
              있습니다.
            </ExampleDiv>
            <GlobalTimeDiv>
              <div>시간대</div>
              <GlobalTimeSel>
                <option>(UTC+09:00)서울</option>
              </GlobalTimeSel>
              <span style={{ fontSize: "13px" }}>
                현재 시간대입니다. 요약 및 알림 이메일 전송, 나의 활동 피드에
                나타는 시간 표시, 미리 알림에 사용 됩니다.{" "}
              </span>
            </GlobalTimeDiv>
          </ModalBody>
          <ButtonDiv>
            <button onClick={() => setModalIsOn(!modalIsOn)}>취소</button>
            <button>변경사항 저장</button>
          </ButtonDiv>
        </ProfileModalWrap>
        <div></div>
      </ProfileModalCtn>
    </>
  );
};

export default ProfileModal;
const ProfileNamePlusDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

const ProfileModalCtn = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid black;
  box-sizing: border-box;
  display: ${(modalIsOn) => (modalIsOn ? "block" : "none")};
  position: fixed;
  /* top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0; */
  background: rgba(0, 0, 0, 0.2);
  z-index: 999;
`;

const ModalBody = styled.div`
  position: relative;
  border-radius: 5px;
  overflow-y: scroll;
  width: 700px;
  height: 600px;
  background-color: white;
`;
const ProfileModalWrap = styled.div`
  position: relative;
  border-radius: 5px;
  left: 350px;
  top: 30px;
  // overflow-y: scroll;
  width: 700px;
  height: 780px;
  background-color: white;
`;
const ProfileSetDiv = styled.div`
  z-index: 1099;
  position: relative;
  height: 20px;
  padding: 25px;
  border-bottom: 1px solid #dddddd;
`;
const NameInputDiv = styled.div`
  display: flex;
  font-weight: 600;
  flex-direction: column;
  margin-left: 20px;
  margin-top: 20px;
`;
const NameInput = styled.input`
  margin-top: 15px;
  border: 1px solid #dddddd;

  /* outline: blue; */
  font-size: 20px;
  border-radius: 5px;
  width: 420px;
  height: 37px;
`;
const ProfilePic = styled.div`
  width: 250px;
  height: 300px;
  border: none;
  position: relative;
  font-size: 15px;
  font-weight: 600;
  margin-top: 30px;
`;
const ProfilePicSpan = styled.span`
  margin-left: 30px;
`;
const ProfilePicImg = styled.img`
  margin-left: 30px;
  margin-top: 5px;
  width: 194px;
  height: 194px;
  border-radius: 5px;
`;
const ProfileUp = styled.button`
  border: 1px solid #dddddd;
  border-radius: 5px;
  font-weight: 600;
  height: 30px;
  width: 190px;
  background-color: white;
`;
const ProfileRm = styled.button`
  color: #0b4c8c;
  background-color: transparent;
  border: none;
`;
const ProfileButtonDiv = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const MarkDiv = styled.div`
  display: flex;
  font-weight: 600;
  flex-direction: column;
  margin-left: 20px;
  margin-top: 20px;
`;
const MarkNameInput = styled.input`
  margin-top: 15px;
  border: 1px solid #dddddd;

  /* outline: blue; */
  font-size: 20px;
  border-radius: 5px;
  width: 420px;
  height: 37px;
`;
const RegulationDiv = styled.div`
  font-size: 13px;
  margin-left: 20px;
  margin-top: 20px;
`;
const JobDiv = styled.div`
  display: flex;
  font-weight: 600;
  flex-direction: column;
  margin-left: 20px;
  margin-top: 20px;
`;
const JobInput = styled.input`
  margin-top: 15px;
  border: 1px solid #dddddd;

  /* outline: blue; */
  font-size: 20px;
  border-radius: 5px;
  width: 420px;
  height: 37px;
`;
const IntroduceDiv = styled.div`
  margin-left: 20px;
  margin-top: 20px;
  color: #7c7c7c;
  font-weight: 600;
`;
const NameRecodeDiv = styled.div`
  display: flex;
  font-weight: 600;
  flex-direction: column;
  margin-left: 20px;
  margin-top: 20px;
`;
const NameRecodeBtn = styled.button`
  margin-top: 15px;
  border: 1px solid #dddddd;
  background-color: transparent;
  /* outline: blue; */
  font-size: 16px;
  font-weight: 600;
  border-radius: 5px;
  width: 180px;
  height: 37px;
`;
const NamePrononciDiv = styled.div`
  display: flex;
  font-weight: 600;
  flex-direction: column;
  margin-left: 20px;
  margin-top: 20px;
`;
const NamePrononciInput = styled.input`
  margin-top: 15px;
  border: 1px solid #dddddd;

  /* outline: blue; */
  font-size: 20px;
  border-radius: 5px;
  width: 420px;
  height: 37px;
`;
const ExampleDiv = styled.div`
  margin-left: 20px;
  margin-top: 20px;
  font-weight: 600;
  color: #7c7c7c;
`;
const GlobalTimeSel = styled.select`
  margin-top: 15px;
  border: 1px solid #dddddd;

  /* outline: blue; */
  font-size: 20px;
  border-radius: 5px;
  width: 420px;
  height: 37px;
`;

const GlobalTimeDiv = styled.div`
  display: flex;
  font-weight: 600;
  flex-direction: column;
  margin-left: 20px;
  margin-top: 20px;
`;
const ButtonDiv = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 25px;
  gap: 10px;
  border-top: 1px solid #dddddd;
`;
