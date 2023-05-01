import React from "react";
import { useContext } from "react";
import { Button, Container } from "react-bootstrap";
import { AuthContext } from "../../../Providers/AuthProvider";
import { Link } from "react-router-dom";
import { FaSignInAlt, FaSignOutAlt, FaUserCircle } from "react-icons/fa";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then()
            .catch((error) => {
                console.log(error);
            });
    };
    return (
        <Container>
            <nav className="d-flex ">
                <div className="navs mx-auto">
                    <Link to={"/category/0"}>Home</Link>
                    <Link>About</Link>
                    <Link>Carrer</Link>
                </div>
                <div className="d-flex align-items-center gap-4">
                    {user && (
                        <FaUserCircle
                            style={{ height: "35px", width: "35px" }}
                        />
                    )}
                    {user ? (
                        <Button onClick={handleLogOut} variant="secondary">
                            {" "}
                            <FaSignOutAlt /> Log Out
                        </Button>
                    ) : (
                        <Link to={"/login"}>
                            <Button variant="secondary">
                                <FaSignInAlt></FaSignInAlt> Login
                            </Button>
                        </Link>
                    )}
                </div>
            </nav>
        </Container>
    );
};

export default Navbar;
