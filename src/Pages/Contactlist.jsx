import { FiCalendar, FiPhoneCall, } from 'react-icons/fi';
import { BiLocationPlus } from 'react-icons/bi';
const Contactlist = () => {
    return (
        <div className='my-20'>
            <div className=" h-40 rounded-lg bg-black w-10/12 mx-auto text-white flex md:flex-row flex-col gap-5 items-center justify-around">
                <div className=' flex gap-4 items-center text-xl font-bold'>
                    <h2 className=' font-bold text-xl'>
                        <BiLocationPlus></BiLocationPlus>
                    </h2>
                    <div>
                        <h2>Need a repair? our address</h2>
                        <h2>Liza Street, New York</h2>
                    </div>
                </div>
                <div className=' flex gap-4 items-center text-xl font-bold'>
                    <h2 className=' font-bold text-xl'>
                        <FiPhoneCall></FiPhoneCall>
                    </h2>
                    <div>
                        <h2>Have a question?</h2>
                        <h2>+2546 251 2658</h2>
                    </div>
                </div>
                <div className=' flex gap-4 items-center text-xl font-bold'>
                    <h2 className=' font-bold text-xl'>
                        <FiCalendar></FiCalendar>
                    </h2>
                    <div>
                        <h2>We are open monday-friday</h2>
                        <h2>7:00 am - 9:00 pm</h2>
                    </div>
                </div>
            </div>
        </div>
    );  
};


export default Contactlist;