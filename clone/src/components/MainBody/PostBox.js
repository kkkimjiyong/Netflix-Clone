import React from "react";
import styled from "styled-components";
import Right from "../Header/Rigth";
const PostBox = () => {
  //소켓을 받아오는 것
  return (
    <>
      <PostBoxDiv>
        <DateBtn>10월 28일</DateBtn>
        <ProfileBox>
          <ProfileImg />
          <ProfileNic>예상기(React 기술매니저) </ProfileNic>
          <ProfileTime>오전11:05</ProfileTime>
        </ProfileBox>

        <TextBox>
          안녕하세요, 항해99 구름 매니저입니다.:활짝_웃다: :짠:항해99 9기에
          최종적으로 합격하신 여러분들을 진심으로 축하합니다!:짠: 앞으로 슬랙의
          9기 공지방, 잡담방, 질문방 등에서 주요 활동에 대한 안내 및 교류가
          이뤄질 예정입니다! 합격 후, 슬랙에 처음 접속하신 분들께서는 본
          게시글에 성함, 슬랙 가입에 사용하신 이메일을 댓글로 남겨주세요!
          이메일은 반드시 슬랙 가입에 사용하신 이메일로 작성해주세요 이미 초대
          완료 되신 분들은 다시 댓글을 달지 않으셔도 괜찮습니다 :)
          :흰색_확인_표시:댓글 예시) 김항해(9기), example@naver.com 9기 슬랙
          초대 부탁드립니다! +5 10개의 댓글 3개월 전 마지막 댓글스레드 보기
        </TextBox>
      </PostBoxDiv>
    </>
  );
};

export default PostBox;

const PostBoxDiv = styled.div`
  overflow-x: hidden;
  word-break: break-all;
  width: 100%;
  /* height: 250px; */
  border-bottom: 0.7px solid #dddddd;
`;

const DateBtn = styled.div`
  text-align: center;
  height: 30px;
  width: 180px;
  border: 1px solid #dddddd;
  border-radius: 30px;
  margin: auto;
`;

const ProfileImg = styled.div`
  background-color: #5d3d5e;
  width: 35px;
  height: 35px;
  border-radius: 5px;
  right: 150px;
  :hover {
    cursor: pointer;
    background-color: #6e4d6f;
  }
`;

const TextBox = styled.div`
  padding-top: 10px;
  padding-left: 70px;
  padding-bottom: 20px;
  padding: 10px 40px 20px 70px;
`;
const ProfileNic = styled.div`
  margin-left: 15px;
  margin-top: 3px;
  font-size: 18px;
  font-weight: 700;
`;

const ProfileBox = styled.div`
  display: flex;
  flex-direction: row;
  margin: 35px 0 0 25px;
`;
const ProfileTime = styled.div`
  margin-top: 5px;
  margin-left: 10px;
`;
