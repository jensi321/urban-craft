import Aos from 'aos'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const Upcomingproduct = () => {
    useEffect(() => {
        Aos.init({ once: true }); 
    
        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 100);})
    const items = [
        {id:""},
        {id:""},

    ]
    return (
        <>
            <div className="">
                <div className="w-full self-stretch">
                    <div className="md:mr-[196px] flex flex-col gap-4 mr-0">
                        
                        {
                                items.map((i,index) => {
                                    return(
                                        <div className="gap-[18px] flex flex-1 items-center flex-row" key={index} data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
                                        <img src="assets/Images/cart1.png" alt="" className="w-[136px] h-[136px] object-cover" />
                                        <div className="flex flex-1 flex-col sm:gap-8 gap-2">
                                            <div className="flex flex-col items-start gap-0.5">
                                                <div className="flex flex-wrap justify-between sm:gap-5  self-stretch">
                                                    <p className=" text-[14px] font-normal text-black-900 ">Goldstan kashmir wood table</p>
                                                    <p className=" text-[14px] font-medium text-gray-900_02 ">Arriving 24 Jun, Mon</p>
                                                </div>
                                                <p className=" text-[12px] font-normal text-gray-600_01 ">Color: Blue</p>
                                                <p className=" text-[12px] font-normal text-gray-600_01 ">Qty: 1</p>
                                            </div>
                                        <div className="">
                                            <div className="flex">
                                                <Link><p className=" text-[14px] font-medium text-lime-900 underline ">Track</p></Link>
                                            </div>
                                        </div>
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

export default Upcomingproduct
