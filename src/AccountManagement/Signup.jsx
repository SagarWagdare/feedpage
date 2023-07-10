import React from "react";
import styles from "../css/signup.module.css";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import signupimage from "../assets/6310507.jpg";
const Signup = () => {
  return (
    <>
      <Card className={styles.signup_card}>
        <div>
          <img className={styles.signup_image} src={signupimage} alt="login" />
        </div>
        <Form>
          <Form.Group className="mb-2">
            <span className={styles.card_text}>Enter name</span>
            <Form.Control
              type="text"
              placeholder="Enter name..."
              className={styles.all_input}
            />
          </Form.Group>
          <Form.Group className="mb-2" controlId="formBasicEmail">
            <span className={styles.card_text}>Email address</span>
            <Form.Control
              type="email"
              placeholder="Enter email..."
              className={styles.all_input}
            />
          </Form.Group>

          <Form.Group className="mb-2" controlId="formBasicPassword">
            <span className={styles.card_text}>Password</span>
            <Form.Control
              type="password"
              placeholder="Enter password..."
              className={styles.all_input}
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
