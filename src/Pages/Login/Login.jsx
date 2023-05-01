import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Login = () => {
    const location = useLocation();
    const from = location.state?.from?.pathname || "/category/0";
    // console.log("from login", from);
    const [show, setShow] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const navigate = useNavigate();

    const { user, loginUser } = useContext(AuthContext);
    const handleLogin = (event) => {
        event.preventDefault();
        setError("");
        setSuccess("");
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        loginUser(email, password)
            .then((result) => {
                const user = result.user;
                event.target.reset();
                setSuccess("Login Successfull");
                // setUser(user);
                setError("");
                navigate(from, { replace: true });
            })
            .catch((error) => {
                setError(error.message);
                console.log(error);
            });
    };
    return (
        <div
            style={{ minHeight: "90vh" }}
            className="w-25 mx-auto d-flex flex-column justify-content-center"
        >
            <h2 className="text-center">Login your account</h2>
            <hr className="my-5" />
            <Form onSubmit={handleLogin}>
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
                {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group> */}
                <Button className="w-100" variant="secondary" type="submit">
                    <FaSignInAlt /> Login
                </Button>
                <br />
                <Form.Text className="text-success">{success}</Form.Text>
                <br />
                <Form.Text className="text-danger">{error}</Form.Text>
                <br />
                <Form.Text className="text-muted">
                    Dont’t Have An Account ?{" "}
                    <Link
                        to={"/register"}
                        className="text-danger text-decoration-none"
                    >
                        Register
                    </Link>
                </Form.Text>
            </Form>
        </div>
    );
};

export default Login;
