import Aos from 'aos';
import React, { useEffect } from 'react'

const About = () => {
    useEffect(() => {
        Aos.init({ once: true }); 

        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 100);
    })
    return (
        <div className="flex flex-col items-center mt-[40px] mb-[96px] gap-10 ">
            <div className=" flex justify-center self-stretch ">
                <div className="mx-auto flex w-full max-w-6xl self-end xl:px-0 px-5">
                    <p className=" sm:text-[38px] md:text-[44px] text-[48px] font-medium text-black-900 " data-aos="fade-up" data-aos-duration="1000">About Us</p>
                </div>
            </div>
            <div className="flex flex-col w-full">
                <div className="flex justify-center">
                    <div className="mx-auto flex w-full max-w-6xl items-center justify-center gap-6 lg:flex-row flex-col xl:px-0 px-5">
                        <div className="flex flex-col lg:w-[50%] w-full gap-4">
                            <div className="" data-aos="fade-up" data-aos-duration="1000">
                                <img src="assets/Images/about1.jpg" className='w-full' alt="" />
                            </div>
                            <div className="flex flex-row gap-4" >
                                <div className='w-[50%]'>
                                <img src="assets/Images/about2.jpg" className='w-full h-full' alt="" data-aos="fade-up" data-aos-duration="1000"/>

                                </div>
                                <div className='w-[50%]'>
                                <img src="assets/Images/about3.jpg" className='w-full h-full' alt="" data-aos="fade-up" data-aos-duration="1000" />

                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-2 lg:w-[50%] w-full">
                            <h2 className='mb-[15px] font-manrope text-[26px] font-semibold text-lime-500 relative inline p-[0] capitalize leading-[1]' data-aos="fade-up" data-aos-duration="1000">
                                About the <span className='text-lime-900'>
                                    Urban Craft
                                </span>
                            </h2>
                            <p className='text-gray-600 leading-relaxed	font-[400] text-[16px] ' data-aos="fade-up" data-aos-duration="1000">
                                Temporibus autem quibusdam
                            </p>

                            <p class="font-Poppins mb-[16px] text-[14px] text-gray-600 font-light leading-[28px] tracking-[0.03rem]" data-aos="fade-up" data-aos-duration="1000">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit, rem! Et
                                obcaecati rem nulla, aut assumenda unde minima earum distinctio porro excepturi
                                veritatis officiis dolorem quod. sapiente amet rerum beatae dignissimos aperiam
                                id quae quia velit. Ab optio doloribus hic quas sit corporis numquam.</p>

                            <p class="font-Poppins mb-[16px] text-[14px] text-gray-600 font-light leading-[28px] tracking-[0.03rem]" data-aos="fade-up" data-aos-duration="1000">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit, rem! Et
                                obcaecati rem nulla, aut assumenda unde minima earum distinctio porro excepturi
                                veritatis officiis dolorem quod. sapiente amet rerum beatae dignissimos aperiam
                                id quae quia velit. Ab optio doloribus hic quas sit corporis numquam.</p>

                            <div className="flex flex-wrap w-full mb-[-24px]" >
                                <div className="sm:w-[33.33%] w-full px-[12px] mb-[24px] ">
                                    <div className="flex flex-col p-[20px] bg-[#f8f8fb] border-[1px] border-solid border-[#eee] rounded-[20px]" data-aos="fade-up" data-aos-duration="1000">
                                        <h2 className='tracking-[0.03rem] text-[32px] leading-[24px] text-[#3d4750] font-bold max-[1399px]:text-[28px] text-center mb-[12px] max-[1399px]:mb-[8px]'>200 +</h2>
                                        <p className='font-light tracking-[0.03rem] text-[14px] leading-[18px] text-[#686e7d] mb-[0] text-center'>vendors</p>
                                    </div>
                                </div>
                                <div className="sm:w-[33.33%] w-full px-[12px] mb-[24px] ">
                                    <div className="flex flex-col p-[20px] bg-[#f8f8fb] border-[1px] border-solid border-[#eee] rounded-[20px]" data-aos="fade-up" data-aos-duration="1000">                                    
                                        <h2 className='tracking-[0.03rem] text-[32px] leading-[24px] text-[#3d4750] font-bold max-[1399px]:text-[28px] text-center mb-[12px] max-[1399px]:mb-[8px]'>654k +</h2>
                                        <p className='font-light tracking-[0.03rem] text-[14px] leading-[18px] text-[#686e7d] mb-[0] text-center'>Sales</p>
                                    </div>
                                </div>
                                <div className="sm:w-[33.33%] w-full px-[12px] mb-[24px] ">
                                    <div className="flex flex-col p-[20px] bg-[#f8f8fb] border-[1px] border-solid border-[#eee] rounded-[20px]" data-aos="fade-up" data-aos-duration="1000">                                    
                                        <h2 className='tracking-[0.03rem] text-[32px] leading-[24px] text-[#3d4750] font-bold max-[1399px]:text-[28px] text-center mb-[12px] max-[1399px]:mb-[8px]'>587k +</h2>
                                        <p className='font-light tracking-[0.03rem] text-[14px] leading-[18px] text-[#686e7d] mb-[0] text-center'>Customers</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About