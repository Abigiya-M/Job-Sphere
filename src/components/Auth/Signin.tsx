import { Lock, Mail } from "lucide-react";
import { useState, FormEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toggleLogged } from "../../features/Slices";
import { RootState } from "../../features/store";
import { Container, Form, Button, Card, Row, Col } from "react-bootstrap";
import React from "react";

interface UserData {
  email?: string;
  password?: string;
}

export default function SignInComponent() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const values: UserData = useSelector((state: RootState) => state.slice.data);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmitForm = (e: FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      alert("All fields are required");
      return;
    }
    if (!values.email || !values.password) {
      alert("Enter a valid email and password");
      return;
    }
    if (values.email === email && values.password === password) {
      dispatch(toggleLogged(true));
      navigate("/");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <Container
      fluid
      className="d-flex justify-content-center align-items-center vh-100"
    >
      <Row className="w-100">
        <Col
          lg={6}
          className="d-none d-lg-flex justify-content-center align-items-center"
        >
          <img src="/job-hunt.png" alt="team work" className="img-fluid" />
        </Col>
        <Col
          lg={6}
          className="d-flex justify-content-center align-items-center"
        >
          <Form onSubmit={handleSubmitForm} className="w-75">
            <div className="text-center mb-4">
              <Link to="/">
                <img src="/Logo.png" alt="logo" className="w-25" />
              </Link>
            </div>

            <h3 className="text-center fw-bold">Sign In</h3>

            <Form.Group controlId="email" className="mb-3 position-relative">
              <Form.Label>Email Address</Form.Label>
              <Mail
                className="position-absolute start-0 ms-2 mt-2 text-muted"
                size={20}
              />
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email"
                className="ps-4"
              />
            </Form.Group>

            <Form.Group controlId="password" className="mb-3 position-relative">
              <Form.Label>Password</Form.Label>
              <Lock
                className="position-absolute start-0 ms-2 mt-2 text-muted"
                size={20}
              />
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className="ps-4"
              />
            </Form.Group>

            <Button type="submit" variant="primary" className="w-100 py-2">
              Sign In
            </Button>

            <div className="text-center my-3">Or</div>

            <div className="d-flex justify-content-around">
              <Link to="https://www.google.com">
                <img
                  src="/google.png"
                  className="img-fluid"
                  style={{ width: "40px" }}
                />
              </Link>
              <Link to="https://www.apple.com">
                <img
                  src="/apple.png"
                  className="img-fluid"
                  style={{ width: "40px" }}
                />
              </Link>
              <Link to="https://www.facebook.com">
                <img
                  src="/facebook.png"
                  className="img-fluid"
                  style={{ width: "40px" }}
                />
              </Link>
              <Link to="https://www.linkedin.com">
                <img
                  src="/linkedin.png"
                  className="img-fluid"
                  style={{ width: "40px" }}
                />
              </Link>
            </div>

            <div className="text-center mt-3">
              <p>
                Don't have an account? <Link to="/sign-up">Create Account</Link>
              </p>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
