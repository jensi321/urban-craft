import Aos from 'aos';
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const SofaItems = ({ i, value }) => {
  useEffect(() => {
    Aos.init({ once: true }); 

    setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);})
  return (
    <>
      <div className="flex w-full flex-col items-center justify-center gap-2.5"
        data-aos="zoom-in"
        data-aos-duration="1000"
        data-aos-delay={(value + 1) * 100}>
          <div className="img-content relative overflow-hidden">
            <img src={i.img} className={`rounded-[16px] sm:h-[172px] w-full object-cover`} alt="" />
          </div>

        <Link to="/productlist">
          <p className=' text-[20px] font-normal text-black-900_01 text-center'>{i.title}</p>
        </Link>
      </div>
    </>
  )
}

export default SofaItems
