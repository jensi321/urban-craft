import Aos from 'aos';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AddressForm from './AddressForm';


const Addressing = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleEditClick = () => {
    setIsFormOpen(true);
  };

  const handleAddClick = () => {
    setIsFormOpen(true);
  };

  useEffect(() => {
    Aos.init({ once: true }); 

    setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);})
  return (
    <>
      {isFormOpen && (
        <AddressForm setIsFormOpen={setIsFormOpen} data-aos="fade-in" data-aos-duration="500" />
      )}
      
      { !isFormOpen && (
        <div className="gap-[46px]  flex flex-1 flex-col self-stretch" data-aos="fade-up" data-aos-duration="500">
        <div className="flex flex-col items-start gap-5" data-aos="fade-right" data-aos-duration="500">
          <p className=' md:text-[22px] text-[24px] font-medium text-black-900 '>Deliver to</p>
          <div className="flex gap-6 self-stretch md:flex-row flex-col" data-aos="fade-up" data-aos-duration="500">
            <div className="rounded-[16px] p-[18px] gap-[18px] md:w-[48%] flex flex-col items-center border-2 border-solid border-lime-900 w-full" data-aos="zoom-in" data-aos-duration="500">
              <div className="flex justify-between gap-5 self-stretch">
                <div className="flex flex-1 items-center gap-3">
                  <input type="radio" defaultChecked={true} name='address' autoComplete='address'   className='w-[20px] h-[20px]' />
                  <p className=' text-[18px] font-medium text-black-900 '>Jack Jonnas</p>
                </div>
                <div className="gap-[13px] flex items-center">
                  <p className=' text-[12px] flex items-center justify-center rounded bg-gray-200 p-0.5 font-normal text-lime-900 '>Home</p>
                  <Link onClick={handleEditClick}> <img src="assets/Images/edit.svg" alt="" className='w-[24px] h-[24px]' /></Link>
                </div>
              </div>
              <div className="flex flex-col gap-2.5 self-stretch">
                <div className="flex flex-col items-start gap-1">
                  <p className=' text-[14px] font-normal text-gray-600_01 '>Address :</p>
                  <p className=' leading-[22px] text-[14px] w-full font-normal text-black-900 '>8424 James Lane South, San Francisco, CA 94080 </p>
                </div>
                <div className="flex flex-col items-start gap-1">
                  <p className=" text-[14px] font-normal text-gray-600_01 ">Phone :</p>
                  <p className=' text-[14px] font-normal text-black-900 '> + 380 (0564) 53 - 29 - 68</p>
                </div>
              </div>
            </div>
            <div className="rounded-[16px] p-[18px] gap-[18px] md:w-[48%] flex flex-col items-center border-2 border-solid border-lime-900 w-full" data-aos="zoom-in" data-aos-duration="500">
              <div className="flex justify-between gap-5 self-stretch">
                <div className="flex flex-1 items-center gap-3">
                  <input type="radio" name='address'  className='w-[20px] h-[20px]' autoComplete='address'  />
                  <p className=' text-[18px] font-medium text-black-900 '>Jack Ma</p>
                </div>
                <div className="gap-[13px] flex items-center">
                  <p className=' text-[12px] flex items-center justify-center rounded bg-gray-200 p-0.5 font-normal text-lime-900 '>Office</p>
                  <Link onClick={handleEditClick}> <img src="assets/Images/edit.svg" alt="" className='w-[24px] h-[24px]' /></Link>
                </div>
              </div>
              <div className="flex flex-col gap-2.5 self-stretch">
                <div className="flex flex-col items-start gap -1">
                  <p className=' text-[14px] font-normal text-gray-600_01 '>Address :</p>
                  <p className=' leading-[22px] text-[14px] w-full font-normal text-black-900 '>8424 James Lane South, San Francisco, CA 94080 </p>
                </div>
                <div className="flex flex-col items-start gap-1">
                  <p className=" text-[14px] font-normal text-gray-600_01 ">Phone :</p>
                  <p className=' text-[14px] font-normal text-black-900 '> + 380 (0564) 53 - 29 - 68</p>
                </div>
              </div>
            </div>


          </div>

          <div className="flex border-2 border-dashed border-lime-900 w-full p-[35px] rounded-[20px]" data-aos="fade-up" data-aos-duration="500">
            <div className="items-center flex justify-center flex-col w-full">
              <div className="flex items-center justify-center bg-lime-900 w-[100px] h-[100px] mb-[15px] rounded-full mx-auto" data-aos="zoom-in" data-aos-duration="500">
                <img src="assets/Images/house.png" className='w-[60px] h-[60px]' alt="" />
              </div>

              <div className="flex">
                <h4 className="mb-[20px] font-semibold text-[16px] ">Add New Address</h4>
              </div>

              <Link className='button bg-lime-900 px-[40px] py-[10px] rounded-[10px] text-white' onClick={handleAddClick}><p className=' text-[16px] font-medium'>Add</p></Link>
            </div>
          </div>
        </div>

      </div>
      )}
      
    </>
  )
}

export default Addressing