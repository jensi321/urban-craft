import Aos from 'aos'
import React, { useEffect } from 'react'
import { FaClock, FaSearch } from 'react-icons/fa'
import { FaArrowRightLong, FaDribbble, FaFacebookF, FaWhatsapp, FaXTwitter, FaYoutube } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const BlogSidebar = () => {
  useEffect(() => {
    Aos.init({ once: true }); 

    setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);})
  return (
    <>
      <div className={` lg:w-[33%] flex flex-col gap-5  w-full  lg:order-1 order-2`} data-aos="fade-up" data-aos-duration="1000">

        {/* Search Start */}
        <div className="bg-gray-200_03 p-[30px] mb-[30px] rounded-[15px]">
          <h5 className='relative pb-[10px] mb-[10px] text-[20px] font-[700] text-lime-500 '>
            <span className='border-b-[2px] border-lime-900'>
            Search
            </span>
            </h5>
          <form>
            <label className=' flex items-center bg-white border border-gray-600 p-[10px] rounded-[10px]'>
              <input type="text" name='search'  placeholder='Search here...' />
              <button className='text-lime-900'><FaSearch /></button>
            </label>
          </form>
        </div>
        {/* Search End */}

        {/* Category Start */}
        <div className="bg-gray-200_03 p-[30px] mb-[30px] rounded-[15px]">
          <h5 className='relative pb-[10px] mb-[10px] text-[20px] font-[700] text-lime-500'>
          <span className='border-b-[2px] border-lime-900'>
            Category
            </span>
          </h5>

          <div className="gap-[6px] flex flex-col">
            <Link className='flex items-center pb-[10px]'>
              <span className='text-lime-900 mr-[5px]'><FaArrowRightLong /></span>
              <p className=' text-[14px] cursor-pointer font-normal text-gray-600_01 hover:font-medium hover:text-lime-900 '>Wooden</p>
            </Link>
            <Link className='flex items-center pb-[10px]'>
              <span className='text-lime-900 mr-[5px]'><FaArrowRightLong /></span>
              <p className=' text-[14px] cursor-pointer font-normal text-gray-600_01 hover:font-medium hover:text-lime-900 '>Fabric</p>
            </Link>
            <Link className='flex items-center pb-[10px]'>
              <span className='text-lime-900 mr-[5px]'><FaArrowRightLong /></span>
              <p className=' text-[14px] cursor-pointer font-normal text-gray-600_01 hover:font-medium hover:text-lime-900 '>L shaped</p>
            </Link>
            <Link className='flex items-center pb-[10px]'>
              <span className='text-lime-900 mr-[5px]'><FaArrowRightLong /></span>
              <p className=' text-[14px] cursor-pointer font-normal text-gray-600_01 hover:font-medium hover:text-lime-900 '>Sofa cum beds</p>
            </Link>
            <Link className='flex items-center pb-[10px]'>
              <span className='text-lime-900 mr-[5px]'><FaArrowRightLong /></span>
              <p className=' text-[14px] cursor-pointer font-normal text-gray-600_01 hover:font-medium hover:text-lime-900 '>Recliner</p>
            </Link>
          </div>
        </div>
        {/* Category End */}

        {/* Recent post Start */}
        <div className="bg-gray-200_03 p-[30px] mb-[30px] rounded-[15px]">
          
          <h5 className='relative pb-[10px] mb-[10px] text-[20px] font-[700] text-lime-500'>
          <span className='border-b-[2px] border-lime-900'>
            Recent Post
            </span>
          </h5>

          <div className="">
            <div className="flex flex-row mb-[15px]">
              <img src="assets/Images/blog1.jpg" className='w-[90px] h-[80px] rounded-[10px]' alt="" />
              <div className="ml-[15px]">
                  <Link><p className='text-lime-500 font-[500] text-[15px] mb-[5px]'>How to Enjoy Your Favorite Things Every Day</p></Link>
                <p className='flex items-center text-gray-600_01 text-[14px]'><span className='mr-[5px]'><FaClock/></span> August 20, 2024</p>
              </div>
            </div>
            <div className="flex flex-row mb-[15px]">
              <img src="assets/Images/blog2.jpg" className='w-[90px] h-[80px] rounded-[10px]' alt="" />
              <div className="ml-[15px]">
                  <Link><p className='text-lime-500 font-[500] text-[15px] mb-[5px]'>How to Enjoy Your Favorite Things Every Day</p></Link>
                <p className='flex items-center text-gray-600_01 text-[14px]'><span className='mr-[5px]'><FaClock/></span> August 20, 2024</p>
              </div>
            </div>
            <div className="flex flex-row mb-[15px]">
              <img src="assets/Images/blog3.jpg" className='w-[90px] h-[80px] rounded-[10px]' alt="" />
              <div className="ml-[15px]">
                  <Link><p className='text-lime-500 font-[500] text-[15px] mb-[5px]'>How to Enjoy Your Favorite Things Every Day</p></Link>
                <p className='flex items-center text-gray-600_01 text-[14px]'><span className='mr-[5px]'><FaClock/></span> August 20, 2024</p>
              </div>
            </div>
          </div>
        </div>
        {/* Recent post End */}

        {/* Follow Us Start */}
        <div className="bg-gray-200_03 p-[30px] mb-[30px] rounded-[15px]">
          <h5 className='relative pb-[10px] mb-[10px] text-[20px] font-[700] text-lime-500'>
          <span className='border-b-[2px] border-lime-900'>
            Follow Us
            </span>
          </h5>

          <div className="flex gap-2 flex-row">
            <Link><span className='text-lime-900 border-2 border-lime-900 rounded-[50px] w-[40px] h-[40px] flex items-center justify-center'><FaFacebookF/></span></Link>
            <Link><span className='text-lime-900 border-2 border-lime-900 rounded-[50px] w-[40px] h-[40px] flex items-center justify-center'><FaXTwitter/></span></Link>
            <Link><span className='text-lime-900 border-2 border-lime-900 rounded-[50px] w-[40px] h-[40px] flex items-center justify-center'><FaDribbble/></span></Link>
            <Link><span className='text-lime-900 border-2 border-lime-900 rounded-[50px] w-[40px] h-[40px] flex items-center justify-center'><FaWhatsapp/></span></Link>
            <Link><span className='text-lime-900 border-2 border-lime-900 rounded-[50px] w-[40px] h-[40px] flex items-center justify-center'><FaYoutube/></span></Link>
          </div>
        </div>
        {/* Follow Us End */}

        {/* Popular Tags Start */}
        <div className="bg-gray-200_03 p-[30px] mb-[30px] rounded-[15px]">
          <h5 className='relative pb-[10px] mb-[10px] text-[20px] font-[700] text-lime-500'>
          <span className='border-b-[2px] border-lime-900'>
            Follow Us
            </span>
          </h5>

          <div className="flex gap-2 flex-wrap">
            <Link><span className='text-lime-900 border-2 border-lime-900 rounded-[10px] px-[15px] py-[4px] flex items-center justify-center'>Shop</span></Link>
            <Link><span className='text-lime-900 border-2 border-lime-900 rounded-[10px] px-[15px] py-[4px] flex items-center justify-center'>Deal</span></Link>
            <Link><span className='text-lime-900 border-2 border-lime-900 rounded-[10px] px-[15px] py-[4px] flex items-center justify-center'> Online</span></Link>
            <Link><span className='text-lime-900 border-2 border-lime-900 rounded-[10px] px-[15px] py-[4px] flex items-center justify-center'>Buy</span></Link>
            <Link><span className='text-lime-900 border-2 border-lime-900 rounded-[10px] px-[15px] py-[4px] flex items-center justify-center'>Offer</span></Link>
            <Link><span className='text-lime-900 border-2 border-lime-900 rounded-[10px] px-[15px] py-[4px] flex items-center justify-center'>Tips</span></Link>
            <Link><span className='text-lime-900 border-2 border-lime-900 rounded-[10px] px-[15px] py-[4px] flex items-center justify-center'>Wooden</span></Link>
            <Link><span className='text-lime-900 border-2 border-lime-900 rounded-[10px] px-[15px] py-[4px] flex items-center justify-center'>Fabric</span></Link>
           
          </div>
        </div>
        {/* Popular Tags End */}
      </div>
    </>
  )
}

export default BlogSidebar