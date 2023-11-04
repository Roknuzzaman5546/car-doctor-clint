import { useContext, useEffect, useState } from "react";
import { Authcontext } from "../Authprovider/Authprovider";
import Ordersdetails from "./Ordersdetails";
import Swal from "sweetalert2";
// import axios from "axios";
import useAxiosSecure from "../Hooks/useAxiosSecure";

const Orders = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useContext(Authcontext)
    const [orders, setOrders] = useState([])
    const url = (`/orders?email=${user.email}`)

    useEffect(() => {
        axiosSecure.get(url)
            .then(res => {
                setOrders(res.data)
            })

        // fetch(url)
        //     .then(res => res.json())
        //     .then(data => setOrders(data))
    }, [url, axiosSecure])

    const handleUpdate = id => {
        console.log(id, ('delete this'))
        fetch(`https://car-doctor-resources.web.app/orders/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'confirmed' })
        })

            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Updated successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
                const remanings = orders.filter(order => order._id !== id)
                const updated = orders.find(order => order._id === id)
                const newdata = [updated, ...remanings]
                setOrders(newdata)
            })
    }

    const handleDelete = id => {
        fetch(`https://car-doctor-resources.web.app/orders/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Do you want to continue',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                    const remaings = orders.filter(order => order._id !== id)
                    setOrders(remaings)
                }
            })
    }

    return (
        <div className=" mt-20">
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <h2 className=" text-2xl font-bold">Delete</h2>
                            </th>
                            <th className=" text-2xl font-bold">Name</th>
                            <th className=" text-2xl font-bold">Number</th>
                            <th className=" text-2xl font-bold">Date</th>
                            <th className=" text-2xl font-bold">Order Confirem</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map(order => <Ordersdetails
                                key={order._id}
                                order={order}
                                handleDelete={handleDelete}
                                handleUpdate={handleUpdate}
                            ></Ordersdetails>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Orders;