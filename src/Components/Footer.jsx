import Aos from 'aos'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  useEffect(() => {
    Aos.init({ once: true }); 

    setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);})
  return (
    <>
      <footer className='flex items-end justify-center border-t border-solid border-gray-200_01 py-5'>
        <div className="mx-auto mt-5 flex w-full max-w-6xl justify-center xl:px-0 px-5">
          <div className="flex w-full flex-col items-center gap-5">
            <div className="flex justify-between gap-5 self-stretch lg:flex-row flex-col">
              <div className="lg:w-[22%] flex flex-col gap-4 w-full" data-aos="fade-up" data-aos-duration="1000">
                <img src="assets/Images/logo.png" className='lg:w-[52%] w-[15%]  lg:h-[18px] object-contain' alt="" />
                <div className="flex flex-col gap-4 pl-[5px]">
                  <p className=" text-[16px] font-normal leading-6 text-gray-600_01">
                    Worldwide furniture store since 2020. We sell over 1000+ branded products on our website
                  </p>
                  <div className="gap-[18px] mr-1.5 flex flex-col items-start md:mr-0">
                    <div className="flex gap-2 items-center self-stretch">
                      <img src="assets/Images/location.svg" alt="" className='w-[20px] h-[20px]' />
                      <p className=' text-[16px] self-end font-inter font-normal text-gray-600_01'>Sawojajar Malang, Indonesia</p>
                    </div>
                    <div className="flex gap-2 items-center self-stretch">
                      <img src="assets/Images/call.svg" alt="" className='w-[20px] h-[20px]' />
                      <p className=' text-[16px] self-end font-inter font-normal text-gray-600_01'>+6289 456 3455</p>
                    </div>
                    <p className=' text-[16px] font-normal text-gray-600_01'>www.urbancraft.com</p>
                  </div>
                </div>
              </div>
              <div className="lg:w-[50%] flex items-start justify-between gap-5 w-full sm:flex-row flex-col">
                <div className="gap-[18px] sm:w-[36%] flex flex-col items-start w-full" data-aos="fade-up" data-aos-duration="1000">
                  <h6 className=' text-[18px] font-semibold text-black-900_01'>
                    Sitemap
                  </h6>
                  <ul className='flex flex-col items-start gap-5'>
                    <li><Link to={'/productlist'}> <p  className=' text-[16px] font-normal text-gray-600_01'>Product </p></Link></li>
                    <li><Link> <p  className=' text-[16px] font-normal text-gray-600_01'>Services </p></Link></li>
                    <li><Link to={'/blog'}> <p  className=' text-[16px] font-normal text-gray-600_01'>Blog </p></Link></li>
                  </ul>
                </div>
                <div className="gap-[18px] sm:w-[40%] flex flex-col items-start w-full" data-aos="fade-up" data-aos-duration="1000">
                  <h6 className=' text-[18px] font-semibold text-black-900_01'>
                    Category
                  </h6>
                  <ul className='flex flex-col items-start gap-5'>
                    <li><Link> <p className=' text-[16px] font-normal text-gray-600_01'>Living Room </p></Link></li>
                    <li><Link><p className=' text-[16px] font-normal text-gray-600_01'>Bed Room </p> </Link></li>
                    <li><Link><p className=' text-[16px] font-normal text-gray-600_01'>Kitchen </p></Link></li>
                    <li><Link><p className=' text-[16px] font-normal text-gray-600_01'>Bath Room </p></Link></li>
                  </ul>
                </div>
                <div className="gap-[18px] sm:w-[36%] w-full flex flex-col items-start" data-aos="fade-up" data-aos-duration="1000">
                  <h6 className=" text-[18px] font-semibold text-black-900_01">
                  Our company
                  </h6>
                  <ul className="flex flex-col items-start gap-5">
                    <li><Link to={'/about'}> <p className=' text-[16px] font-normal text-gray-600_01'>About us</p></Link></li>
                    <li><Link> <p className=' text-[16px] font-normal text-gray-600_01'>Vacancies</p></Link></li>
                    <li><Link to={'/contact'} > <p className=' text-[16px] font-normal text-gray-600_01'>Contact us</p></Link></li>
                    <li><Link to='/privacy'> <p className=' text-[16px] font-normal text-gray-600_01'>Terms & Condition</p></Link></li>
                    <li><Link to='/faq'> <p className=' text-[16px] font-normal text-gray-600_01'>FAQ</p></Link></li>
                  </ul>
                </div>
              </div>
              <div className="lg:w-[20%] flex flex-col items-start justify-center gap-4 md:self-start w-full self-auto" data-aos="fade-up" data-aos-duration="1000">
                <h6 className=" text-[18px] font-semibold text-black-900_01">Stay Updated</h6>
                <div className="flex flex-col items-start gap-4 self-stretch">
                  <label className='rounded-[18px] sm:pr-[34px] gap-1 self-stretch pl-3 pr-5 flex items-center justify-center cursor-text  rounded-[18px] bg-gray-200_03 text-gray-500 h-[36px] px-2.5 text-[12px]'>
                    <img src="assets/Images/email.svg" alt="" />
                  <input type="email" name="email" placeholder="Enter your mail" autoComplete="email" className='bg-transparent focus:outline-none'/>
                  </label>
                  <Link className='button rounded-[14px] min-w-[90px] px-4 font-medium flex flex-row items-center border border-lime justify-center text-center cursor-pointer whitespace-nowrap  h-[30px] px-4 text-[12px] bg-lime-900 text-orange-50'>Subscribe</Link>
                </div>
              </div>
            </div>
            <div className="h-px w-full self-stretch bg-gray-200_01"></div>
            <p className=' text-[12px] font-normal text-gray-600_01'>© 2024 by Urban craft all rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
