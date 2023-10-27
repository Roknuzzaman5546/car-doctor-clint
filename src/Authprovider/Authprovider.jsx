import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase";

export const Authcontext = createContext(null);

const Authprovider = ({children}) => {
    const [user, setUser] = useState([])
    const [loading, setLoading] = useState(true)

    const signup = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signin = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth, (currenuser) =>{
            setLoading(false)
            setUser(currenuser)
        })
        return () =>{
            unsubscribe()
        }
    }, [])


    const authInfo ={
        user,
        loading,
        signup,
        signin
    }

    return (
        <Authcontext.Provider value={authInfo}>
            {children}
        </Authcontext.Provider>
    );
};

export default Authprovider;