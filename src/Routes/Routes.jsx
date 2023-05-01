import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import Category from "../Pages/Home/Category/Category";
import NewsLayout from "../Layouts/NewsLayout";
import News from "../Pages/News/News";
import Login from "../Pages/Login/Login";
import LoginLayout from "../Layouts/LoginLayout";
import Register from "../Pages/Login/Register";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
    {
        path: "/",
        element: <LoginLayout></LoginLayout>,
        children: [
            {
                path: "/",
                element: <Navigate to={"/category/0"}></Navigate>,
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/register",
                element: <Register></Register>,
            },
        ],
    },
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "category/:id",
                element: <Category></Category>,
                loader: ({ params }) =>
                    fetch(`http://localhost:5000/categories/${params.id}`),
            },
        ],
    },
    {
        path: "/news",
        element: <NewsLayout></NewsLayout>,
        children: [
            {
                path: ":id",
                element: (
                    <PrivateRoutes>
                        <News></News>
                    </PrivateRoutes>
                ),
                loader: ({ params }) =>
                    fetch(`http://localhost:5000/news/${params.id}`),
            },
        ],
    },
]);

export default router;
