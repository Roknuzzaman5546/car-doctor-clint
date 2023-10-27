import { createBrowserRouter } from "react-router-dom";
import Main from "../Components/Main/Main";
import Home from "../Components/Home/Home";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
          path: "/login",
          element: <Login></Login>
        },
        {
          path: "/signup",
          element: <Signup></Signup>
        }
      ]
    },
  ]);

export default router;
