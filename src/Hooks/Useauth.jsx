import { useContext } from "react";
import { Authcontext } from "../Authprovider/Authprovider";

const useAuth = () => {
    const auth = useContext(Authcontext)
    return auth;
};

export default useAuth;