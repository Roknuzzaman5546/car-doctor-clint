import { createContext, useState } from "react";

export const Authcontext = createContext(null);

const Authprovider = ({children}) => {
    const [user, setUser] = useState([])
    const [loading, setLoading] = useState(true)


    const authInfo ={

    }
    return (
        <Authcontext.Provider value={authInfo}>
            {children}
        </Authcontext.Provider>
    );
};

export default Authprovider;