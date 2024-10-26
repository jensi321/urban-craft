import Aos from 'aos';
import React, { useEffect } from 'react'

const Privacy = () => {
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
                    <div className="mx-auto items-center flex flex-col w-full max-w-6xl self-end xl:px-0 px-5">
                        <h2 className='mb-[15px] font-manrope text-[26px] font-semibold text-lime-500 relative inline p-[0] capitalize leading-[1]' data-aos="fade-up" data-aos-duration="1000">
                            Terms <span className='text-lime-900'>
                                & Condition
                            </span>
                        </h2>
                        <p className='text-gray-600 leading-relaxed	font-[400] text-[16px] ' data-aos="fade-up" data-aos-duration="1000">
                            Browse The Collection of Top Products
                        </p>
                    </div>
                </div>
                <div className="block mx-auto w-full max-w-6xl xl:px-0 px-5">
                    <div className="flex flex-wrap -mx-[15px]">
                        <div className="lg:w-[50%] w-full px-[12px] mb-[20px]">
                            <div className=" p-[30px] border-[1px] border-solid border-[#eee]  my-[0] mx-auto bg-[#fff] rounded-[5px]">
                                <div className="w-full" data-aos="fade-up" data-aos-duration="1000">
                                    <div className="">
                                        <h5 className='mb-[10px] text-[18px] font-semibold text-[#4b5966] tracking-[0.01rem] leading-[1.2]'>Welcome to Grabit Store.</h5>
                                        <p class="mb-[30px] text-[#777] text-[14px] text-justify font-normal leading-[28px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            <b class="font-medium text-[#4b5966]">Lorem Ipsum is simply dutmmy text</b> ever since the 1500s, when an unknown printer
                                            took a galley of type and scrambled it to make a type specimen book. It has survived
                                            not only five centuries, but also the leap into electronic typesetting, remaining
                                            essentially unchanged. <b class="font-medium text-[#4b5966]">Lorem Ipsum is simply dutmmy text.</b></p>
                                    </div>
                                </div>
                                <div className="w-full" data-aos="fade-up" data-aos-duration="1000">
                                    <div className="">
                                        <h5 className='mb-[10px] text-[18px] font-semibold text-[#4b5966] tracking-[0.01rem] leading-[1.2]'>Grabit Websites</h5>
                                        <p class="mb-[30px] text-[#777] text-[14px] text-justify font-normal leading-[28px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            <b class="font-medium text-[#4b5966]">Lorem Ipsum is simply dutmmy text</b> ever since the 1500s, when an unknown printer
                                            took a galley of type and scrambled it to make a type specimen book. It has survived
                                            not only five centuries, but also the leap into electronic typesetting, remaining
                                            essentially unchanged. <b class="font-medium text-[#4b5966]">Lorem Ipsum is simply dutmmy text.</b></p>
                                    </div>
                                </div>
                                <div className="w-full" data-aos="fade-up" data-aos-duration="1000">
                                    <div className="">
                                        <h5 className='mb-[10px] text-[18px] font-semibold text-[#4b5966] tracking-[0.01rem] leading-[1.2]'>How browsing and vendor works?
                                        </h5>
                                        <p class="mb-[30px] text-[#777] text-[14px] text-justify font-normal leading-[28px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            <b class="font-medium text-[#4b5966]">Lorem Ipsum is simply dutmmy text</b> ever since the 1500s, when an unknown printer
                                            took a galley of type and scrambled it to make a type specimen book. It has survived
                                            not only five centuries, but also the leap into electronic typesetting, remaining
                                            essentially unchanged. <b class="font-medium text-[#4b5966]">Lorem Ipsum is simply dutmmy text.</b></p>
                                    </div>
                                </div>
                                <div className="w-full" data-aos="fade-up" data-aos-duration="1000">
                                    <div className="">
                                        <h5 className='mb-[10px] text-[18px] font-semibold text-[#4b5966] tracking-[0.01rem] leading-[1.2]'>Becoming an vendor

                                        </h5>
                                        <p class="mb-[30px] text-[#777] text-[14px] text-justify font-normal leading-[28px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            <b class="font-medium text-[#4b5966]">Lorem Ipsum is simply dutmmy text</b> ever since the 1500s, when an unknown printer
                                            took a galley of type and scrambled it to make a type specimen book. It has survived
                                            not only five centuries, but also the leap into electronic typesetting, remaining
                                            essentially unchanged. <b class="font-medium text-[#4b5966]">Lorem Ipsum is simply dutmmy text.</b></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-[50%] w-full px-[12px] mb-[20px]">
                            <div className=" p-[30px] border-[1px] border-solid border-[#eee]  my-[0] mx-auto bg-[#fff] rounded-[5px]">
                                <div className="w-full" data-aos="fade-up" data-aos-duration="1000">
                                    <div className="">
                                        <h5 className='mb-[10px] text-[18px] font-semibold text-[#4b5966] tracking-[0.01rem] leading-[1.2]'>Welcome to Grabit Store.</h5>
                                        <p class="mb-[30px] text-[#777] text-[14px] text-justify font-normal leading-[28px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            <b class="font-medium text-[#4b5966]">Lorem Ipsum is simply dutmmy text</b> ever since the 1500s, when an unknown printer
                                            took a galley of type and scrambled it to make a type specimen book. It has survived
                                            not only five centuries, but also the leap into electronic typesetting, remaining
                                            essentially unchanged. <b class="font-medium text-[#4b5966]">Lorem Ipsum is simply dutmmy text.</b></p>
                                    </div>
                                </div>
                                <div className="w-full" data-aos="fade-up" data-aos-duration="1000">
                                    <div className="">
                                        <h5 className='mb-[10px] text-[18px] font-semibold text-[#4b5966] tracking-[0.01rem] leading-[1.2]'>Grabit Websites</h5>
                                        <p class="mb-[30px] text-[#777] text-[14px] text-justify font-normal leading-[28px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            <b class="font-medium text-[#4b5966]">Lorem Ipsum is simply dutmmy text</b> ever since the 1500s, when an unknown printer
                                            took a galley of type and scrambled it to make a type specimen book. It has survived
                                            not only five centuries, but also the leap into electronic typesetting, remaining
                                            essentially unchanged. <b class="font-medium text-[#4b5966]">Lorem Ipsum is simply dutmmy text.</b></p>
                                    </div>
                                </div>
                                <div className="w-full" data-aos="fade-up" data-aos-duration="1000">
                                    <div className="">
                                        <h5 className='mb-[10px] text-[18px] font-semibold text-[#4b5966] tracking-[0.01rem] leading-[1.2]'>How browsing and vendor works?
                                        </h5>
                                        <p class="mb-[30px] text-[#777] text-[14px] text-justify font-normal leading-[28px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            <b class="font-medium text-[#4b5966]">Lorem Ipsum is simply dutmmy text</b> ever since the 1500s, when an unknown printer
                                            took a galley of type and scrambled it to make a type specimen book. It has survived
                                            not only five centuries, but also the leap into electronic typesetting, remaining
                                            essentially unchanged. <b class="font-medium text-[#4b5966]">Lorem Ipsum is simply dutmmy text.</b></p>
                                    </div>
                                </div>
                                <div className="w-full" data-aos="fade-up" data-aos-duration="1000">
                                    <div className="">
                                        <h5 className='mb-[10px] text-[18px] font-semibold text-[#4b5966] tracking-[0.01rem] leading-[1.2]'>Becoming an vendor

                                        </h5>
                                        <p class="mb-[30px] text-[#777] text-[14px] text-justify font-normal leading-[28px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            <b class="font-medium text-[#4b5966]">Lorem Ipsum is simply dutmmy text</b> ever since the 1500s, when an unknown printer
                                            took a galley of type and scrambled it to make a type specimen book. It has survived
                                            not only five centuries, but also the leap into electronic typesetting, remaining
                                            essentially unchanged. <b class="font-medium text-[#4b5966]">Lorem Ipsum is simply dutmmy text.</b></p>
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

export default Privacy