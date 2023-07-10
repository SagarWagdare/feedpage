import React from "react";
import Login from "../AccountManagement/Login";
import Signup from "../AccountManagement/Signup";
import { Route, Routes } from "react-router-dom";

const UnAuth = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
};

export default UnAuth;
