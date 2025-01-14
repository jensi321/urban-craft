import Aos from 'aos';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';


const PaymentInfo = () => {
  useEffect(() => {
    Aos.init({ once: true }); 

    setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);})

  return (
    <>
      <div className="flex flex-1 flex-col gap-12 self-stretch">
        <div className="flex flex-col items-start gap-4" data-aos="fade-up" data-aos-duration="500">
          <p className='md:text-[22px] text-[24px] font-medium text-black-900 '>Payment option</p>
          <div className="self-stretch">
            <div className="grid md:grid-cols-2 gap-6 gap-y-4 grid-cols-1">
              <div className="rounded-[16px] flex w-full items-center justify-center gap-2 border border-solid border-blue_gray-100 bg-white-a700 p-4" data-aos="zoom-in" data-aos-duration="500">
                <input type="radio" className='w-[20px] h-[20px]' name='payment' autoComplete='payment' />
                <div className="flex flex-1 items-center justify-center gap-2">
                  <img src="assets/Images/paypel.svg" alt="" />
                  <div className="flex flex-1">
                    <p className='text-[16px] font-medium text-blue_gray-900 '>Paypal</p>
                  </div>
                </div>
              </div>
              <div className="rounded-[16px] flex w-full items-center justify-center gap-2 border border-solid border-blue_gray-100 bg-white-a700 p-4" data-aos="zoom-in" data-aos-duration="500">
                <input type="radio" className='w-[20px] h-[20px]' name='payment' autoComplete='payment' />
                <div className="flex flex-1 items-center justify-center gap-2">
                  <img src="assets/Images/netbanking.svg" alt="" />
                  <div className="flex flex-1">
                    <p className='text-[16px] font-medium text-blue_gray-900 '>Net banking</p>
                  </div>
                </div>
              </div>
              <div className="rounded-[16px] flex w-full items-center justify-center gap-2 border border-solid border-blue_gray-100 bg-white-a700 p-4" data-aos="zoom-in" data-aos-duration="500">
                <input type="radio" className='w-[20px] h-[20px]' name='payment'  autoComplete='payment' />
                <div className="flex flex-1 items-center justify-center gap-2">
                  <img src="assets/Images/credit-card.png" className='w-[48px] h-[48px]' alt="" />
                  <div className="flex flex-1">
                    <p className='text-[16px] font-medium text-blue_gray-900 '>Credit or Debit Card</p>
                  </div>
                </div>
              </div>
              <div className="rounded-[16px] flex w-full items-center justify-center gap-2 border border-solid border-blue_gray-100 bg-white-a700 p-4" data-aos="zoom-in" data-aos-duration="500">
                <input type="radio" className='w-[20px] h-[20px]' name='payment'  autoComplete='payment' />
                <div className="flex flex-1 items-center justify-center gap-2">
                  <img src="assets/Images/cash.svg" alt="" />
                  <div className="flex flex-1">
                    <p className='text-[16px] font-medium text-blue_gray-900 '>Cash on delivery</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-[16 px] py-[22px] gap-[18px] flex flex-col items-start bg-gray-200_03 px-6 sm:p-5" data-aos="fade-up" data-aos-duration="500">
          <p className='md:text-[22px] text-[24px] font-medium text-black-900 '>Add new card</p>
          <div className="flex flex-col gap-4 self-stretch">
            <div className="flex gap-6 lg:flex-row flex-col">
              <div className="flex w-full flex-col items-start gap-1.5">
                <p className='text-[14px] ml-4 font-normal text-gray-600_01 md:ml-0 '>Card Holder Name*</p>
                <div className="rounded-[24px] self-stretch flex items-center justify-center cursor-text   bg-white text-gray-500 h-[48px] pl-4 pr-[34px] text-[14px]" data-aos="zoom-in" data-aos-duration="500">
                  <input type="text" name="Cardholder" placeholder="Ex. John do" autoComplete='cardholder'  />
                </div>
              </div>
              <div className="flex w-full flex-col items-start gap-1.5">
                <p className="text-[14px] ml-4 font-normal text-gray-600_01 md:ml-0 ">Card Number*</p>
                <div className="rounded-[24px] self-stretch flex items-center justify-center cursor-text   bg-white text-gray-500 h-[48px] pl-4 pr-[34px] text-[14px]" data-aos="zoom-in" data-aos-duration="500">
                  <input type="text" name="cardNumber" placeholder="Ex. 1244 8774 3938 3938" autoComplete='cardnumber' />
                </div>
              </div>
            </div>
            <div className="flex gap-6 lg:flex-row flex-col">
              <div className="flex w-full flex-col items-start gap-1.5">
                <p className='text-[14px] ml-4 font-normal text-gray-600_01 md:ml-0 '>Expiry Date*</p>
                <div className="rounded-[24px] self-stretch flex items-center justify-center cursor-text   bg-white text-gray-500 h-[48px] pl-4 pr-[34px] text-[14px]" data-aos="zoom-in" data-aos-duration="500">
                  <input type="text" name="expirydate" placeholder="MM/YYYY" autoComplete='expirydate'/>
                </div>
              </div>
              <div className="flex w-full flex-col items-start gap-1.5">
                <p className="text-[14px] ml-4 font-normal text-gray-600_01 md:ml-0 ">CVV*</p>
                <div className="rounded-[24px] self-stretch flex items-center justify-center cursor-text   bg-white text-gray-500 h-[48px] pl-4 pr-[34px] text-[14px]" data-aos="zoom-in" data-aos-duration="500">
                  <input type="text" name="cvv" placeholder="Ex. 887"  autoComplete='cvv'/>
                  <img src="assets/Images/iIcon.svg" alt="" />
                </div>
              </div>
            </div>
            <div className="flex gap-4 self-stretch">
              <div className="flex p-3.5">
                <Link className="text-[14px] font-semibold text-lime-900  hover:text-lime-900" data-aos="fade-up" data-aos-duration="500">Cancel</Link>
              </div>
              <Link data-aos="fade-up" data-aos-duration="500"><p className='rounded-[24px] min-w-[116px] px-[23px] !border font-semibold sm:px-5 flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap  h-[48px] px-[34px] text-[14px] border-lime-900 border border-solid text-lime-900'>Save Card</p></Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentInfo;