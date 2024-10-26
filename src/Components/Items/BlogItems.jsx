import Aos from 'aos'
import React, { useEffect } from 'react'
import { FaCalendarAlt, FaRegComments } from 'react-icons/fa'
import { FaArrowRightLong, FaRegCircleUser } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const BlogItems = ({ value }) => {
    useEffect(() => {
        Aos.init({ once: true }); 
    
        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 100);})
    return (
        <>
            <div className="px-[10px]" data-aos="zoom-in" data-aos-duration="1000">
                <div className="border border-solid border-lime-900 rounded-[20px] p-[20px]">
                    <div className="relative overflow-hidden rounded-[12px]">
                        <div className="img-content relative overflow-hidden">
                        <img src={value.img} className='w-[100%] h-[200px] object-cover	' alt="" />

                        </div>
                        <div className="absolute right-0 bottom-[30px] flex text-[13px] items-center bg-lime-900 text-white font-[500] rounded-l-[20px] px-[15px] py-[5px] ">
                            <FaCalendarAlt className='mr-[5px]' />
                            Aug 12, 2024
                        </div>
                    </div>
                    <div className="">
                        <div className="py-[14px] mb-[14px] border-b border-gray-600_01">
                            <ul>
                                <li className='inline-block mr-[15px] relative font-[500]'>
                                    <Link><p className='flex items-center gap-1 text-[16px] text-gray-600_01' > <FaRegCircleUser className='text-lime-900'/>
                                        By Alicia Davis</p></Link></li>
                                <li className='inline-block mr-[15px] relative font-[500]'>
                                    <Link><p className='flex items-center gap-1 text-[16px] text-gray-600_01'> <FaRegComments className='text-lime-900'/>

                                    2.5k Comments</p></Link></li>
                            </ul>
                        </div>
                        <Link><h4 className='text-[20px] mb-[15px] capitalize text-lime-900 font-[600]'>Temporibus autem quibusdam</h4></Link>
                        <p className='mb-[16px] leading-[1.8] text-gray-600'>There are many variations available the majority have suffered alteration randomised
                        words.</p>
                        <Link to={'/blogdetails'} className='inline-block'><span className='button bg-lime-900 text-white px-[20px] py-[10px] flex items-center gap-2 font-[500] rounded-[10px]'>Read More <span><FaArrowRightLong/></span></span></Link>
                    </div>  
                </div>
            </div>
        </>
    )
}

export default BlogItems