import Aos from 'aos'
import React, { useEffect } from 'react'
import { FaEnvelope, FaHeadset, FaMapMarkedAlt, FaRegPaperPlane } from 'react-icons/fa'
import { TfiAlarmClock } from 'react-icons/tfi'

const Contact = () => {

    useEffect(() => {
        Aos.init({ once: true }); 
    
        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 100);
    })
    return (
        <>

            <div className="flex flex-col items-center mt-[40px] mb-[40px] gap-10 ">
                <div className=" flex justify-center self-stretch ">
                    <div className="mx-auto flex w-full max-w-6xl self-end xl:px-0 px-5">
                        <p className=" sm:text-[38px] md:text-[44px] text-[48px] font-medium text-black-900 " data-aos="fade-up" data-aos-duration="1000">Contact Us</p>
                    </div>
                </div>
                <div className="block mx-auto w-full max-w-6xl xl:px-0 px-5">
                    <div className="flex flex-wrap -mx-[15px]">
                        <div className="px-[15px] lg:w-[50%] w-full">
                            <div className="mb-[50px]">
                                <div className="flex flex-wrap -mx-[15px]">
                                <div className="sm:w-[50%] w-full block px-[15px]" data-aos="fade-up" data-aos-duration="1000">
                                        <div className="flex sm:flex-col flex-row items-center gap-[15px] px-[15px] py-[25px] sm:text-center mb-[25px] rounded-[20px] bg-white relative shadow-custom transition-all duration-500 ease-in-out hover:-translate-y-2">
                                            <div className="w-[80px] h-[80px]  rounded-[50px] bg-lime-900 text-white text-[35px] flex items-center justify-center">
                                                <FaMapMarkedAlt />
                                            </div>
                                            <div className=" md:w-full w-[65%]">
                                                <h5 className='text-[18px] mb-[8px] text-lime-500 font-[600]'>Office Address</h5>
                                                <p className='font-[500] text-[16px] text-gray-600'>25/B Milford Elm Drive Road, New York, USA</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="sm:w-[50%] w-full block px-[15px]" data-aos="fade-up" data-aos-duration="1000">
                                        <div className="flex sm:flex-col flex-row items-center gap-[15px] px-[15px] py-[25px] sm:text-center mb-[25px] rounded-[20px] bg-white relative shadow-custom transition-all duration-500 ease-in-out hover:-translate-y-2">
                                            <div className="w-[80px] h-[80px] rounded-[50px] bg-lime-900 text-white text-[35px] flex items-center justify-center">
                                                <FaHeadset />
                                            </div>
                                            <div className=" md:w-full w-[65%]">
                                                <h5 className='text-[18px] mb-[8px] text-lime-500 font-[600]'>Call Us</h5>
                                                <p className='font-[500] text-[16px] text-gray-600'>+2 123 4565 788</p>
                                                <p className='font-[500] text-[16px] text-gray-600'>+2 123 4565 788</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="sm:w-[50%] w-full block px-[15px]" data-aos="fade-up" data-aos-duration="1000">
                                        <div className="flex sm:flex-col flex-row items-center gap-[15px] px-[15px] py-[25px] sm:text-center mb-[25px] rounded-[20px] bg-white relative shadow-custom transition-all duration-500 ease-in-out hover:-translate-y-2">
                                            <div className="w-[80px] h-[80px] rounded-[50px] bg-lime-900 text-white text-[35px] flex items-center justify-center">
                                                <FaEnvelope />
                                            </div>
                                            <div className=" md:w-full w-[65%]">
                                                <h5 className='text-[18px] mb-[8px] text-lime-500 font-[600]'>Email Us</h5>
                                                <p className='font-[500] text-[16px] text-gray-600'>info@example.com</p>
                                                <p className='font-[500] text-[16px] text-gray-600'>support@example.com</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="sm:w-[50%] w-full block px-[15px]" data-aos="fade-up" data-aos-duration="1000">
                                        <div className="flex sm:flex-col flex-row items-center gap-[15px] px-[15px] py-[25px] sm:text-center mb-[25px] rounded-[20px] bg-white relative shadow-custom transition-all duration-500 ease-in-out hover:-translate-y-2">
                                            <div className="w-[80px] h-[80px] rounded-[50px] bg-lime-900 text-white text-[35px] flex items-center justify-center">
                                                <TfiAlarmClock />
                                            </div>
                                            <div className=" md:w-full w-[65%]">
                                                <h5 className='text-[18px] mb-[8px] text-lime-500 font-[600]'>Open Time</h5>
                                                <p className='font-[500] text-[16px] text-gray-600'>Mon - Sat (10AM - 05PM)</p>
                                                <p className='font-[500] text-[16px] text-gray-600'>Sunday - <span className='text-red-800'>Closed</span></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="px-[15px] lg:w-[50%] w-full" data-aos="fade-up" data-aos-duration="1000">
                            <div className="bg-white rounded-[20px] py-[20px] px-[30px] shadow-custom">
                                <div className="mb-[20px]">
                                    <h2 className='text-lime-500 font-[700] text-[25px] mb-[5px]'>Get In Touch</h2>
                                    <p className='text-gray-600 leading-relaxed	font-[400] text-[16px] '>It is a long established fact that a reader will be distracted by the readable
                                        content of a page words which even slightly when looking at its layout. </p>
                                </div>
                                <form >
                                    <div className="flex sm:flex-row flex-col gap-2 -mx-[15px]" data-aos="fade-up" data-aos-duration="1000">
                                        <div className="sm:w-[50%] w-full px-[15px]">
                                            <div className="">
                                                <input type="text" className="border border-lime-900 rounded-[10px] py-[10px] px-[20px] w-full" name="name" autoComplete='on'  placeholder="Your Name" required="" />
                                            </div>
                                        </div>
                                        <div className="sm:w-[50%] w-full px-[15px]">
                                            <div className="mb-[25px]">
                                                <input type="text" className="border border-lime-900 rounded-[10px] py-[10px] px-[20px] w-full" name='email' autoComplete='email'  placeholder="Your Email" required="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full" data-aos="fade-up" data-aos-duration="1000">
                                        <div className="mb-[25px]">
                                            <input type="text" className="border border-lime-900 rounded-[10px] py-[10px] px-[20px] w-full" name='subject' autoComplete='off'  placeholder="Your Subject" required="" />
                                        </div>
                                    </div>
                                    <div className="w-full" data-aos="fade-up" data-aos-duration="1000">
                                        <div className="mb-[25px]">
                                            <textarea className="border border-lime-900 rounded-[10px] py-[10px] px-[20px] w-full h-[90px] resize-none" name='message' autoComplete='off'  placeholder="Write Your Mssage" required="" />
                                        </div>
                                    </div>
                                    <button type='button' data-aos="fade-up" data-aos-duration="1000" className='button border border-lime-900 flex items-center relative text-[16px] bg-lime-900 py-[10px] px-[20px] capitalize font-[500] rounded-[10px] text-white' >Send Message <span className='ml-[5px]'><FaRegPaperPlane />                                        </span></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact