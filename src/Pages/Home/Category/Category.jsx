import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import NewsCard from "../NewsCard/NewsCard";

const Category = () => {
    const categoryNews = useLoaderData();
    const { id } = useParams();
    return (
        <div>
            {/* <h1>This is category:{categoryNews.length}</h1> */}

            {categoryNews.map((n) => (
                <section key={n._id} style={{ marginBottom: "20px" }}>
                    <NewsCard news={n}></NewsCard>
                </section>
            ))}
        </div>
    );
};

export default Category;
