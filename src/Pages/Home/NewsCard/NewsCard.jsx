import moment from "moment/moment";
import React from "react";
import { Button, Card, Col, Image } from "react-bootstrap";
import {
    FaEye,
    FaRegBookmark,
    FaRegStar,
    FaShareAlt,
    FaStar,
} from "react-icons/fa";
import Rating from "react-rating";
import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
    // console.log(news);
    const { _id, author, thumbnail_url, title, details, total_view, rating } =
        news;
    return (
        <Card className="">
            <Card.Header className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center gap-4">
                    <div>
                        <Image
                            style={{
                                height: "40px",
                                width: "40px",
                                borderRadius: "50%",
                            }}
                            src={author?.img}
                            roundedCircle
                        />
                    </div>
                    <div>
                        <h5 className="mb-0">{author.name}</h5>
                        <small>
                            {" "}
                            {moment(author?.published_date).format("YYYY-MM-D")}
                        </small>
                    </div>
                </div>
                <div className="d-flex gap-2">
                    <FaRegBookmark></FaRegBookmark>
                    <FaShareAlt></FaShareAlt>
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img variant="top" src={thumbnail_url} />
                <Card.Text>
                    {details.length < 250 ? (
                        <>{details}</>
                    ) : (
                        <>
                            {details.slice(0, 250)}...{" "}
                            <Link to={`/news/${_id}`}>Read more</Link>
                        </>
                    )}
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted d-flex align-items-center justify-content-between">
                <div>
                    <Rating
                        placeholderRating={rating.number}
                        readonly
                        emptySymbol={<FaStar></FaStar>}
                        placeholderSymbol={
                            <FaStar className="text-warning"></FaStar>
                        }
                        fullSymbol={<FaRegStar></FaRegStar>}
                    />
                </div>
                <div className="d-flex gap-2 align-items-center">
                    <FaEye></FaEye>
                    {total_view}
                </div>
            </Card.Footer>
        </Card>
    );
};

export default NewsCard;
