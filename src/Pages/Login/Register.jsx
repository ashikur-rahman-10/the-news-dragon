import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { FaSignInAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Register = () => {
    const { createUser } = useContext(AuthContext);
    const [show, setShow] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [accepted, setAccepted] = useState(false);

    const handleRegister = (event) => {
        event.preventDefault();
        setError("");
        setSuccess("");
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password)
            .then((result) => {
                const user = result.user;
                setSuccess("User Register Successfull");
                event.target.reset();
                setError("");
            })
            .catch((error) => {
                setError(error.message);
            });
    };
    const handelAccepted = (event) => {
        setAccepted(event.target.checked);
    };
    return (
        <div
            style={{ minHeight: "90vh" }}
            className="w-25 mx-auto d-flex flex-column justify-content-center"
        >
            <h2 className="text-center">Login your account</h2>
            <hr className="my-4" />
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control
                        style={{ background: "#F3F3F3" }}
                        type="text"
                        required
                        name="name"
                        placeholder="Enter name"
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPhoto">
                    <Form.Label>Photo Url</Form.Label>
                    <Form.Control
                        style={{ background: "#F3F3F3" }}
                        type="text"
                        required
                        name="photo"
                        placeholder="Enter photo url"
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        style={{ background: "#F3F3F3" }}
                        type="email"
                        required
                        name="email"
                        placeholder="Enter email"
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        style={{ background: "#F3F3F3" }}
                        type={show ? "text" : "password"}
                        name="password"
                        required
                        placeholder="Password"
                    />
                </Form.Group>

                <div
                    style={{ marginBottom: "20px", cursor: "pointer" }}
                    className="text-warning"
                    onClick={() => {
                        setShow(!show);
                    }}
                >
                    {!show ? (
                        <small>Show Password</small>
                    ) : (
                        <small>Hide password</small>
                    )}
                </div>

                {/* <Form.Group
                   
                    className="mb-3"
                    controlId=""
                >
                    <Form.Check
                        // type="checkbox"
                        label={!show ? "Show Password" : "Hide Password"}
                    />
                </Form.Group> */}
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check
                        onClick={handelAccepted}
                        type="checkbox"
                        required
                        label="Accept terms and conditions"
                    />
                </Form.Group>
                <Button
                    className="w-100"
                    disabled={!accepted}
                    variant="secondary"
                    type="submit"
                >
                    <FaSignInAlt /> Register
                </Button>

                <small className="text-success">{success}</small>

                <small className="text-danger">{error}</small>
                <br />
                <Form.Text className="text-muted">
                    Already Have An Account ?{" "}
                    <Link
                        to={"/login"}
                        className="text-danger text-decoration-none"
                    >
                        Login
                    </Link>
                </Form.Text>
            </Form>
        </div>
    );
};

export default Register;
