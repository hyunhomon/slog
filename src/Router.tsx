import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import MainPage from "./pages/MainPage";
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