import Aos from 'aos'
import React from 'react'
import { Link } from 'react-router-dom'

const RecentlyItems = ({ value }) => {
    Aos.init()
    return (
        <>
            <div className="flex flex-col items-center gap-3 w-full"
            data-aos="zoom-in"
            data-aos-duration="1500">
                <div className="h-[270px] relative content-center self-stretch">
                    <img src={value.img} className='rounded-[16px] h-[270px] mx-auto w-full object-cover' alt="" />
                    <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-max flex-1 p-2">
                        <div className="flex flex-col items-start gap-48">
                            <button className='rounded-[18px] w-[36px] self-end px-2 flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap rounded-[50%] h-[36px] px-2 bg-black-900_4c text-white'> <img src="assets/Images/heart.svg" alt="" /></button>
                            <div className="rounded-[12px] items-center	 flex bg-black-900_4c">
                                <img className="w-[16px] h-[16px]" src="assets/Images/star.svg" alt="Rating" loading="lazy"/><p className=" text-[14px] font-normal text-white undefined">4.5</p></div>
                        </div>
                    </div>
                </div>
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
                            <h6 className=' text-[16px] font-semibold text-black-900_01'>$ 500</h6>
                            <p className=' text-[14px] font-normal text-gray-600_01 line-through'>$800</p>
                        </div>
                        <p className=' text-[14px] font-normal text-green-900 '>30% OFF</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RecentlyItems
