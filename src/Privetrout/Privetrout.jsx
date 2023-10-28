import { useContext } from "react";
import { Authcontext } from "../Authprovider/Authprovider";
import { Navigate } from "react-router-dom";

const Privetrout = ({ children }) => {
    const {user, loading } = useContext(Authcontext)

    if (loading) {
        return <span className="loading loading-dots loading-lg"></span>

    }

    if (user) {
        return children;
    }

    return <Navigate to='/login' replace></Navigate>
};

export default Privetrout;