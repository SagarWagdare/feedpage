import React from "react";
import ProfileCard from "./ProfileCard";
import PostCard from "./PostCard";
import { Row } from "react-bootstrap";
import "../css/homePage.module.css";
const HomePage = () => {
  return (
    <>
      <Row>
        {/* ...............Profile Card Section ...............*/}
        <ProfileCard />
        {/* ...............Post Card Section ...............*/}

        <PostCard />
      </Row>
    </>
  );
};

export default HomePage;
