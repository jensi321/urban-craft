import React, { useEffect } from 'react'
import { servicesItems } from '../data'
import Aos from 'aos';

const Serveices = () => {
  useEffect(() => {
    Aos.init({ once: true }); 

    setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
})
  return (
    <>
      <div className="lg:pb-[70px] lg:pt-0 py-[35px]">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-center gap-6 flex-col xl:px-0 px-5" data-aos="fade-up" data-aos-duration="1000">
          <div className="flex flex-col items-center gap-2" data-aos="fade-up" data-aos-duration="1000">
            <h2 className='mb-[15px] font-manrope text-[26px] font-semibold text-lime-500 relative inline p-[0] capitalize leading-[1]'>
              Our  <span className='text-lime-900'>
                Services
              </span>
            </h2>
            <p className='text-gray-600 text-center leading-relaxed	font-[400] text-[16px] '>
              Customer service should not be a department. It should be the entire company.
            </p>
          </div>

          <div className="flex flex-wrap w-full">
            {
              servicesItems.map((i,index) =>{
                return(
                  <div className='px-[10px] lg:w-[25%] sm:w-[50%] w-full mb-[20px]' key={index} data-aos="fade-up" data-aos-duration={`${index}000`}>
                      <div className="p-[20px] flex flex-col gap-2 text-center border border-lime-900 rounded-[20px]">
                        <img src={i.img} className='mx-auto w-[40px]' alt="" />
                        
                        <h6 className='font-[600] text-[18px] '>{i.title}</h6>
                        <p className='text-[16px] text-gray-600'>{i.desc}</p>
                      </div>
                    </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Serveices