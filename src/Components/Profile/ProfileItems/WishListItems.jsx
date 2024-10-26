import Aos from 'aos'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const WishListItems = () => {
  const items = [
    { id: "" },
    { id: "" },
    { id: "" },
  ]

  useEffect(() => {
    Aos.init({ once: true }); 

    setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);})
  return (
    <>
      {
        items.map((i, index) => {
          return (
            <div className="flex flex-1 items-center gap-4 flex-row " key={index}>
              <img src="assets/Images/cart1.png" alt="" className="w-[136px] h-[136px] object-cover" />
              <div className="flex flex-1 flex-col gap-2 sm:gap-9">
                <div className="flex flex-col gap-1 sm:gap-1">
                  <div className="sm:flex block items-center justify-center">
                    <p className=" text-[14px] font-normal text-black-900 ">Goldstan kashmir wood table</p>
                    <div className="flex flex-1 flex-wrap sm:justify-end">
                      <p className=" text-[14px] font-medium text-black-900_01 ">$ 500</p>
                      <p className=" text-[14px] font-normal text-gray-600_01 line-through ">$800</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center justify-between gap-5">
                    <p className=" text-[12px] font-normal text-gray-600_01 ">Color: Blue</p>
                    <p className=" text-[14px] font-normal text-green-900 ">30% OFF</p>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="sm:flex block flex-1 items-center gap-6">
                    <div className="">
                      <Link className="w-[36px] rounded-lg !border px-2 flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap rounded-lg h-[36px] px-2 border-gray-200_01 border border-solid text-gray-600_01">
                        <img src="assets/Images/cart.svg" alt="" />
                      </Link>
                    </div>
                    <Link> <p className=' text-[14px] mb-2 self-end font-normal text-lime-900 underline '>Remove</p></Link>
                  </div>
                  <p className=" text-[14px] font-normal text-green-900 ">
                    Price drop by $10</p>
                </div>
              </div>
            </div>
          )
        })
      }
    </>
  )
}

export default WishListItems
