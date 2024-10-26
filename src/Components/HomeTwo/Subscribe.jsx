import Aos from 'aos';
import React, { useEffect } from 'react'
import { FaArrowRightLong } from 'react-icons/fa6';

const Subscribe = () => {
    useEffect(() => {
        Aos.init({ once: true });

        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 100);
    })

    return (
        <>
            <div className="">
                <div className="mx-auto bg-yellow-50 w-full">
                    <div className="">
                        <div className="px-[5.5%] pt-[33px] pb-[41px]">
                            <div className="flex">
                                <div className="item lg:w-[30%] lg:m-0 mb-[25px] md:w-[50%] flex items-center gap-3 w-full" data-aos="zoom-in" data-aos-duration="1000">
                                    <img src='assets/Images/Shipping.svg' className='w-[50px]' alt="" />
                                    <div className="flex flex-1 flex-col items-start justify-center gap-1.5">
                                        <p className=' text-[18px] font-inter font-medium text-black-900 '>Free Shipping</p>
                                        <p className=' text-[16px] font-inter font-normal text-gray-600_01'>Vel risus commodo viverra maecenas accumsan.</p>
                                    </div>
                                </div>
                                <div className="item lg:w-[30%] lg:m-0 mb-[25px] md:w-[50%] flex items-center gap-3 w-full" data-aos="zoom-in" data-aos-duration="1000">
                                    <img src='assets/Images/Support.svg' className='w-[50px]' alt="" />
                                    <div className="flex flex-1 flex-col items-start justify-center gap-1.5">
                                        <p className=' text-[18px] font-inter font-medium text-black-900 '>24 / 7 Support</p>
                                        <p className=' text-[16px] font-inter font-normal text-gray-600_01'>Vel risus commodo viverra maecenas accumsan.</p>
                                    </div>
                                </div>
                                <div className="item lg:w-[30%] lg:m-0 mb-[25px] md:w-[50%] flex items-center gap-3 w-full" data-aos="zoom-in" data-aos-duration="1000">
                                    <div className="flex flex-1 flex-col items-start justify-center gap-1.5">
                                        <p className=' text-[24px] font-inter font-medium text-black-900 '>Sign up for our newsletter</p>
                                        <label className='flex items-center w-full pb-[10px] border-b'>
                                            <input type="email" placeholder='Your Email' name='email' autoComplete="email"/>
                                            <button><span><FaArrowRightLong/> </span></button>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Subscribe