import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Confirm from "./Confirm";
import { useDispatch } from "react-redux";
import { __addSlack } from "../../redux/slackSlice";
import { clearSlack } from "../../redux/slackSlice";
const Signup = () => {
  const dispatch = useDispatch();
  const [isEdit, SetisEdit] = useState(true);
  const [slack, setSlack] = useState("");

  const onSubmitHandler = () => {
    SetisEdit(!isEdit);
    dispatch(clearSlack());
    dispatch(__addSlack({ email: slack }));
  };
  const onChangeHandler = (e) => {
    setSlack(e.target.value);
  };

  return (
    <>
      {isEdit ? (
        <SignupCtn>
          <div>
            <img
              style={{ transform: "scale(0.4)", height: "100px" }}
              src="https://a.slack-edge.com/bv1-10/slack_logo-ebd02d1.svg"
              alt="sd"
            />
          </div>
          <TextBox>먼저 이메일부터 입력해 보세요.</TextBox>
          <div>
            <span
              style={{ fontWeight: "1000", color: "#454245", fontSize: "18px" }}
            >
              직장에서 사용하는 이메일 주소
            </span>
            로 로그인하는 걸 추천드려요.
          </div>
          <InputBox
            type="text"
            name="slack"
            value={slack}
            onChange={onChangeHandler}
            style={{ fontSize: 20 }}
            placeholder="name@work-email.com"
          />
          <div>
            <ContinueBtn onClick={() => onSubmitHandler()}>계속</ContinueBtn>
          </div>

          <MidLine className="line">또는</MidLine>
          <GoogleBtn>
            <img
              style={{ width: "25px" }}
              src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png"
              alt="sd"
            />
            Google로 계속
          </GoogleBtn>
          <AppleBtn>
            <img
              style={{ width: "18px" }}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1667px-Apple_logo_black.svg.png"
              alt="sd"
            />
            Apple로 계속
          </AppleBtn>

          <BottomTxt>
            <div style={{ color: "#616061", fontWeight: 500 }}>
              이미 Slack을 사용하고 있나요?
            </div>
            <LinkTxt>기존 워크페이스에 로그인</LinkTxt>
          </BottomTxt>
          <div>
            <span>개인정보 보호 약관</span>
            <span> 언어 </span>
            <span>개인정보보호약관</span>
          </div>
        </SignupCtn>
      ) : (
        <Confirm />
      )}
    </>
  );
};

export default Signup;

const SignupCtn = styled.div`
  height: 680px;
  border: 1px solid none;
  margin-top: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const TextBox = styled.div`
  font-size: 50px;
  font-weight: 1000;
`;

const ContinueBtn = styled.div`
  font-size: 20px;
  font-weight: 900;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  color: white;
  background-color: #4a154b;
  width: 450px;
  height: 50px;
  border-radius: 5px;
  cursor: pointer;
  :hover {
    background-color: #5d3d5e;
  }
`;

const GoogleBtn = styled.div`
  gap: 10px;
  font-size: 20px;
  font-weight: 900;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  border: 2px solid #3b80f4;
  color: #3b80f4;
  width: 450px;
  height: 50px;
  border-radius: 5px;
  cursor: pointer;
`;
const AppleBtn = styled.div`
  gap: 10px;
  font-size: 20px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  border: 2px solid black;
  color: black;
  width: 450px;
  height: 50px;
  border-radius: 5px;
  cursor: pointer;
`;
const LinkTxt = styled.div`
  color: #0b4c8c;
  font-weight: 500;
  :hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

const BottomTxt = styled.div`
  margin-top: 20px;
  text-align: center;
`;

const InputBox = styled.input`
  color: black;
  font-weight: 500;
  font-size: 23px;
  padding: 10px;
  margin-top: 20px;
  width: 427px;
  height: 30px;
  border-radius: 5px;
  border: 0.5px solid #bbbabb;
`;
const MidLine = styled.div`
  justify-content: center;
  display: flex;
  align-items: center;
  margin-top: 20px;
  width: 490px;
  text-align: center;
  font-size: 15px;
  ::after {
    display: inline-block;
    margin: 0 20px 3px 10px;
    height: 1px;
    content: "  ";
    text-shadow: none;
    background-color: #999;
    width: 40%;
  }

  ::before {
    display: inline-block;
    margin: 0 10px 3px 20px;
    height: 1px;
    content: "  ";
    text-shadow: none;
    background-color: #999;
    width: 40%;
  }
`;
