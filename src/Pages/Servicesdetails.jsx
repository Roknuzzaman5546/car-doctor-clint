import { AiOutlineArrowRight, } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Servicesdetails = ({ servic }) => {
    const { _id, img, title, price } = servic;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={img} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl font-bold">{title}</h2>
                    <div className="card-actions flex items-center justify-between">
                        <p className=" text-orange-500 text-xl font-bold">Price: {price}</p>
                        <Link to={`/chekout/${_id}`}>
                            <button className=" text-orange-500 font-bold text-2xl"><AiOutlineArrowRight></AiOutlineArrowRight></button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Servicesdetails;