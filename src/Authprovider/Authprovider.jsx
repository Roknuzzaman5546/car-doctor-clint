import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase";
import axios from "axios";
import { AiTwotoneFileZip } from "react-icons/ai";
export const Authcontext = createContext(null);

const Authprovider = ({ children }) => {
    const [user, setUser] = useState([])
    const [loading, setLoading] = useState(true)

    const signup = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signin = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logout = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
            const userElmail = currentuser?.email || user?.email;
            const loggedemail = { email: userElmail}
            setLoading(false)
            setUser(currentuser)
            if (currentuser) {
                axios.post('https://car-doctor-resources.web.app/jwt', loggedemail, { withCredentials: true })
                    .then(res => {
                        console.log('response token', res.data)
                    })
            }
            else {
                axios.post('https://car-doctor-resources.web.app/logout', loggedemail, {withCredentials: true})
                .then(res => {AiTwotoneFileZip
                    console.log(res.data)
                })
            }
        })
        return () => {
            unsubscribe()
        }
    }, [])


    const authInfo = {
        user,
        loading,
        signup,
        signin,
        logout
    }

    return (
        <Authcontext.Provider value={authInfo}>
            {children}
        </Authcontext.Provider>
    );
};

export default Authprovider;