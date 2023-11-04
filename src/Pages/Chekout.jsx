import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { Authcontext } from "../Authprovider/Authprovider";

const Chekout = () => {
    const service = useLoaderData();
    const { user } = useContext(Authcontext)

    const { title, img } = service;

    const handleChekout = event => {
        event.preventDefault();
        const from = event.target;
        const name = from.name.value;
        const date = from.date.value;
        const email = from.email.value;
        const number = from.number.value;
        const chekOut = {
            name,
            date,
            email,
            number,   
            img  
        }
        
        console.log(chekOut)
        fetch('https://car-doctor-resources.web.app/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(chekOut)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    alert("order is confirm")
                }
            })
    }


    return (
        <div>
            <div className="hero min-h-screen w-10/12 mx-auto mb-10 bg-base-200">
                <form className=" w-1/2" onSubmit={handleChekout}>
                    <div className=" grid md:grid-cols-2 grid-cols-1 gap-4">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" defaultValue={title} className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Date</span>
                            </label>
                            <input type="date" name="date" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Email</span>
                            </label>
                            <input type="email" name="email" defaultValue={user.email} className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Phone</span>
                            </label>
                            <input type="number" name="number" placeholder="Number" className="input input-bordered" required />
                        </div>
                    </div>
                    <div className="form-control mt-6">
                        <input type="submit" className=" btn btn-error" value="Order confirm" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Chekout;