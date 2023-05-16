import React from "react";
import "./HomePage.css";
import ProfileCard from "./ProfileCard";
import PostCard from "./PostCard";
import { Row } from "react-bootstrap";
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
