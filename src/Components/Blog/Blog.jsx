import React, { useEffect } from 'react'
import BlogPagination from './BlogPagination'
import Aos from 'aos';

const Blog = () => {
  useEffect(() => {
    Aos.init({ once: true }); 

    setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);})
  return (
    <>
      <div className="flex flex-col items-center mt-[40px] mb-[96px] gap-10 ">
        <div className=" flex justify-center self-stretch ">
          <div className="mx-auto flex w-full max-w-6xl self-end xl:px-0 px-5">
            <p className=" sm:text-[38px] md:text-[44px] text-[48px] font-medium text-black-900 " data-aos="fade-up" data-aos-duration="1000">Our Blog</p>
          </div>
        </div>

       <BlogPagination/>


      </div>
    </>
  )
}

export default Blog