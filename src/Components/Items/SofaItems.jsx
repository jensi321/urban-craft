import React from 'react'
import { Link } from 'react-router-dom'

const SofaItems = ({ i, key }) => {
  return (
    <>
      <div className="flex w-full flex-col items-center justify-center gap-2.5"
        data-aos="zoom-in"
        data-aos-duration="1000"
        data-aos-delay={(key + 1) * 100}>
        <img src={i.img} className={`rounded-[16px] h-[172px] w-full object-cover`} alt="" />
        <Link to="/productlist">
          <p className=' text-[20px] font-normal text-black-900_01'>{i.title}</p>
        </Link>
      </div>
    </>
  )
}

export default SofaItems
