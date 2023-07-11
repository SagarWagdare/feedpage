import "./App.css";
import Auth from "../src/routes/Auth";
import UnAuth from "../src/routes/Auth";
import Header from "./components/Header";
import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import Login from "./AccountManagement/Login";
import Signup from "./AccountManagement/Signup";
import { useEffect, useState } from "react";
import NotFound from "./components/NotFound";

function App() {
  const [isToken, setIsToken] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsToken(token);
  }, []);
  return (
    <>
      <Header />
      <Routes>
        {isToken ? (
          <Route path="/" element={<HomePage />} />
        ) : (
          <Route path="/" element={<NotFound />} />
        )}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
