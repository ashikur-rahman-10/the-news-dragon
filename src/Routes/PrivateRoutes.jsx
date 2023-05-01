import React from "react";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { Spinner } from "react-bootstrap";

const PrivateRoutes = ({ children }) => {
    const location = useLocation();
    // console.log(location);

    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return (
            <div
                style={{
                    minHeight: "90vh",
                    width1: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                {" "}
                <Spinner animation="border" variant="info" />
            </div>
        );
    }
    if (user) {
        return children;
    }
    return (
        <Navigate state={{ from: location }} to={"/login"} replace></Navigate>
    );
};

export default PrivateRoutes;
