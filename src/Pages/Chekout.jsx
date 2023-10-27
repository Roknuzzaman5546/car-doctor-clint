import { useLoaderData } from "react-router-dom";

const Chekout = () => {
    const service = useLoaderData();
    const { _id, title, price } = service;

    const handleChekout = event =>{
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
            number
        }
        fetch('')
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
                            <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
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
                            <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
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