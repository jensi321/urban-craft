import Aos from 'aos';
import React, { useEffect } from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const About = () => {
    useEffect(() => {
        Aos.init({ once: true }); 
    }, []);
    return (
        <>
            <div className="flex flex-col items-center lg:my-[90px] sm:my-[65px] my-[45px]  " data-aos="fade-up" data-aos-duration="1500">
                <div className=" flex w-full  flex-col gap-8 px-0 ">
                    <div className="flex bg-[#b59876]   ">
                        <div className="lg:mx-[auto] max-w-6xl w-full z-10 flex sm:flex-row flex-col p-[2.3%]  items-center about-banner relative">
                            <div className="sm:w-[44.66%] w-full py-[3.33%] z-10" data-aos="fade-up" data-aos-duration="1500">
                                <img src="assets/Images/aboutbanner.jpeg" className='w-full' alt="" />
                            </div>
                            <div className="sm:w-[55.54%] sm:bg-transparent bg-white w-full z-10 p-[4.68%] " data-aos="fade-up" data-aos-duration="1500">
                                <h2 className='sm:max-w-[370px] w-full text-[40px] font-[500]'>How to Style a Beautiful Bay Window</h2>
                                <p className='mb-[40px] text-[14px] font-[400]'>Interior designer and blogger Leoma Harper of @Styletheclutter shares her 3 top tips for how to create the perfect bay window
                                </p>
                                <Link><span className='flex items-center gap-3 font-[500] text-[16px]'>Read more <FaArrowRightLong /></span> </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About