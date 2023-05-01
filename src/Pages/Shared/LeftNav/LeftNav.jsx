import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import EditorsInsight from "../EditorsInsight/EditorsInsight";

const LeftNav = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/categories")
            .then((res) => res.json())
            .then((data) => setCategories(data))
            .catch((error) => console.error(error));
    }, []);
    return (
        <div>
            <h2 className="text-center">All Categories</h2>
            <div className="ms-4">
                {categories.map((category) => (
                    <p key={category.id}>
                        <Link
                            to={`/category/${category.id}`}
                            className="text-decoration-none secondary-text"
                        >
                            {category.name}
                        </Link>
                    </p>
                ))}
            </div>
            <EditorsInsight></EditorsInsight>
        </div>
    );
};

export default LeftNav;
