import { Outlet } from "react-router-dom";
import Navbar from "../../Pages/Navbar/Navbar";
import Fotter from "../../Pages/Footer/Fotter";

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Fotter></Fotter>
        </div>
    );
};

export default Main;