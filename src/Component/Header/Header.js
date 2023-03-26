import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../logo.png";
import Button from "react-bootstrap/Button";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";
import toast from "react-hot-toast";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { Image } from "react-bootstrap";
import { FaUserAlt, FaShoppingCart } from "react-icons/fa";
import "./Hearder.css";
import { CartContext } from "../../Contexts/CartContext/CartContext";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const { roomAmount } = useContext(CartContext);
  const navigate = useNavigate();

  const handleSignOut = () => {
    logOut()
      .then(() => {
        navigate("/signin");
        toast.success("User Successfully Logout", {
          position: "top-right",
        });
      })
      .catch((error) => {
        console.log(error);
        toast.error(error, {
          position: "top-right",
        });
      });
  };
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        className="shadow"
        fixed="top"
      >
        <Container>
          <Link to={"/"} className="text-white text-decoration-none">
            <Navbar.Brand>
              <img
                src={logo}
                width="35"
                height="35"
                className="d-inline-block align-top"
                alt="logo"
              />{" "}
              Hospitable Hotel
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="m-auto">
              <Nav.Link className="me-3">
                <Link className="text-white text-decoration-none fs-6" to={"/"}>
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link className="me-3">
                <Link
                  className="text-white text-decoration-none fs-6"
                  to={"/addroom"}
                >
                  Add Room
                </Link>
              </Nav.Link>
              <Nav.Link className="me-3">
                <Link
                  className="text-white text-decoration-none fs-6"
                  to={"/cart"}
                >
                  Cart
                </Link>
              </Nav.Link>
            </Nav>
            <Nav>
              {user?.uid ? (
                <>
                  <Nav.Link>
                    <OverlayTrigger
                      placement="bottom"
                      overlay={
                        <Tooltip id="tooltip">{user?.displayName}</Tooltip>
                      }
                    >
                      <span className="d-inline-block">
                        {user?.photoURL ? (
                          <Image
                            style={{ height: "40px" }}
                            roundedCircle
                            src={user?.photoURL}
                          ></Image>
                        ) : (
                          <FaUserAlt></FaUserAlt>
                        )}
                      </span>
                    </OverlayTrigger>{" "}
                    &nbsp;&nbsp;
                    <Link>
                      <Button
                        onClick={handleSignOut}
                        variant="outline-warning"
                        className="fw-bold"
                        size="sm"
                      >
                        Sign Out
                      </Button>{" "}
                    </Link>
                  </Nav.Link>
                </>
              ) : (
                <>
                  <Nav.Link>
                    <Link to={"/signin"}>
                      <Button
                        variant="outline-info"
                        className="fw-bold"
                        size="sm"
                      >
                        Sign In
                      </Button>{" "}
                    </Link>
                  </Nav.Link>
                  <Nav.Link eventKey={2}>
                    <Link to={"/signup"}>
                      <Button
                        variant="outline-primary"
                        className="fw-bold text-white"
                        size="sm"
                      >
                        Sign Up
                      </Button>{" "}
                    </Link>
                  </Nav.Link>
                </>
              )}{" "}
              &nbsp;&nbsp;&nbsp;
              <Link to={"/cart"}>
                <div className="cart mt-2">
                  <span className="count">{roomAmount}</span>
                  <FaShoppingCart className="material-icons"></FaShoppingCart>
                </div>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
