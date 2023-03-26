import React from "react";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthProvider";
import { CartContext } from "../../Contexts/CartContext/CartContext";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import Loader from "../../Component/Loader/Loader";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { user, loading } = useContext(AuthContext);
  const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
  const { cart, clearAllCart } = useContext(CartContext);
  console.log(cart);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({});

  const navigate = useNavigate();

  if (loading) {
    return <Loader></Loader>;
  }

  const handleCheckout = (data) => {
    toast.success(`Your Room Has been booked Successfully`, {
      position: "top-right",
    });
    reset();
    clearAllCart();
    navigate("/");
  };
  return (
    <div style={{ marginBottom: "200px", marginTop: "75px" }}>
      <Container>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col sm={6} md={8} lg={8} xs={12}>
            <Card className="shadow-lg">
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <h2 className="fw-bold mb-2 text-uppercase text-center">
                    Hospitable Hotel <br />
                  </h2>
                  <p className=" mb-4 fs-3 text-uppercase text-center">
                    Checkout
                  </p>
                  <div className="border border-2 border-warning"></div>
                  <div className="mt-4">
                    <Form onSubmit={handleSubmit(handleCheckout)}>
                      <Form.Group className="mb-3" controlId="name">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control
                          name="name"
                          type="text"
                          {...register("name", {
                            required: "Name is Required",
                          })}
                          placeholder="Name"
                          defaultValue={user?.displayName}
                          autoFocus
                        />
                        {errors.name && (
                          <p className="text-danger mt-1">
                            {errors.name.message}
                          </p>
                        )}
                      </Form.Group>

                      <Row className="mb-3">
                        <Form.Group as={Col} md="6" controlId="email">
                          <Form.Label>Email</Form.Label>
                          <Form.Control
                            name="email"
                            type="text"
                            {...register("email", {
                              required: "Email is Required",
                            })}
                            placeholder="Email"
                            defaultValue={user?.email}
                            autoFocus
                          />
                          {errors.email && (
                            <p className="text-danger mt-1">
                              {errors.email.message}
                            </p>
                          )}
                        </Form.Group>
                        <Form.Group as={Col} md="6" controlId="mobile">
                          <Form.Label>Mobile No</Form.Label>
                          <Form.Control
                            name="mobile"
                            type="number"
                            {...register("mobile", {
                              required: "Mobile No is Required",
                            })}
                            placeholder="Mobile"
                            autoFocus
                          />
                          {errors.mobile && (
                            <p className="text-danger mt-1">
                              {errors.mobile.message}
                            </p>
                          )}
                        </Form.Group>
                      </Row>

                      <Form.Group className="mb-3" controlId="address">
                        <Form.Label>Address</Form.Label>
                        <Form.Control
                          name="address"
                          as="textarea"
                          rows={2}
                          {...register("address", {
                            required: "Address is Required",
                          })}
                        />
                        {errors.address && (
                          <p className="text-danger mt-1">
                            {errors.address.message}
                          </p>
                        )}
                      </Form.Group>

                      <Form.Group>
                        {/* <Elements stripe={stripePromise}>
                          <CheckoutForm booking={cart}></CheckoutForm>
                        </Elements> */}
                      </Form.Group>

                      <div className="d-grid mt-3">
                        <Button
                          className="fw-bold rounded-0"
                          variant="btn btn-dark"
                          type="submit"
                        >
                          Booking Confirmed
                        </Button>
                      </div>
                    </Form>
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

export default Checkout;
