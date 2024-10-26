import Aos from 'aos'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const EditProfile = () => {
    useEffect(() => {
        Aos.init({ once: true }); 
    
        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 100);})
    return (
        <>
            <div className="flex flex-col items-start" data-aos="fade-up" >
                <div className="md:w-[16%] flex flex-col items-end  w-full">
                    <img src="assets/Images/user.png" alt="" className='rounded-[68px] md:h-[136px] w-full object-cover h-auto' />
                    <Link className='rounded-[20px] border-[3px] mt-[-40px] w-[40px] relative border-solid border-white px-2.5 flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap rounded-[50%] h-[40px] px-2.5 bg-black-900_01'>
                        <img src="assets/Images/edit-2.svg" alt="" />
                    </Link>
                </div>
            </div>
            <div className="flex gap-6 md:flex-row flex-col">
                <div className="rounded-[16px] p-[18px] gap-[18px] flex w-full flex-col border border-solid border-gray-200_01" data-aos="zoom-in" data-aos-duration="800" data-aos-delay="200">
                    <div className="flex items-center justify-between gap-5">
                        <p className='  text-[20px] font-medium text-black-900 '>Personal information</p>
                        <img src="assets/Images/edit.svg" className='w-[20px] h-[20px]' alt="" />
                    </div>

                    <div className="flex flex-col items-start gap-3.5">
                        <div className="flex justify-center gap-6">
                            <p className=" text-[14px] font-normal text-gray-600_01 ">First Name:</p>
                            <p className=" text-[14px] font-normal text-black-900 ">John</p>
                        </div>
                        <div className="flex justify-center gap-6">
                            <p className=" text-[14px] font-normal text-gray-600_01 ">Last Name:</p>

                            <p className=" text-[14px] font-normal text-black-900 ">--</p>
                        </div>
                        <div className="flex justify-center gap-6">
                            <p className=" text-[14px] font-normal text-gray-600_01 ">Birthday:</p>

                            <p className=" text-[14px] font-normal text-black-900 ">12/09/2000</p>
                        </div>
                        <div className="flex justify-center gap-6">
                            <p className=" text-[14px] font-normal text-gray-600_01 ">Gender:</p>

                            <p className=" text-[14px] font-normal text-black-900 ">Male</p>
                        </div>
                    </div>
                </div>
                <div className="rounded-[16px] p-[18px] gap-[18px] flex w-full flex-col border border-solid border-gray-200_01" data-aos="zoom-in" data-aos-duration="800" data-aos-delay="200">
                    <p className=" text-[20px] font-medium text-black-900 ">Contact & password</p>
                    <div className="mb-7 flex items-center justify-between gap-5 self-stretch flex-row">
                        <div className="flex flex-col items-start gap-3.5">
                            <p className=" text-[14px] font-normal text-gray-600_01 ">Email:</p>
                            <p className=" text-[14px] font-normal text-gray-600_01 ">Mobile:</p>
                            <p className=" text-[14px] font-normal text-gray-600_01 ">Password:</p>
                        </div>
                        <div className="flex flex-1 flex-col gap-3 sm:self-stretch">
                            <div className="flex items-center justify-between gap-5">
                                <div className="flex flex-wrap gap-2">
                                    <p className=" text-[14px] font-normal text-black-900 ">Johndo23@gmail.com</p>
                                    <p className=' text-[12px] font-normal text-green-800 '>Verified</p>
                                </div>
                                <Link><p className=" text-[14px] font-normal text-lime-900 underline ">Change</p></Link>
                            </div>
                            <div className="flex flex-wrap justify-between gap-5">
                                <p className=''>--</p>
                                <Link><p className=" text-[14px] font-normal text-lime-900 underline ">Add</p></Link>
                            </div>
                            <div className="flex flex-wrap justify-between gap-5">
                                <p className=''>*********</p>
                                <Link><p className=" text-[14px] font-normal text-lime-900 underline ">Change</p></Link>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default EditProfile
