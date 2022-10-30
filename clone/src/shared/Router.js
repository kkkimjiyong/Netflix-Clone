import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "../pages/MainPage";
import SignupPage from "../pages/SignupPage";
import EntryPage from "../pages/EntryPage";
import KaKaoLogin from "../components/Signup/KaKaoLogin";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/entry" element={<EntryPage />} />
        <Route path="/signup/oauth" element={<KaKaoLogin />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
