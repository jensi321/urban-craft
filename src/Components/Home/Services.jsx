import Aos from 'aos'
import React, { useEffect } from 'react'
import { servicesItems } from '../data'

const Services = () => {
  useEffect(() => {
    Aos.init({ once: true }); 

    setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);})

    return (
        <>
        <div className="services-outer">
          <div className="lg:gap-[50px] xl:pl-[162px] flex bg-yellow-50 py-8 lg:pr-14 flex-wrap  px-5 sm:p-5">
            {
              servicesItems.map((i, index) => {
                return (
                  <div className="item lg:w-[20%] lg:m-0 mb-[25px] md:w-[50%] flex items-center gap-3 w-full" key={index} data-aos="zoom-in" data-aos-duration="1000">
                    <img src={i.img} alt="" />
                    <div className="flex flex-1 flex-col items-start justify-center gap-1.5">
                      <p className=' text-[18px] font-inter font-medium text-black-900 '>{i.title}</p>
                      <p className=' text-[16px] font-inter font-normal text-gray-600_01'>{i.desc}</p>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </>
    )
}

export default Services
