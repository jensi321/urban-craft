import Aos from 'aos';
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const InnerPage = () => {
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
                            <p className='block text-center	w-full text-[30px] sm:text-[44px] md:text-[48px] font-medium text-black-900' data-aos="fade-up">Inner Pages</p>
                        </div>

                        <div className="flex flex-wrap mt-[30px]">
                            <div className="flex lg:w-[33%] sm:w-[50%] w-full p-[10px]">
                                <Link to='/productlist' className=" relative border border-lime-900  rounded-[10px] overflow-hidden" data-aos="zoom-in">
                                    <div className="img-content h-full">
                                        <img src="assets/Images/productList.png" className='w-full h-full object-cover transition-all	 hover:scale-105	' alt="" />

                                    </div>
                                    <div className="absolute  bottom-[0] left-[0px] bg-[#ce9d5dce] text-white px-[35px] py-[10px]    rounded-tr-[50px]">
                                       
                                            <p className='text-[14px] font-[500] text-white '>Product List</p>
                                      
                                    </div>

                                </Link>
                            </div>
                            <div className="flex lg:w-[33%] sm:w-[50%] w-full p-[10px]">
                                <Link to='/profile' className=" relative border border-lime-900  rounded-[10px] overflow-hidden" data-aos="zoom-in">
                                    <div className="img-content h-full">
                                        <img src="assets/Images/profile.png" className='w-full h-full object-cover transition-all	 hover:scale-105	' alt="" />
                                    </div>
                                    <div className="absolute  bottom-[0] left-[0px] bg-[#ce9d5dce] text-white px-[35px] py-[10px]    rounded-tr-[50px]">
                                       
                                            <p className='text-[14px] font-[500] text-white '>Profile Page</p>
                                        
                                    </div>
                                </Link>
                            </div>
                            <div className="flex lg:w-[33%] sm:w-[50%] w-full p-[10px]">
                                <Link to='/contact' className=" relative border border-lime-900  rounded-[10px] overflow-hidden" data-aos="zoom-in">
                                    <div className="img-content h-full">
                                        <img src="assets/Images/contactUs.png" className='w-full h-full object-cover transition-all	 hover:scale-105	' alt="" />
                                    </div>
                                    <div className="absolute  bottom-[0] left-[0px] bg-[#ce9d5dce] text-white px-[35px] py-[10px]    rounded-tr-[50px]">
                                       
                                            <p className='text-[14px] font-[500] text-white '>Contact Page</p>
                                      
                                    </div>
                                </Link>
                            </div>
                            <div className="flex lg:w-[33%] sm:w-[50%] w-full p-[10px]">
                                <Link to='/faq' className=" relative border border-lime-900  rounded-[10px] overflow-hidden" data-aos="zoom-in">
                                    <div className="img-content h-full">
                                        <img src="assets/Images/faq.png" className='w-full h-full object-cover transition-all	 hover:scale-105	' alt="" />
                                    </div>
                                    <div className="absolute  bottom-[0] left-[0px] bg-[#ce9d5dce] text-white px-[35px] py-[10px]    rounded-tr-[50px]">
                                        
                                            <p className='text-[14px] font-[500] text-white '>FAQ Page</p>
                                       
                                    </div>
                                </Link>
                            </div>
                            <div className="flex lg:w-[33%] sm:w-[50%] w-full p-[10px]">
                                <Link to='/about' className=" relative border border-lime-900  rounded-[10px] overflow-hidden" data-aos="zoom-in">
                                    <div className="img-content h-full">
                                        <img src="assets/Images/about.png" className='w-full h-full object-cover transition-all	 hover:scale-105	' alt="" />
                                    </div>
                                    <div className="absolute  bottom-[0] left-[0px] bg-[#ce9d5dce] text-white px-[35px] py-[10px]    rounded-tr-[50px]">
                                        
                                            <p className='text-[14px] font-[500] text-white '>About Page</p>
                                       
                                    </div>
                                </Link>
                            </div>
                            <div className="flex lg:w-[33%] sm:w-[50%] w-full p-[10px]">
                                <Link to='/blog' className=" relative border border-lime-900  rounded-[10px] overflow-hidden" data-aos="zoom-in">
                                    <div className="img-content h-full">
                                        <img src="assets/Images/blogPage.png" className='w-full h-full object-cover transition-all	 hover:scale-105	' alt="" />
                                    </div>
                                    <div className="absolute  bottom-[0] left-[0px] bg-[#ce9d5dce] text-white px-[35px] py-[10px]    rounded-tr-[50px]">
                                        
                                            <p className='text-[14px] font-[500] text-white '>Blog Page</p>
                                       
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

export default InnerPage