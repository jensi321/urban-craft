import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { PopularItems } from '../data'
import Aos from 'aos';

const PopularSofaItems = () => {
  useEffect(() => {
    Aos.init({ once: true }); 

    setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);})
  return (
    <>
      <div className="w-full">
        <div className="grid lg:grid-cols-4 gap-6 sm:grid-cols-2 grid-cols-1"  >
          {
            PopularItems.map((i, index) => {
              return (
                <div className="flex w-full flex-col items-center gap-3 " key={index}
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                  data-aos-delay={(index + 1) * 100}
                >
                  <div className="w-full  animate__animated  animate__zoomIn">
                    <Link to="/productdetails">
                      <div className="h-[270px] relative content-center self-stretch">
                        <div className="img-content relative overflow-hidden">
                          <img src={i.img} className='rounded-[16px] h-[270px] mx-auto w-full object-cover' alt="" />
                        <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max flex-1 flex-col items-center p-2">
                          <div className="sm:max-w-[254px] flex w-full flex-col items-end self-stretch">
                            <button className='rounded-[18px] mb-[218px] w-[36px] px-2 flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap rounded-[50%] h-[36px] px-2 bg-black-900_4c text-white-a700'> <img src="assets/Images/heart.svg" alt="" /></button>
                          </div>
                        </div>
                        </div>
                      </div>
                    </Link>
                    <div className="flex flex-col items-center justify-center gap-2.5 self-stretch px-3">
                      <div className="max-w-[246px] mx-auto flex w-full items-center justify-between gap-5 self-stretch">
                        <div className="flex flex-col items-start justify-center gap-0.5">
                          <Link to="/productdetails">

                            <p className=' text-[16px] font-normal text-black-900_01'>Comfy craft</p>
                          </Link>
                          <p className=' text-[14px] font-normal text-gray-600_01'>Pure english wood with...</p>
                        </div>
                        <Link to={'/cart'} className='w-[36px] rounded-lg !border px-2 flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap rounded-lg h-[36px] px-2 border-gray-200_01 border border-solid text-gray-600_01'>
                          <img src="assets/Images/cart.svg" alt="" />
                        </Link>
                      </div>

                      <div className="max-w-[246px] mx-auto flex w-full items-center justify-center self-stretch">
                        <div className="flex flex-1 flex-wrap items-center">
                          <h6 className=' text-[16px] font-semibold text-black-900_01 mr-[5px]'>$ 500</h6>
                          <p className=' text-[14px] font-normal text-gray-600_01 line-through'>$800</p>
                        </div>
                        <p className=' text-[14px] font-normal text-green-900 '>30% OFF</p>
                      </div>
                    </div>
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

export default PopularSofaItems
