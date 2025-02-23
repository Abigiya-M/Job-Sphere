import { Lock, Mail, User } from "lucide-react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setData, toggleLogged } from "../../features/Slices";
import { Form, Button, Container, Row, Col, InputGroup } from "react-bootstrap";
import React from "react";

export default function SignUpComponent() {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      alert("All fields are required");
      return;
    }
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    dispatch(setData({ firstName, lastName, email, password }));
    dispatch(toggleLogged(true));
    navigate("/");
  };

  return (
    <Container fluid className="vh-100 d-flex align-items-center">
      <Row className="w-100">
        {/* Form Section */}
        <Col xs={12} md={8} lg={6} className="mx-auto">
          <Form
            onSubmit={handleSubmitForm}
            className="shadow-lg p-4 bg-white rounded"
          >
            <div className="text-center mb-4">
              <Link to="/">
                <img src="/Logo.png" alt="logo" className="w-25" />
              </Link>
              <h3 className="fw-bold text-dark mt-2">Create Your Account</h3>
            </div>

            {/* First Name */}
            <Form.Group className="mb-3">
              <InputGroup>
                <InputGroup.Text>
                  <User size={18} />
                </InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </InputGroup>
            </Form.Group>

            {/* Last Name */}
            <Form.Group className="mb-3">
              <InputGroup>
                <InputGroup.Text>
                  <User size={18} />
                </InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </InputGroup>
            </Form.Group>

            {/* Email */}
            <Form.Group className="mb-3">
              <InputGroup>
                <InputGroup.Text>
                  <Mail size={18} />
                </InputGroup.Text>
                <Form.Control
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </InputGroup>
            </Form.Group>

            {/* Password */}
            <Form.Group className="mb-3">
              <InputGroup>
                <InputGroup.Text>
                  <Lock size={18} />
                </InputGroup.Text>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </InputGroup>
            </Form.Group>

            {/* Confirm Password */}
            <Form.Group className="mb-3">
              <InputGroup>
                <InputGroup.Text>
                  <Lock size={18} />
                </InputGroup.Text>
                <Form.Control
                  type="password"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </InputGroup>
            </Form.Group>

            {/* Submit Button */}
            <Button type="submit" className="w-100 fw-bold" variant="primary">
              Create Account
            </Button>

            {/* Divider */}
            <div className="text-center mt-3 mb-3">
              <span className="fw-bold text-muted">OR</span>
            </div>

            {/* Social Logins */}
            <div className="d-flex justify-content-between">
              <Link to="https://www.google.com">
                <img src="/google.png" className="img-fluid" width="35" />
              </Link>
              <Link to="https://www.apple.com">
                <img src="/apple.png" className="img-fluid" width="35" />
              </Link>
              <Link to="https://www.facebook.com">
                <img src="/facebook.png" className="img-fluid" width="35" />
              </Link>
              <Link to="https://www.linkedin.com">
                <img src="/linkedin.png" className="img-fluid" width="35" />
              </Link>
            </div>

            {/* Already Have an Account? */}
            <div className="text-center mt-3">
              <span className="text-dark">Already have an account? </span>
              <Link to="/sign-in" className="text-primary fw-bold">
                Sign In
              </Link>
            </div>
          </Form>
        </Col>

        {/* Image Section (Visible on Larger Screens) */}
        <Col
          lg={6}
          className="d-none d-lg-flex align-items-center justify-content-center"
        >
          <img src="/team.png" alt="team work" className="img-fluid w-75" />
        </Col>
      </Row>
    </Container>
  );
}
