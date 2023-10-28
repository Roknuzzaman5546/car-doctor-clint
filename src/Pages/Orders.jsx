import { useContext, useEffect, useState } from "react";
import { Authcontext } from "../Authprovider/Authprovider";
import Ordersdetails from "./Ordersdetails";
import Swal from "sweetalert2";

const Orders = () => {
    const { user } = useContext(Authcontext)
    const [orders, setOrders] = useState([])
    const url = (`http://localhost:5000/orders?email=${user.email}`)

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [url])

    const handleUpdate = id =>{
        console.log(id , ('delete this'))
        fetch(`http://localhost:5000/orders/${id}`, {
            method: 'PUT',
            headers: {
                'content-type' : 'application/jsonn' 
            },
            body: JSON.stringify({status : 'confirmed'})
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            if (data.modifiedCount) {
                Swal.fire({
                    title: 'Success!',
                    text: 'Do you want to continue',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
    }

    const handleDelete = id =>{
        fetch(`http://localhost:5000/orders/${id}`, {
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