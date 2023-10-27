import { FiPhoneCall, } from 'react-icons/fi';
const Contactlist = () => {
    return (
        <div className='my-20'>
            <div className=" h-40 rounded-lg bg-black w-10/12 mx-auto text-white">
                <div>
                </div>
                <div className=' flex gap-2 items-center'>
                    <h2>
                        <FiPhoneCall></FiPhoneCall>
                    </h2>
                    <div>
                        <h2>Have a question?</h2>
                        <h2>+2546 251 2658</h2>
                    </div>
                </div>
                <div>

                </div>
            </div>
        </div>
    );
    
};
export default Contactlist;