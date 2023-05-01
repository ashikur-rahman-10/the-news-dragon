import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import EditorsInsight from "../Shared/EditorsInsight/EditorsInsight";

const News = () => {
    const news = useLoaderData();
    const { category_id, thumbnail_url, title, details } = news;
    // console.log(news);
    return (
        <div>
            <Card>
                <Card.Img className="img-fluid" src={thumbnail_url} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{details}</Card.Text>
                    <Link
                        className="text-decoration-none"
                        to={`/category/${category_id}`}
                    >
                        {" "}
                        <Button
                            className="d-flex align-items-center gap-2"
                            variant="danger"
                        >
                            {" "}
                            <FaArrowLeft /> All news in this category
                        </Button>
                    </Link>
                </Card.Body>
            </Card>
            <EditorsInsight></EditorsInsight>
        </div>
    );
};

export default News;
