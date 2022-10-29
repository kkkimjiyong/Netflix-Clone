import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Entry = () => {
  const navigate = useNavigate();

  const onClickEmailHandler = () => {
    navigate("/signup");
  };
  return (
    <>
      <EntryCtn>
        <EntryDiv>
          <img
            style={{ transform: "scale(1.9)", height: "100px" }}
            src="https://ifh.cc/g/zgOADY.png"
            alt="sd"
          />
          <div>
            <EntryFirSpan
              style={{
                fontWeight: 900,
                color: "white",
                fontSize: "42px",
                fontFamily: "'Noto Sans KR', sans-serif",
              }}
            >
              slack은 어디에 있든 팀을 하나로
            </EntryFirSpan>
          </div>

          <ButtonDiv>
            <EntryBtn onClick={() => onClickEmailHandler()}>
              이메일로 로그인해 보세요
            </EntryBtn>
          </ButtonDiv>
          <TextDiv>
            <span
              style={{
                color: " #c9b9c2",
                fontSize: "15px",
              }}
            >
              웹 브라우저에서 로그인하면 여기로 다시 이동합니다.
            </span>
          </TextDiv>
        </EntryDiv>
      </EntryCtn>
    </>
  );
};

export default Entry;

const EntryCtn = styled.div`
  background-color: #4a154b;

  /* justify-content: space-around; */
  display: flex;
  flex-direction: column;
  /* align-items: flex-start; */
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-image: url("https://ifh.cc/g/3tpZgJ.png");
  background-repeat: no-repeat;
  background-size: cover;
`;
const EntryBtn = styled.button`
  width: 301px;
  height: 44px;
  border-radius: 5px;
  border: none;
  outline: none;
  color: white;
  font-size: 20px;
  font-weight: 700;
  cursor: pointer;
  background-color: #007a5a;
  transition: all 0.1s;
  :hover {
    background-color: #148567;
  }
`;
const EntryDiv = styled.div`
  margin: 0 0 130px 100px;
`;
const EntrySecSpan = styled.div`
  margin-bottom: 50px;
`;
const EntryFirSpan = styled.div`
  margin-top: 10px;
  width: 400px;
  line-height: 110%;
`;
const ButtonDiv = styled.div`
  margin-top: 40px;
`;
const TextDiv = styled.div`
  margin-top: 20px;
`;
