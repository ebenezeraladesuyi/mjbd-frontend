import { createBrowserRouter } from "react-router-dom";
import {lazy} from "react"
import HomeLayout from "../layout/HomeLayout";

const HomeComp = lazy(()=> import("../pages/home/HomeComp"))

export const element = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout />,
        children: [
            {
                index: true,
                element: <HomeComp />
            }
        ]
    }
])