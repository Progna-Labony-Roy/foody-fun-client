import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Dashboard from "../Pages/Dashboard/Dashboard";
import ContactUs from "../Pages/ContactUs/ContactUs";
import Shop from "../Pages/Shop/Shop";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: 'menu',
          element: <Menu></Menu>
        },
        {
          path: 'dashboard',
          element: <Dashboard></Dashboard>
        },
        {
          path: 'contact-us',
          element: <ContactUs></ContactUs>
        },
        {
          path: 'shop',
          element: <Shop></Shop>
        },
    ]
  },
]);