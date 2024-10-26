import Aos from 'aos';
import React, { useEffect } from 'react';

const CartRight = ({ handleNext }) => {
    useEffect(() => {
        Aos.init({ once: true }); 
    
        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 100);
    }, []);

    return (
        <>
            <div className="rounded-[16px] py-[18px] gap-[30px] lg:w-[32%] flex flex-col  self-center border border-solid border-gray-200_01 px-4 w-full" data-aos="fade-up" data-aos-duration="1000">
                <div className="flex flex-col items-start gap-3" data-aos="zoom-in" data-aos-duration="1500">
                    <p className="text-[14px] font-normal uppercase text-gray-600_01">Delivery option</p>
                    <div className="flex flex-col gap-3 self-stretch">
                        <div className="rounded-[24px] flex flex-1 items-center justify-center border border-solid border-lime-900 bg-white-a700 p-3">
                            <div className="flex flex-1 items-center gap-3">
                                <label className='flex items-center gap-[5px] cursor-pointer'>
                                    <input className="w-[20px] h-[20px] checked:border-2" defaultChecked type="radio" name="shippingoption" />
                                    <span></span>
                                </label>
                                <p className='text-[16px] font-normal text-lime-900'>Free shipping</p>
                            </div>
                            <p className='text-[16px] font-inter font-medium text-gray-900_02'>$0.00</p>
                        </div>
                        <div className="rounded-[24px] flex flex-1 items-center justify-center border border-solid border-lime-900 bg-white-a700 p-3">
                            <div className="flex flex-1 items-center gap-3">
                                <label className='flex items-center gap-[5px] cursor-pointer'>
                                    <input className="w-[20px] h-[20px] checked:border-2" type="radio" name="shippingoption" />
                                    <span></span>
                                </label>
                                <p className='text-[16px] font-normal text-lime-900'>Express shipping</p>
                            </div>
                            <p className='text-[16px] font-inter font-medium text-gray-900_02'>+$15.00</p>
                        </div>
                        <div className="rounded-[24px] flex flex-1 items-center justify-center border border-solid border-lime-900 bg-white-a700 p-3">
                            <div className="flex flex-1 items-center gap-3">
                                <label className='flex items-center gap-[5px] cursor-pointer'>
                                    <input className="w-[20px] h-[20px] checked:border-2" type="radio" name="shippingoption" />
                                    <span></span>
                                </label>
                                <p className='text-[16px] font-normal text-lime-900'>Pick Up</p>
                            </div>
                            <p className='text-[16px] font-inter font-medium text-gray-900_02'>+$5.00</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-start gap-3" data-aos="zoom-in" data-aos-duration="1500">
                    <p className="text-[14px] font-normal uppercase text-gray-600_01">Coupon code</p>
                    <label className="rounded-[ 24px] gap-1 self-stretch flex items-center justify-center cursor-text bg-gray-200_03 text-gray-500 h-[48px] pl-4 pr-[34px] text-[14px]">
                        <img src="assets/Images/discount.svg" className='w-[24px] h-[24px]' alt="" />
                        <input type="text" name="coupon-code" autoComplete="coupon-code" className='bg-transparent' placeholder="Apply coupon code" />
                        <button className=''>
                            <p className="text-[14px] w-[38px] mb-0.5 mt-1 font-medium text-colors">Apply</p>
                        </button>
                    </label>
                </div>
                <div className="flex flex-col items-start gap-3" data-aos="zoom-in" data-aos-duration="1500">
                    <p className="text-[14px] font-normal uppercase text-gray-600_01">Cart value</p>
                    <div className="gap-[18px] flex flex-col self-stretch">
                        <div className="h-px bg-gray-200_01"></div>
                        <div className="flex flex-wrap items-center justify-between gap-5">
                            <p className="text-[16px] font-normal text-gray-600_01">Sub total</p>
                            <p className="text-[16px] font-inter font-medium text-gray-900_02">+$5.00</p>
                        </div>
                        <div className="flex flex-wrap items-center justify-between gap-5">
                            <p className="text-[16px] font-normal text-gray-600_01">Discount</p>
                            <p className="text-[16px] font-inter font-medium text-gray-900_02">+$5.00</p>
                        </div>
                        <div className="flex flex-wrap items-center justify-between gap-5">
                            <p className="text-[16px] font-normal text-gray-600_01">Shipping</p>
                            <p className="text-[16px] font-inter font-medium text-gray-900_02">+$5.00</p>
                        </div>
                        <div className="h-px bg-gray-200_01"></div>
                        <div className="flex flex-wrap items-center justify-between gap-5">
                            <p className="text-[16px] self-start font-normal text-gray-900">Total</p>
                            <p className="text-[20px] font-semibold text-gray-900">+$5.00</p>
                        </div>
                    </div>
                </div>
                <button className='button rounded-[24px] px-[34px] mx-auto w-[260px] self-stretch font-semibold sm:px-5 flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap h-[48px] px-[34px] text-[14px] bg-lime-900 text-orange-50' onClick={handleNext} data-aos="zoom-in">Next</button>
            </div>
        </>
    );
};

export default CartRight;