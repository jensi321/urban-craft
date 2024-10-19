import React, { useState } from 'react'
import ReletedProduct from '../ProductDetails/ReletedProduct'
import Addressing from './Addressing'
import CartRight from './CartRight'
import PaymentInfo from './PaymentInfo'
import ShopingCart from './ShopingCart'

const Cart = () => {

    const [currentStep, setCurrentStep] = useState(1);
    const handleNextClick = () => {
        if(currentStep === 3){
            alert ("Payment Successfully")
        }
        else{
            setCurrentStep(currentStep + 1);
        }
        
    };
    return (
        <>
            <div className="flex flex-col items-center mt-[32px]">
                <div className="gap-[38px] mx-auto flex w-full max-w-6xl flex-col xl:px-0 px-5">
                    <div className="rounded-[16px] lg:mx-[218px] flex items-center border border-solid border-gray-200_01 mx-0 md:flex-row flex-col">
                        <div className="flex w-full flex-wrap items-center gap-4 sm:border-r border-solid border-gray-200_01 p-4">
                            {
                                currentStep === 1 ? <p className=' rounded-[20px] text-[16px] h-[40px] w-[40px] flex items-center justify-center border-2 border-solid border-black-900 text-center font-medium text-black-900 '>
                                    01
                                </p> : <div className="rounded-[20px] flex flex-col items-center justify-center bg-green-900 px-2.5 py-3">
                                    <img src='assets/Images/right.svg' alt='' /></div>
                            }

                            <p className=' text-[14px] mb-2.5 self-end font-medium text-black-900'>Shopping cart</p>
                        </div>
                        <div className="flex w-full flex-wrap items-center gap-4 sm:border-r border-solid border-gray-200_01 p-4">
                            {
                                currentStep === 3 ? <div className="rounded-[20px] flex flex-col items-center justify-center bg-green-900 px-2.5 py-3">
                                    <img src='assets/Images/right.svg' alt='' /></div>
                                    : <p className={` rounded-[20px] text-[16px] h-[40px] w-[40px] flex items-center justify-center border-2 border-solid  text-center font-medium ${currentStep === 1 ? 'text-gray-600_01 border-gray-200_01' : 'text-black-900 border-black-900'} `}>
                                        02 </p>
                            }
                            <p className={` text-[14px] mb-2.5 self-end font-medium ${currentStep === 1 ? 'text-gray-600_01' : 'text-black-900'} `}>Shipping address</p>
                        </div>
                        <div className="flex w-full flex-wrap items-center gap-4 p-4">
                            <p className={` rounded-[20px] text-[16px] h-[40px] w-[40px] flex items-center justify-center border-2 border-solid text-center font-medium ${currentStep === 1 || currentStep===2 ? 'text-gray-600_01 border-gray-200_01' : 'text-black-900 border-black-900'} `}>03</p>
                            <p className={` text-[14px] mb-2.5 self-end font-medium ${currentStep === 1 || currentStep===2 ? 'text-gray-600_01 border-gray-200_01' : 'text-black-900 border-black-900'} `}>Payment info</p>
                        </div>

                    </div>
                    <div className={`flex gap-6 ${currentStep !== 1 && "mb-[96px]"} lg:flex-row flex-col overflow-hidden`}>
                        {
                            currentStep === 1 &&
                            <ShopingCart />
                        }

                        {
                            currentStep === 2 &&
                            <Addressing />
                        }
                        {
                            currentStep === 3 && 
                            <PaymentInfo/>
                        }
                        <CartRight handleNext={handleNextClick}  currentStep={currentStep}/>
                    </div>

                    {
                        currentStep === 1 && 
                        <ReletedProduct />

                    }
                </div>
            </div>
        </>
    )
}

export default Cart
