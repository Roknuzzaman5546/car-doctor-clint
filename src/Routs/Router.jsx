import { createBrowserRouter } from "react-router-dom";
import Main from "../Components/Main/Main";
import Home from "../Components/Home/Home";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import Chekout from "../Pages/Chekout";

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
        },
        {
          path: "/chekout/:id",
          element: <Chekout></Chekout>,
          loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
        }
      ]
    },
  ]);

export default router;
