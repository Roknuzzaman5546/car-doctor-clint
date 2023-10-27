import banner1 from '../../public/assets/images/banner/1.jpg'
import banner2 from '../../public/assets/images/banner/2.jpg'
import banner3 from '../../public/assets/images/banner/3.jpg'
import banner4 from '../../public/assets/images/banner/4.jpg'

const Banner = () => {
    
    return (
        <div className=''>
            <div className="carousel w-full md:h-[600px] ">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={banner1} className="w-full rounded-lg" />
                    <div className="absolute flex items-center left-0 h-full bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                        <div className='text-white pl-7 space-y-5'>
                            <h2 className=' text-6xl font-bold'>Affordable <br />Price For Car  <br />Servicing</h2>
                            <p>There are many variations of passages of  available, <br />but the majority have suffered alteration in some form</p>
                            <div>
                                <button className=' btn  btn-error'>Discover More</button>
                                <button className=' btn btn-outline ml-2'>Latest Projects</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={banner2} className="w-full" />
                    <div className="absolute flex items-center left-0 h-full bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                        <div className='text-white pl-7 space-y-5'>
                            <h2 className=' text-6xl font-bold'>Affordable <br />Price For Car  <br />Servicing</h2>
                            <p>There are many variations of passages of  available, <br /> but the majority have suffered alteration in some form</p>
                            <div>
                                <button className=' btn  btn-error'>Discover More</button>
                                <button className=' btn btn-outline ml-2'>Latest Projects</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={banner3} className="w-full" />
                    <div className="absolute flex items-center left-0 h-full bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                        <div className='text-white pl-7 space-y-5'>
                            <h2 className=' text-6xl font-bold'>Affordable <br />Price For Car  <br />Servicing</h2>
                            <p>There are many variations of passages of  available, <br />but the majority have suffered alteration in some form</p>
                            <div>
                                <button className=' btn  btn-error'>Discover More</button>
                                <button className=' btn btn-outline ml-2'>Latest Projects</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={banner4} className="w-full" />
                    <div className="absolute flex items-center left-0 h-full bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                        <div className='text-white pl-7 space-y-5'>
                            <h2 className=' text-6xl font-bold'>Affordable <br />Price For Car  <br />Servicing</h2>
                            <p>There are many variations of passages of  available, <br />but the majority have suffered alteration in some form</p>
                            <div>
                                <button className=' btn  btn-error'>Discover More</button>
                                <button className=' btn btn-outline ml-2'>Latest Projects</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;