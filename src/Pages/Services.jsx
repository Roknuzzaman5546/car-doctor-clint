import { useState } from "react";
import { useEffect } from "react";
import Servicesdetails from "./Servicesdetails";

const Services = () => {
    const [services, setservices] = useState([]);

    useEffect( () =>{
        fetch('services.json')
        .then(res => res.json())
        .then(data => setservices(data))
    }, [])

    return (
        <div className=" mt-5">
            <div className=" text-center space-y-2">
                <h2 className=" text-2xl text-orange-500 font-bold">Service</h2>
                <h3 className=" text-5xl font-bold ">Our Service Area</h3>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br />words which dont look even slightly believable. </p>
            </div>
            <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
                {
                    services.map(servic => <Servicesdetails key={servic._id} servic={servic}></Servicesdetails>)
                }
            </div>
        </div>
    );
};

export default Services; 