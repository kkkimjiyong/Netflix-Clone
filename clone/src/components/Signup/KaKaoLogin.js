import React from "react";
import { useEffect } from "react";
import axios from "axios";

const KaKaoLogin = () => {
  let href = window.location.href;
  //href값에서 code값만 거내오면 된다.
  console.log(href);
  let params = new URL(window.location.href).searchParams;
  let code = params.get("code");

  //이 코드를 백엔드로 보내주면됨
  console.log(code);

  const Fetch = async () => {
    try {
      const { data } = await axios.post("특정 url", code);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // Fetch();
  }, []);

  return <div>잠시만 기다려 주세요~~~</div>;
};

export default KaKaoLogin;
