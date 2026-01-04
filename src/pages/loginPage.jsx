import { useState } from "react";
import { Form, Button } from "react-bootstrap";

import styles from "../styles/loginPage.module.css";
import { useAuth } from "../hooks/useAuth";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isLoading, errorMessage, data, submit } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    submit(email, password);
  };

  console.log(data);

  return (
    <div className={styles.body}>
      <div className="container">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              disabled={isLoading}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              disabled={isLoading}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" type="submit" disabled={isLoading}>
            {isLoading ? "loading..." : "submit"}
          </Button>
          <hr />
          {errorMessage && <Form.Label>{errorMessage}</Form.Label>}
        </Form>
      </div>
    </div>
  );
}

export default LoginPage;
