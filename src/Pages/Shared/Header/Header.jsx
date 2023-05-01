import React from "react";
import moment from "moment/moment";
import "./Header.css";
import { Button, Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import { FaSignInAlt, FaSignOutAlt, FaUserCircle } from "react-icons/fa";
const Header = () => {
    const { user } = useContext(AuthContext);
    return (
        <Container>
            <div className="text-center my-4">
                <img
                    className="img-fluid"
                    src="https://raw.githubusercontent.com/ashikur-rahman-10/the-news-dragon/main/public/logo.png"
                    alt=""
                />
                <p>
                    <small className="text-secondary">
                        Journalism Without Fear or Favour
                    </small>
                </p>
                <p>{moment().format("dddd, MMMM D, YYYY")}</p>
            </div>
            <div className="d-flex bg-custom-secondary px-4 py-2">
                <Button variant="danger">Latest</Button>
                <Marquee pauseOnHover className="text-danger ">
                    I can be a React component, multiple React components, or
                    just some text.
                </Marquee>
            </div>

            {/* Navabr */}

            {/* <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link href="#features">Home</Nav.Link>
                            <Nav.Link href="#pricing">About</Nav.Link>
                            <Nav.Link href="#pricing">Carrer</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">Profile</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                <Button variant="secondary">Login</Button>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar> */}
        </Container>
    );
};

export default Header;
