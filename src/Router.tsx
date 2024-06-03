import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import MainPage from "./pages/MainPage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import ArticlePage from "./pages/ArticlePage";
import CommentPage from "./pages/CommentPage";
import NotFoundPage from "./pages/NotFoundPage";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "",
                element: <MainPage />
            },
            {
                path: "signin",
                element: <SignInPage />
            },
            {
                path: "signup",
                element: <SignUpPage />
            },
            {
                path: "article",
                element: <ArticlePage />
            },
            {
                path: "comment",
                element: <CommentPage />
            }
        ],
        errorElement: <NotFoundPage />
    }
]);

export default Router;