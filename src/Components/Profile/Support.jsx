import React, { useEffect } from 'react'
import ProfileMenu from './ProfileMenu'
import Aos from 'aos';
import { Link } from 'react-router-dom';

const Support = () => {
    useEffect(() => {
        Aos.init({ once: true }); 
    
        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 100);})
    return (
        <>


            <div className="flex flex-col items-center mt-[40px] mb-[96px] gap-10" data-aos="fade-up" data-aos-duration="1000">
                <div className="flex justify-center self-stretch">
                    <div className="mx-auto flex w-full max-w-6xl self-end xl:px-0 px-5">
                        <p className=" sm:text-[38px] md:text-[44px] text-[48px] font-medium text-black-900 ">Settings</p>
                    </div>
                </div>
                <div className="mx-auto w-full max-w-6xl xl:px-0 px-5" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                    <div className="flex items-start gap-6 lg:flex-row flex-col">
                        <ProfileMenu data-aos="zoom-in" data-aos-duration="800" data-aos-delay="300" />
                        <div className="flex flex-1 flex-col gap-6 md:self-stretch">
                            <div className=" lg:mx-auto  p-4">
                                <h1 className="text-3xl font-bold mb-4 text-center">Contact Us</h1>
                                <p className="text-lg mb-8 text-center text-gray-600">Feel free to contact us? submit your queries here and we will listen</p>
                                <div className="flex flex-wrap justify-center">
                                    <div className="flex md:flex-col sm:flex-row flex-col md:w-[33.33%] w-full mb-[15px] gap-3 md:px-4">
                                        <div className="w-full ">
                                            <div className="border border-lime-900 p-4 rounded-lg shadow-md">
                                                <h2 className="text-lg font-[500] mb-2 flex items-center gap-2"> <img src="assets/Images/call-black.svg" alt="" /> <span>Call Us Directly At</span></h2>
                                                <p className="text-lg mb-4 text-gray-500">470 - 601 - 1911</p>
                                                <button className=" bg-withe hover:bg-lime-900 hover:text-white border border-lime-900 text-lime-900 font-bold py-2 px-4 rounded">Contact Us</button>
                                            </div>
                                        </div>
                                        <div className="w-full ">
                                            <div className="border border-lime-900 p-4 rounded-lg shadow-md">
                                                <h2 className="text-lg font-[500] mb-2 flex items-center gap-2"> <img src="assets/Images/email-black.svg" alt="" /> <span>Chat With Our Team </span></h2>
                                                <p className="text-lg mb-4 text-gray-500">email@pagedone.com</p>
                                                <button className=" bg-withe hover:bg-lime-900 hover:text-white border border-lime-900 text-lime-900 font-bold py-2 px-4 rounded">Contact Us</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="border border-lime-900 rounded-lg w-full md:w-[66.66%] px-[20px] py-[50px]">
                                        <form className='gap-4 flex flex-col'>
                                            <div className="flex w-full flex-col items-start gap-1.5">
                                                <p className=" text-[14px] ml-4 font-normal text-gray-600_01 md:ml-0 ">Name*</p>
                                                <label className="rounded-[24px] gap-2 self-stretch flex items-center justify-center cursor-text   bg-gray-200_03 text-gray-500 h-[48px] pl-4 pr-[34px] text-[14px]">
                                                    <input type="text" placeholder='Enter Name' name='name' autoComplete='on'  />
                                                </label>
                                            </div>
                                            <div className="flex md:flex-row flex-col gap-2">
                                                <div className="flex w-full flex-col items-start gap-1.5">
                                                    <p className=" text-[14px] ml-4 font-normal text-gray-600_01 md:ml-0 ">Email*</p>
                                                    <label className="rounded-[24px] gap-2 self-stretch flex items-center justify-center cursor-text   bg-gray-200_03 text-gray-500 h-[48px] pl-4 pr-[34px] text-[14px]">
                                                        <input type="email" placeholder='Enter Email' name='email' autoComplete='email' />
                                                    </label>
                                                </div>
                                                <div className="flex w-full flex-col items-start gap-1.5">
                                                    <p className=" text-[14px] ml-4 font-normal text-gray-600_01 md:ml-0 ">Phone Number*</p>
                                                    <label className="rounded-[24px] gap-2 self-stretch flex items-center justify-center cursor-text   bg-gray-200_03 text-gray-500 h-[48px] pl-4 pr-[34px] text-[14px]">
                                                        <input type="tel" placeholder='Phone Number' name='number' autoComplete='tel' />
                                                    </label>
                                                </div>

                                            </div>
                                            <div className="flex w-full flex-col items-start gap-1.5">
                                                <p className=" text-[14px] ml-4 font-normal text-gray-600_01 md:ml-0 ">Message*</p>
                                                <label className="rounded-[24px] gap-2 self-stretch flex items-center justify-center cursor-text   bg-gray-200_03 text-gray-500 p-4 pr-[34px] text-[14px]">
                                                    <textarea placeholder='Message here...' className='resize-none	h-[70px]' name='message' autoComplete='off'/>
                                                </label>
                                            </div>
                                            <Link className="block text-center mt-[10px]"> <p className='bg-withe hover:bg-lime-900 hover:text-white border border-lime-900 inline-block text-lime-900 font-bold py-2 px-4 rounded'>Send Message</p></Link>
                                        </form>
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

export default Support