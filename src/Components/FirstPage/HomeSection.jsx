import Aos from 'aos';
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const HomeSection = () => {
    useEffect(() => {
        Aos.init({
            duration: 1000, // Duration of animations
            once: true, // Whether animation should happen only once
        });
        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 100);
    })

    return (
        <>
            <div className="flex flex-col items-center mt-[40px] mb-[96px] gap-10 ">
                <div className=" flex justify-center self-stretch ">
                    <div className="mx-auto flex flex-col w-full max-w-6xl self-end xl:px-0 px-5">
                        <div className="flex flex-col  w-full  items-center justify-center">
                            <p className='block text-center	w-full text-[30px] sm:text-[44px] md:text-[48px] font-medium text-black-900' data-aos="fade-up">HomePages</p>
                        </div>

                        <div className="flex mt-[30px] flex-wrap">
                            <div className="flex md:w-[50%] p-[10px]">
                                <Link to='/home1' className=" relative border border-lime-900  rounded-[10px] overflow-hidden" data-aos="zoom-in">
                                    <div className="img-content h-full overflow-hidden">
                                        <img src="assets/Images/Home1.png" className='w-full  transition-all	 hover:scale-105' alt="" />
                                    </div>
                                    <div className="absolute  bottom-[0] left-[0px] bg-[#ce9d5dce] text-white px-[35px] py-[10px]    rounded-tr-[50px]">
                                       
                                            <p className='text-[14px] font-[500] text-white '>Home 1</p>
                                       
                                    </div>
                                </Link>
                            </div>
                            <div className="flex md:w-[50%] p-[10px]">
                                <Link to='/home2' className=" relative border border-lime-900  rounded-[10px] overflow-hidden" data-aos="zoom-in">
                                    <div className="img-content h-full overflow-hidden">
                                        <img src="assets/Images/Home2.png" className='w-full  transition-all	 hover:scale-105' alt="" />
                                    </div>
                                    <div className="absolute  bottom-[0] left-[0px] bg-[#ce9d5dce] text-white px-[35px] py-[10px]    rounded-tr-[50px]">
                                      
                                            <p className='text-[14px] font-[400] '>Home 2</p>
                                       
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeSection