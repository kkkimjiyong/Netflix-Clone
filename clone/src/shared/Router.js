import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "../pages/MainPage";
import SignupPage from "../pages/SignupPage";
import EntryPage from "../pages/EntryPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/entry" element={<EntryPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
