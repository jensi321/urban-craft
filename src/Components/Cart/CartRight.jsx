import React from 'react'

const CartRight = ({handleNext}) => {    
  return (
    <>
       <div className=" rounded-[16px] py-[18px] gap-[30px] lg:w-[32%] flex flex-col self-center border border-solid border-gray-200_01 px-4 w-full">
                    <div className="flex flex-col items-start gap-3">
                        <p className=" text-[14px] font-normal uppercase text-gray-600_01 undefined">Delivery option</p>
                        <div className="flex flex-col gap-3 self-stretch">
                            <div className="rounded-[24px] flex flex-1 items-center justify-center border border-solid border-lime-900 bg-white-a700 p-3">
                                <div className="flex flex-1 items-center gap-3">
                                    <label className=' flex items-center gap-[5px] cursor-pointer'>
                                        <input className="w-[20px] h-[20px] checked:border-2 " type="radio" name="shippingoption" id="radio_id" />
                                        <span></span>
                                    </label>
                                    <p className=' text-[16px] font-normal text-lime-900 undefined'>Free shipping</p>
                                </div>
                                <p className=' text-[16px] font-inter font-medium text-gray-900_02 undefined'>$0.00</p>
                            </div>
                            <div className="rounded-[24px] flex flex-1 items-center justify-center border border-solid border-lime-900 bg-white-a700 p-3">
                                <div className="flex flex-1 items-center gap-3">
                                    <label className=' flex items-center gap-[5px] cursor-pointer'>
                                        <input className="w-[20px] h-[20px] checked:border-2 " type="radio" name="shippingoption" id="radio_id" />
                                        <span></span>
                                    </label>
                                    <p className=' text-[16px] font-normal text-lime-900 undefined'>
Express shipping</p>
                                </div>
                                <p className=' text-[16px] font-inter font-medium text-gray-900_02 undefined'>
+$15.000</p>
                            </div>
                            <div className="rounded-[24px] flex flex-1 items-center justify-center border border-solid border-lime-900 bg-white-a700 p-3">
                                <div className="flex flex-1 items-center gap-3">
                                    <label className=' flex items-center gap-[5px] cursor-pointer'>
                                        <input className="w-[20px] h-[20px] checked:border-2 " type="radio" name="shippingoption" id="radio_id" />
                                        <span></span>
                                    </label>
                                    <p className=' text-[16px] font-normal text-lime-900 undefined'>Pick Up</p>
                                </div>
                                <p className=' text-[16px] font-inter font-medium text-gray-900_02 undefined'>

+$5.00</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-start gap-3">
                        <p className=" text-[14px] font-normal uppercase text-gray-600_01 undefined">Coupon code</p>
                        <label htmlFor="" className="rounded-[24px] gap-1 self-stretch flex items-center justify-center cursor-text  undefined bg-gray-200_03 text-gray-500 h-[48px] pl-4 pr-[34px] text-[14px]">
                            <img src="assets/Images/discount.svg" className='w-[24px] h-[24px]' alt="" />
                            <input type="text" name="Coupon Input" className='bg-transparent' placeholder="Apply coupon code"/>
                            <p className=" text-[14px] w-[38px] mb-0.5 mt-1 font-medium text-colors undefined">Apply</p>
                        </label>
                    </div>
                    <div className="flex flex-col items-start gap-3">
                        <p className=" text-[14px] font-normal uppercase text-gray-600_01 undefined">Cart value</p>
                        <div className="gap-[18px] flex flex-col self-stretch">
                            <div className="h-px bg-gray-200_01"></div>
                            <div className="flex flex-wrap items-center justify-between gap-5">
                                <p className=" text-[16px] font-normal text-gray-600_01 undefined">Sub total</p>
                                <p className=" text-[16px] font-inter font-medium text-gray-900_02 undefined">+$5.00</p>
                            </div>
                            <div className="flex flex-wrap items-center justify-between gap-5">
                                <p className=" text-[16px] font-normal text-gray-600_01 undefined">Discount</p>
                                <p className=" text-[16px] font-inter font-medium text-gray-900_02 undefined">+$5.00</p>
                            </div>
                            <div className="flex flex-wrap items-center justify-between gap-5">
                                <p className=" text-[16px] font-normal text-gray-600_01 undefined">Shipping</p>
                                <p className=" text-[16px] font-inter font-medium text-gray-900_02 undefined">+$5.00</p>
                            </div>
                            <div className="h-px bg-gray-200_01"></div>
                            <div className="flex flex-wrap items-center justify-between gap-5">
                                <p className=" text-[16px] self-start font-normal text-gray-900 undefined">Total</p>
                                <p className=" text-[20px] font-semibold text-gray-900 undefined">+$5.00</p>
                            </div>
                        </div>
                    </div>
                    <button className='rounded-[24px] px-[34px] self-stretch font-semibold sm:px-5 flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap undefined h-[48px] px-[34px] text-[14px] bg-lime-900 text-orange-50' onClick={handleNext}>Next</button>
                </div>
    </>
  )
}

export default CartRight
