import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearSlack, __addSlack, __confirmSlack } from "../../redux/slackSlice";
import { Navigate, useNavigate } from "react-router-dom";

const Confirm = () => {
  const navigate = useNavigate();
  const confirmdata = useSelector((state) => state.slack.slack);
  const email = confirmdata?.payload?.email;
  const slack = confirmdata.data?.message;
  const SKEY = process.env.REACT_APP_SKEY;
  const dispatch = useDispatch();

  const [Confirmcode, SetConfirmcode] = useState({
    one: "",
    two: "",
    three: "",
    four: "",
    five: "",
    six: "",
  });
  //각각의 input 창에 대한 값 설정
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    SetConfirmcode({ ...Confirmcode, [name]: value });
  };
  //제출하기전에 이메일에 보내진 코드와 input 창에 넣어진 코드와 같은지 확인!
  const onSubmitHandler = () => {
    if (
      Confirmcode.one +
        Confirmcode.two +
        Confirmcode.three +
        Confirmcode.four +
        Confirmcode.five +
        Confirmcode.six ===
      slack
    ) {
      dispatch(__confirmSlack({ email, SKEY: SKEY }));
      navigate("/");
    } else {
      return alert("코드가 맞지 않습니다!");
    }
  };

  return (
    <SignupCtn>
      <div>
        <img
          style={{ transform: "scale(0.4)", height: "100px" }}
          src="https://a.slack-edge.com/bv1-10/slack_logo-ebd02d1.svg"
          alt="sd"
        />
      </div>
      <TextBox>코드는 이메일에서 확인하세요</TextBox>
      <TextMail>
        <span style={{ fontWeight: "600", color: "#454245", fontSize: "24px" }}>
          wldyddkssud@naver.com
        </span>
        에 6자리 코드를 전송했습니다. 코드는 잠시 후에 만료되니 서둘러
        입력하세요.
      </TextMail>
      <ConfirmWrapper>
        <ConfirmCtn>
          <ConfirmBox
            name="one"
            maxLength={1}
            onChange={onChangeHandler}
            style={{
              borderTopLeftRadius: "10px",
              borderBottomLeftRadius: " 10px",
            }}
          ></ConfirmBox>
          <ConfirmMidBox
            name="two"
            maxLength={1}
            onChange={onChangeHandler}
          ></ConfirmMidBox>
          <ConfirmBox
            name="three"
            maxLength={1}
            onChange={onChangeHandler}
            style={{
              borderTopRightRadius: "10px",
              borderBottomRightRadius: " 10px",
            }}
          ></ConfirmBox>
        </ConfirmCtn>
        <Line></Line>
        <ConfirmCtn>
          <ConfirmBox
            name="four"
            maxLength={1}
            onChange={onChangeHandler}
            style={{
              borderTopLeftRadius: "10px",
              borderBottomLeftRadius: " 10px",
            }}
          ></ConfirmBox>
          <ConfirmMidBox
            name="five"
            maxLength={1}
            onChange={onChangeHandler}
          ></ConfirmMidBox>
          <ConfirmBox
            name="six"
            maxLength={1}
            onChange={onChangeHandler}
            style={{
              borderTopRightRadius: "10px",
              borderBottomRightRadius: " 10px",
            }}
          ></ConfirmBox>
        </ConfirmCtn>
      </ConfirmWrapper>

      <SubmitBtn onClick={onSubmitHandler}>제출 </SubmitBtn>
      <TextBottom>
        고객님의 코드를 찾을 수 없나요? 스팸 폴더를 확인해 보세요!{" "}
      </TextBottom>
    </SignupCtn>
  );
};

const SignupCtn = styled.form`
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

const TextMail = styled.div`
  margin-top: 20px;
  text-align: center;
  width: 800px;
  font-size: 24px;
`;

const ConfirmBox = styled.input`
  font-size: 70px;
  text-align: center;
  width: 80px;
  height: 100px;
  border: 2px solid #999;
  :hover {
    border: 3px solid #3782e4;
    transform: scale(1.03);
  }
`;

const ConfirmMidBox = styled.input`
  font-size: 70px;
  text-align: center;
  width: 80px;
  height: 100px;
  border: 1px solid #999;
  border-top: 2px solid #999;
  border-bottom: 2px solid #999;
  :hover {
    border: 3px solid #3782e4;
    transform: scale(1.03);
  }
`;
const Line = styled.div`
  display: inline-block;
  height: 2px;
  content: "";
  text-shadow: none;
  background-color: #999;
  width: 20px;
  margin: 50px 20px 0px 20px;
`;

const ConfirmCtn = styled.div`
  display: flex;
  flex-direction: row;
`;

const ConfirmWrapper = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: row;
`;

const SubmitBtn = styled.div`
  margin-top: 30px;
  width: 580px;
  height: 20px;
  border-radius: 10px;
  border: 2px solid black;
  background-color: #4a154b;
  color: white;
  text-align: center;
  padding: 10px 0px 15px;
  font-size: 20px;
  font-weight: 900;
  :hover {
    cursor: pointer;
    background-color: #5d3d5e;
  }
`;

const TextBottom = styled.div`
  color: #454245;
  font-weight: 600;
  margin-top: 20px;
  text-align: center;
  width: 800px;
  font-size: 18px;
  font-family: "Noto Sans KR", sans-serif;
`;
export default Confirm;
