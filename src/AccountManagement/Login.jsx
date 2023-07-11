import React, { useState } from "react";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import styles from "../css/login.module.css";
import loginimage from "../assets/6343825.jpg";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const auth = getAuth(app);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        if (res) {
          localStorage.setItem("token", res.user.accessToken);
          setTimeout(() => {
            navigate("/");
          }, 1000);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Card className={styles.login_card}>
        <div>
          <img className={styles.login_image} src={loginimage} alt="login" />
        </div>
        <Form onSubmit={handleLogin}>
          <Form.Group className="mb-2" controlId="formBasicEmail">
            <span className={styles.card_text}>Email address</span>
            <Form.Control
              type="email"
              placeholder="Enter email"
              className={styles.all_input}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-2" controlId="formBasicPassword">
            <span className={styles.card_text}>Password</span>
            <Form.Control
              type="password"
              placeholder="Password"
              className={styles.all_input}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Button variant="primary" type="submit" className={styles.login_btn}>
            Submit
          </Button>
        </Form>
      </Card>
    </>
  );
};

export default Login;
