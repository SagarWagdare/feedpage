import "./App.css";
import Auth from "../src/routes/Auth";
import UnAuth from "../src/routes/Auth";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import Login from "./AccountManagement/Login";
import Signup from "./AccountManagement/Signup";

function App() {
  return (
    <>
      <Header />
      {/* <Auth /> */}
      {/* <UnAuth /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
