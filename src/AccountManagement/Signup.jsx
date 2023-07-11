import React, { useState } from "react";
import styles from "../css/signup.module.css";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import signupimage from "../assets/6310507.jpg";
import {
  createUserWithEmailAndPassword,
  getAuth,
  updateProfile,
} from "firebase/auth";
import { app } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const navigate = useNavigate();
  const auth = getAuth(app);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log(name, email, password);

  const handlesignup = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (res) => {
        const user = res.user;
        await updateProfile(user, {
          displayName: name,
        });
        if (res) {
          localStorage.setItem("token", res.user.accessToken);
          setTimeout(() => {
            navigate("/");
          }, 1000);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Card className={styles.signup_card}>
        <div>
          <img className={styles.signup_image} src={signupimage} alt="login" />
        </div>
        <Form onSubmit={handlesignup}>
          <Form.Group className="mb-2">
            <span className={styles.card_text}>Enter name</span>
            <Form.Control
              type="text"
              placeholder="Enter name..."
              className={styles.all_input}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-2" controlId="formBasicEmail">
            <span className={styles.card_text}>Email address</span>
            <Form.Control
              type="email"
              placeholder="Enter email..."
              className={styles.all_input}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-2" controlId="formBasicPassword">
            <span className={styles.card_text}>Password</span>
            <Form.Control
              type="password"
              placeholder="Enter password..."
              className={styles.all_input}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Button variant="primary" type="submit" className={styles.signup_btn}>
            Submit
          </Button>
        </Form>
      </Card>
    </>
  );
};

export default Signup;
