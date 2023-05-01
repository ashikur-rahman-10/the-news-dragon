import React from "react";
import "./RightNav.css";
import { Button, ListGroup } from "react-bootstrap";
import {
    FaGoogle,
    FaGithub,
    FaTwitter,
    FaInstagram,
    FaFacebook,
} from "react-icons/fa";
import QZone from "../QZone/QZone";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";

const RightNav = () => {
    const { user } = useContext(AuthContext);
    return (
        <div>
            {!user ? (
                <div className="d-flex flex-column gap-3">
                    <h5>Login with</h5>
                    <Button variant="outline-primary">
                        <FaGoogle /> Google
                    </Button>{" "}
                    <Button variant="outline-secondary">
                        <FaGithub /> Github
                    </Button>
                </div>
            ) : (
                <span></span>
            )}
            <h5>Find us on</h5>
            <div>
                <ListGroup>
                    <ListGroup.Item>
                        <FaFacebook /> Facebook
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <FaInstagram /> Instagram
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <FaTwitter /> Twitter
                    </ListGroup.Item>
                </ListGroup>
            </div>
            <QZone></QZone>
            <div className="p-5 side-banner d-flex flex-column gap-3">
                <h2>Create an Amazing Newspaper</h2>
                <p>
                    Discover thousands of options, easy to customize layouts,
                    one-click to import demo and much more.
                </p>
                <button
                    style={{
                        background: "#D72050",
                        color: "white",
                        border: "none",
                        padding: "10px",
                        fontWeight: "500",
                    }}
                >
                    Learn More
                </button>
            </div>
        </div>
    );
};

export default RightNav;
