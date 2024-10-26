import Aos from 'aos';
import React, { useEffect } from 'react'
const Banner = () => {
    useEffect(() => {
        Aos.init({
            duration: 1000, // Duration of animations
            once: true, // Whether animation should happen only once
        });
    }, []);
    return (
        <>
            <div className="flex flex-col relative firstbanner-img">
                <div className="flex-col block relative">
                    <img src="assets/Images/banner4.jpg" className='w-full' alt="" />
                </div>
                <div className=" flex flex-col justify-center items-center absolute left-[0%] top-[0%] w-full h-full text-center translate-[-50%]">
                    <img src="assets/Images/logo.png" className='mb-[15px] w-[120px] mx-auto' alt=""  data-aos="fade-up"/>
                    <h1 className="lg:text-[60px] md:text-[40px] text-[25px] font-bold text-black leading-tight mb-[20px]" data-aos="fade-up">Welcome to our website</h1>
                </div>
            </div>
        </>
    )
}

export default Banner