import person from '../../public/assets/images/about_us/person.jpg'
import parts from '../../public/assets/images/about_us/parts.jpg'
const Abouthome = () => {
    return (
        <div className=' mt-5'>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <div className='w-full relative'>
                        <img src={person} className="max-w-sm rounded-lg shadow-2xl w-full" />
                        <img src={parts} alt="" className=' absolute w-1/2 top-40 left-56' />
                    </div>
                    <div className=' space-y-2 w-full p-5'>
                        <h2 className='text-3xl font-bold text-orange-600'>About Us</h2>
                        <h1 className="text-5xl font-bold">We are qualified <br />& of experience <br />in this field</h1>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable.</p>
                        <p className="">the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable..</p>
                        <button className="btn bg-orange-600">Get More Info</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Abouthome;