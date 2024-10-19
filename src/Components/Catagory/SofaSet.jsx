import Aos from 'aos'
import React from 'react'
import { sofaItems } from '../data'
import SofaItems from '../Items/SofaItems'

const SofaSet = () => {
    Aos.init()
    return (
        <>
            <div className="flex flex-col items-center lg:mt-[90px] sm:mt-[65px] mt-[30px]" data-aos="fade-up" data-aos-duration="1000">
                <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 lg:px-0 px-5">
                    <div className="flex flex-col items-center gap-2 md:px-14 px-5" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                        <h3 className=' text-[38px] sm:text-[44px] md:text-[48px] font-medium text-black-900 '>
                            Sofa set
                        </h3>
                        <p className=' text-[16px] font-normal text-gray-600_01'>Crafted with love specially for you</p>
                    </div>
                    <div className="grid lg:grid-cols-4 justify-center gap-6 px-5 sm:grid-cols-2 grid-cols-1" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
                        {
                            sofaItems.map((i, index) => {
                                return (
                                    <SofaItems i={i} key={index}/>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default SofaSet
