import React from "react";
import Header from "../Pages/Shared/Header/Header";
import { Col, Container, Row } from "react-bootstrap";
import RightNav from "../Pages/Shared/RightNav/RightNav";
import Footer from "../Pages/Shared/Footer/Footer";
import { Outlet } from "react-router-dom";

const NewsLayout = () => {
    return (
        <div className="mx-auto">
            <Header></Header>
            <Container>
                <Row>
                    <Col lg={9}>
                        <Outlet></Outlet>
                    </Col>
                    <Col lg={3}>
                        <RightNav />
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default NewsLayout;
