import React from "react";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import styles from "../css/login.module.css";
import loginimage from "../assets/6343825.jpg";
const Login = () => {
  return (
    <>
      <Card className={styles.login_card}>
        <div>
          <img className={styles.login_image} src={loginimage} alt="login" />
        </div>
        <Form>
          <Form.Group className="mb-2" controlId="formBasicEmail">
            <span className={styles.card_text}>Email address</span>
            <Form.Control
              type="email"
              placeholder="Enter email"
              className={styles.all_input}
            />
          </Form.Group>

          <Form.Group className="mb-2" controlId="formBasicPassword">
            <span className={styles.card_text}>Password</span>
            <Form.Control
              type="password"
              placeholder="Password"
              className={styles.all_input}
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
