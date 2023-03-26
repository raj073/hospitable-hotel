import React, { useState, useContext } from "react";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";
import toast from "react-hot-toast";

const SignUp = () => {
  const [error, setError] = useState("");
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignUp = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photoURL, email, password);

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError("");
        form.reset();
        navigate("/");
        handleUpdateUserProfile(name, photoURL);
        toast.success("User Registration Successful", {
          position: "top-right",
        });
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
        form.reset();
        toast.error(error.message, {
          position: "top-right",
        });
      });
  };

  const handleUpdateUserProfile = (name, photoURL) => {
    const profile = {
      displayName: name,
      photoURL: photoURL,
    };

    updateUserProfile(profile)
      .then(() => {})
      .catch(() => {
        console.error(error);
      });
  };

  return (
    <div style={{ marginBottom: "200px", marginTop: "50px" }}>
      <Container>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col sm={6} md={8} lg={6} xs={12}>
            <div className="border border-3 border-primary"></div>
            <Card className="shadow">
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <h2 className="fw-bold mb-2 text-uppercase text-center">
                    Register <br />
                  </h2>
                  <p className=" mb-4 fs-3 text-uppercase text-center">
                    Hospitable Hotel
                  </p>
                  <div>
                    <Form onSubmit={handleSignUp}>
                      <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label className="text-center">
                          Full Name
                        </Form.Label>
                        <Form.Control
                          name="name"
                          type="text"
                          placeholder="Your Full Name"
                        />
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicphotoURL"
                      >
                        <Form.Label className="text-center">
                          Photo URL
                        </Form.Label>
                        <Form.Control
                          name="photoURL"
                          type="text"
                          placeholder="Your Photo URL"
                        />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center">Email</Form.Label>
                        <Form.Control
                          name="email"
                          type="email"
                          placeholder="Your Email"
                          required
                        />
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                          name="password"
                          type="password"
                          placeholder="Your Password"
                          required
                        />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox"
                      >
                        <div>
                          <Form.Text className="text-danger p-2 fw-bold shadow-lg rounded">
                            {error}
                          </Form.Text>
                        </div>
                      </Form.Group>
                      <div className="d-grid">
                        <Button
                          className="fw-bold"
                          variant="dark"
                          type="submit"
                        >
                          LOGIN
                        </Button>
                      </div>
                    </Form>

                    <div className="mt-3">
                      <p className="mb-0  text-center">
                        Don't have an account? &nbsp;&nbsp;
                        <Link className="text-primary fw-bold" to="/signin">
                          Register
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SignUp;
