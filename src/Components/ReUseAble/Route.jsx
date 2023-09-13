import { createBrowserRouter } from "react-router-dom";
import HomePage from "../HomePage/HomePage";


export const route = createBrowserRouter([
    {
        path: "/",
        element: <HomePage/>
    }
])