import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { DataContext } from '../Context/Dataprovider';

const RegisterForm = () => {
    const { activeTab } = useContext(DataContext);

    return (
        <>
            <div className=" w-full gap-[20px]">
                <form className='gap-8 flex flex-col'>
                    {/* Input Filed */}
                    <div className="w-full flex flex-col gap-3.5">
                        {
                            activeTab === '1' &&  <div className="inputgroup flex flex-col gap-1.5 email">
                            <label htmlFor="" className='text-[14px] font-normal text-gray-600_01 px-4'>
                                Email*
                            </label>
                            <div className="input-box w-full rounded-[24px] gap-2 flex items-center justify-center cursor-text bg-gray-200_03 text-gray-500 h-[48px] pl-4 pr-[34px] text-[14px]">
                                <img src="assets/Images/email.svg" alt="" className='h-[24px] w-[24px]' />
                                <input type="email" name="" placeholder="Enter email" className='w-full bg-transparent focus:outline-none' />
                            </div>
                        </div>
                        }

                        {
                            activeTab === '2' && <div className="inputgroup flex flex-col gap-1.5 phone">
                            <label htmlFor="" className='text-[14px] font-normal text-gray-600_01 px-4'>
                                Phone Number*
                            </label>
                            <div className="input-box w-full rounded-[24px] gap-2 flex items-center justify-center cursor-text bg-gray-200_03 text-gray-500 h-[48px] pl-4 pr-[34px] text-[14px]">
                                <img src="assets/Images/call.svg" alt="" className='h-[24px] w-[24px]' />
                                <input type="tel" name="" placeholder="Enter phone number" className='w-full bg-transparent focus:outline-none' />
                            </div>
                        </div>
                        }
                       
                        
                        <div className="inputgroup flex flex-col gap-1.5">
                            <label htmlFor="" className='text-[14px] font-normal text-gray-600_01 px-4'>
                                Password*
                            </label>
                            <div className="input-box w-full rounded-[24px] gap-2 flex items-center justify-center cursor-text bg-gray-200_03 text-gray-500 h-[48px] pl-4 pr-[34px] text-[14px]">
                                <img src="assets/Images/password.svg" alt="" className='h-[24px] w-[24px]' />
                                <input type="password" name="" placeholder="Enter password" className='w-full bg-transparent focus:outline-none' />
                                <img src="assets/Images/eye.svg" alt="" className='h-[24px] w-[24px]' />
                            </div>
                        </div>
                        <div className="inputgroup flex flex-col gap-1.5">
                            <label htmlFor="" className='text-[14px] font-normal text-gray-600_01 px-4'>
                            Confirm password*
                            </label>
                            <div className="input-box w-full rounded-[24px] gap-2 flex items-center justify-center cursor-text bg-gray-200_03 text-gray-500 h-[48px] pl-4 pr-[34px] text-[14px]">
                                <img src="assets/Images/password.svg" alt="" className='h-[24px] w-[24px]' />
                                <input type="password" name="" placeholder="Enter password" className='w-full bg-transparent focus:outline-none' />
                                <img src="assets/Images/eye.svg" alt="" className='h-[24px] w-[24px]' />
                            </div>
                        </div>
                    </div>

                    {/* Signup Button */}
                    <div className="flex flex-col items-center gap-3">
                        <Link to={'/'} className='rounded-[24px] px-[34px] w-full self-stretch font-semibold sm:px-5 flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap h-[48px] px-[34px] text-[14px] bg-lime-900 '><p className='text-orange-50'>Register</p></Link>
                        <p className=' text-[14px] font-normal text-gray-600_01'>
                            <span className="text-gray-600_01">By clicking Register you agree to our </span>
                            <span className="font-medium text-lime-900">Terms of use</span>
                            <span className='text-gray-600_01'>&nbsp;and&nbsp;</span>
                            <span className='font-medium text-lime-900'>privacy policy</span>
                        </p>
                    </div>
                    {/* Or */}
                    <div className='flex items-center justify-center gap-8 '>
                        <div className="sm:h-px h-0 flex-1 bg-gray-200_01"></div>
                        <p className=' text-[16px] font-normal text-gray-600_01'>Or</p>
                        <div className="sm:h-px h-0 flex-1 bg-gray-200_01"></div>
                    </div>


                    {/* Soical Media */}
                    <div className="flex justify-center gap-4 flex-row">
                        <Link className='rounded-[16px] w-[140px] border border-solid border-gray-200_01 px-3 flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap  h-[56px] px-3 bg-white-a700'>
                            <img src="assets/Images/apple.svg" alt="" />
                        </Link>
                        <Link className='rounded-[16px] w-[140px] border border-solid border-gray-200_01 px-3 flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap  h-[56px] px-3 bg-white-a700'>
                            <img src="assets/Images/google.svg" alt="" />
                        </Link>
                        <Link className='rounded-[16px] w-[140px] border border-solid border-gray-200_01 px-3 flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap  h-[56px] px-3 bg-white-a700'>
                            <img src="assets/Images/facebook.svg" alt="" />
                        </Link>
                    </div>

                    {/* Register Link */}
                    <div className="flex flex-wrap">
                        <p className=' text-[14px] font-normal text-gray-600_01 '>Existing user?</p>
                        <Link to={'/'}><p className=' text-[14px] font-medium text-lime-900 underline'>Login</p></Link>
                    </div>
                </form>


            </div>


        </>
    )
}

export default RegisterForm
