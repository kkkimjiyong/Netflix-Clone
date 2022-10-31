import React from "react";
import styled from "styled-components";

const HeaderContent = () => {
  return (
    <SideDetail>
      <FirstBox>
        <SideSqr /> HangHae99
      </FirstBox>
      <SecondBox>
        <StandardDiv className="plantext">
          90일 이전에 전송된 메시지 및 파일은 유료 플랜에서 사용가능합니다.
        </StandardDiv>
      </SecondBox>
      <SecondBox>
        <StandardDiv>HangHae99에 초대 요청</StandardDiv>
      </SecondBox>
      <SecondBox>
        <StandardDiv>환경설정</StandardDiv>
        <StandardDiv>관리</StandardDiv>
      </SecondBox>
      <SecondBox>
        <StandardDiv>도구</StandardDiv>
      </SecondBox>
      <SecondBox>
        <StandardDiv>모바일에서 HangHae99에 로그인하기</StandardDiv>
        <StandardDiv>HangHae99에서 로그아웃</StandardDiv>
      </SecondBox>
      <StandardDiv className="last">워크스페이스 추가</StandardDiv>
    </SideDetail>
  );
};

const SideDetail = styled.div`
  position: absolute;
  left: 20px;
  width: 330px;
  height: 500px;
  background-color: #f8f8f8;
  border: none;
  border-radius: 7px;
  box-shadow: 0px 3px 3px 0px black;
`;

const FirstBox = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: black;
  display: flex;
  align-items: center;
  padding: 20px 0px 20px 30px;
  border-bottom: 1px solid #d8d8d8;
`;
const SecondBox = styled.div`
  padding: 10px 0px 10px 0px;
  border-bottom: 1px solid #d8d8d8;
`;

const SideSqr = styled.div`
  background-color: #5d3d5e;
  width: 50px;
  height: 50px;
  border-radius: 5px;
  position: relative;
  margin-right: 20px;
  background-image: url(data:image/png;base64,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);
  background-size: cover;
  background-repeat: no-repeat;
`;

const StandardDiv = styled.div`
  font-weight: 500;
  display: flex;
  align-items: center;
  padding: 5px 10px 5px 30px;
  color: black;
  :hover {
    font-weight: 800;
    color: white;
    background-color: #1264a3;
    cursor: pointer;
  }
  &.last {
    margin-top: 10px;
  }
  &.plantext {
    font-size: 15px;
    line-height: 150%;
  }
`;

export default HeaderContent;
