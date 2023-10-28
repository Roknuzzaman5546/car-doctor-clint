const Ordersdetails = ({ order, handleDelete, handleUpdate }) => {
    const { _id, img, name, date, number, email } = order;

    return (
        <tr>
            <th>
                <button className="btn btn-circle" onClick={() => handleDelete(_id)}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>

            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-40 h-40">
                            <img src={img} alt="" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold text-xl">{name}</div>
                        <div className="opacity-50 font-bold">{email}</div>
                    </div>
                </div>
            </td>
            <td className=" text-xl font-bold">
                {number}
            </td>
            <td className=" text-xl font-bold">{date}</td>
            <th>
                <button className="btn btn-ghost font-bold" onClick={() =>handleUpdate(_id)}>Confirm</button>
            </th>
        </tr>
    );
};

export default Ordersdetails;