import axios from "axios";
import { useEffect } from "react";
import useAuth from "./Useauth";
import { useNavigate } from "react-router-dom";


const axiosSecure = axios.create({
    baseURL: 'https://car-doctor-resources.web.app',
    withCredentials: true
})

const useAxiosSecure = () => {
    const { logout } = useAuth();
    const navigate = useNavigate();
    useEffect(() => {
        axiosSecure.interceptors.response.use(res => {
            return res;
        }, error => {
            console.log('error tracked in the intercrapter', error.response)
            if (error.response.status === 401 || error.response.status === 403) {
                console.log('log out user')
                logout(() =>{
                    navigate('/login')
                })
                    .then()
                    .catch(error => {
                        console.log(error.message)
                    })
            }
        })
    }, [])

    return axiosSecure;
};

export default useAxiosSecure;