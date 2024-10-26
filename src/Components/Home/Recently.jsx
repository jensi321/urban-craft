import Aos from 'aos'
import React, { useEffect } from 'react'
import { RecentlyItemsData } from '../data'
import RecentlyItems from '../Items/RecentlyItems'

const Recently = () => {
    useEffect(() => {
        Aos.init({ once: true }); 
    
        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 100);})
    return (
        <>
            <div className="flex flex-col items-center  lg:my-[90px] sm:my-[65px] my-[45px] popular-outer" data-aos="fade-up" data-aos-duration="1000">
                <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 lg:px-0 px-5">
                    <div className="flex flex-col items-center justify-center gap-0.5" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                        <p className=' text-[38px] sm:text-[44px] md:text-[48px] font-medium text-black-900 '>Recently view</p>
                        <p className=' text-[16px] font-normal text-gray-600_01 '>Things you are keeping eye on</p>
                    </div>
                    <div className="grid lg:grid-cols-4 gap-6 sm:grid-cols-2 grid-cols-1" data-aos="zoom-in"
                                    data-aos-duration="1000"    >
                        {
                            RecentlyItemsData.map((i, index) => {
                                return (<RecentlyItems value={i} key={index} />)
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Recently
