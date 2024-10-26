import React, { useEffect } from 'react'
import { FaQuoteRight, FaUser } from 'react-icons/fa'
import { FaClock, FaComment, FaDribbble, FaFacebookF, FaPaperPlane, FaReply, FaShare, FaThumbsUp, FaWhatsapp, FaXTwitter, FaYoutube } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import BlogSidebar from '../Blog/BlogSidebar'
import Aos from 'aos'

const BlogDetails = () => {
    useEffect(() => {
        Aos.init({ once: true }); 
    
        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 100);})
    return (
        <>
            <div className="flex lg:flex-row flex-col w-full my-[80px]" data-aos="fade-up" data-aos-duration="1000">
                <div className="mx-auto lg:flex-row gap-7 flex-col flex w-full max-w-6xl self-end xl:px-0 px-5">
                    <BlogSidebar />
                    <div className="flex flex-col lg:w-[67%] w-full gap-[20px]" data-aos="fade-up" data-aos-duration="1000">
                        <img src="assets/Images/blog1.jpg" className='w-full rounded-[20px]' alt="" data-aos="fade-up" data-aos-duration="1000" />
                        <div className="flex flex-col gap-4" data-aos="fade-up" data-aos-duration="1000">
                            <div className="flex items-center justify-between">
                                <ul className='flex items-center gap-[20px]'>
                                    <li className='flex items-center gap-2 text-gray-600 font-[500]'>
                                        <FaUser className='text-lime-900' />
                                        Jean R Gunter
                                    </li>
                                    <li className='flex items-center gap-2 text-gray-600 font-[500]'>
                                        <FaComment className='text-lime-900' />
                                        3.2k Comments
                                    </li>
                                    <li className='flex items-center gap-2 text-gray-600 font-[500]'>
                                        <FaThumbsUp className='text-lime-900' />
                                        1.4k Like
                                    </li>
                                </ul>

                                <p className='flex items-center gap-2 text-gray-600 font-[500]'>
                                    <FaShare className='text-lime-900' />
                                    Share
                                </p>
                            </div>

                            <div className="flex flex-col gap-4" data-aos="fade-up" data-aos-duration="1000">
                                <h3 className='mb-20px text-[32px] text-lime-500 font-[600]'>It is a long established fact that a reader
                                </h3>
                                <p className="mb-[10px] leading-[1.8] font-[400] text-gray-600">
                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                                </p>
                                <p className="mb-[10px] leading-[1.8] font-[400] text-gray-600">
                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                                </p>

                                <blockquote className='my-[20px] border-l-[5px] bg-gray-200_03 border-lime-900 p-[30px] relative text-[17px] italic text-gray-600' data-aos="fade-up" data-aos-duration="1000">

                                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.

                                    <h6 className='flex items-center gap-2 mt-[20px]'> <span className='w-[40px] h-[2px] block bg-lime-500'></span> Mark Crawford</h6>
                                    <span className='absolute right-[30px] bottom-[8px] text-[80px] opacity-20	text-lime-900'><FaQuoteRight /></span>
                                </blockquote>

                                <p className="mb-[10px] leading-[1.8] font-[400] text-gray-600" data-aos="fade-up" data-aos-duration="1000">
                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                                </p>

                                <div className="flex  items-center gap-5" data-aos="fade-up" data-aos-duration="1000">
                                    <div>
                                        <img src="assets/Images/sofa1.png" className='w-[100%]' alt="" />

                                    </div>
                                    <div>
                                        <img src="assets/Images/sofa2.png" className='w-[100%]' alt="" />

                                    </div>
                                    <div>
                                        <img src="assets/Images/sofa3.png" className='w-[100%]' alt="" />

                                    </div>

                                </div>

                                <p className="mb-[10px] leading-[1.8] font-[400] text-gray-600" data-aos="fade-up" data-aos-duration="1000">
                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                                </p>

                                <hr className='text-gray-200_01' />

                                <div className="flex sm:flex-row flex-col items-center gap-[20px]">
                                    <h5 className='text-[18px] font-[500] text-lime-500'>Tags :
                                    </h5>
                                    <ul className='flex items-center gap-[15px]'>
                                        <li>
                                            <Link><span className='bg-gray-200_03  px-[20px] py-[10px] rounded-[20px]'>Shop</span></Link>
                                        </li>
                                        <li>
                                            <Link><span className='bg-gray-200_03 px-[20px] py-[10px] rounded-[20px]'>Online</span></Link>
                                        </li>
                                        <li>
                                            <Link><span className='bg-gray-200_03  px-[20px] py-[10px]  rounded-[20px]'>Wooden</span></Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="flex md:flex-row flex-col item-center justify-start bg-gray-200_01 my-[50px] p-[20px] rounded-[10px]" data-aos="fade-up" data-aos-duration="1000">
                            <div className=" mx-auto">
                                <img src="assets/Images/author.jpg" className='w-[182px] h-[182px] rounded-[10px]' alt="" />
                            </div>
                            <div className="px-[20px] md:text-left text-center">
                                <h6 className='text-[16px] text-lime-500 font-[500] '>Author</h6>
                                <h3 className='text-[22px] text-lime-900 font-[500] '>Roger Duque</h3>
                                <p className='text-[16px] text-gray-600_01'>It is a long established fact that a reader will be distracted by the abcd readable content of a page when long established fact that a reader looking at its that more less layout.</p>
                                <div className="flex items-center md:justify-start justify-center gap-2 flex-row mt-[10px]">
                                    <Link><span className='text-lime-900 border-2 border-lime-900 rounded-[50px] w-[40px] h-[40px] flex items-center justify-center'><FaFacebookF /></span></Link>
                                    <Link><span className='text-lime-900 border-2 border-lime-900 rounded-[50px] w-[40px] h-[40px] flex items-center justify-center'><FaXTwitter /></span></Link>
                                    <Link><span className='text-lime-900 border-2 border-lime-900 rounded-[50px] w-[40px] h-[40px] flex items-center justify-center'><FaDribbble /></span></Link>
                                    <Link><span className='text-lime-900 border-2 border-lime-900 rounded-[50px] w-[40px] h-[40px] flex items-center justify-center'><FaWhatsapp /></span></Link>
                                    <Link><span className='text-lime-900 border-2 border-lime-900 rounded-[50px] w-[40px] h-[40px] flex items-center justify-center'><FaYoutube /></span></Link>
                                </div>
                            </div>
                        </div>
                        <div className="" data-aos="fade-up" data-aos-duration="1000">
                            <h3 className='text-[28px] text-lime-500 font-[500]'>Comments (20)</h3>
                            <div className="my-[30px]">
                                <div className="mt-[50px] flex items-start justify-start">
                                    <img src="assets/Images/user1.jpg" className='rounded-[50%]' alt="" />
                                    <div className="ml-[20px]">
                                        <h5 className='text-[18px] text=lime-500'>Sinkler Jesse</h5>
                                        <span className='flex items-center gap-1 text-[14px] text-lime-900 font-[400]'><FaClock /> August 20, 2024</span>
                                        <p className='mb-[10px] leading-[1.8] font-[400] text-gray-600'>There are many variations of passages the majority have suffered in some injected humour or randomised words which don't look even long established fact that a reader slightly believable.</p>
                                        <Link> <span className='flex items-center text-[16px] text-lime-900 font-[400] gap-2'> <FaReply /> Reply </span></Link>
                                    </div>
                                </div>
                                <div className="mt-[50px] ml-[50px] flex items-start justify-start">
                                    <img src="assets/Images/user2.jpg" className='rounded-[50%]' alt="" />
                                    <div className="ml-[20px]">
                                        <h5 className='text-[18px] text=lime-500'>Sinkler Jesse</h5>
                                        <span className='flex items-center gap-1 text-[14px] text-lime-900 font-[400]'><FaClock /> August 20, 2024</span>
                                        <p className='mb-[10px] leading-[1.8] font-[400] text-gray-600'>There are many variations of passages the majority have suffered in some injected humour or randomised words which don't look even long established fact that a reader slightly believable.</p>
                                        <Link> <span className='flex items-center text-[16px] text-lime-900 font-[400] gap-2'> <FaReply /> Reply </span></Link>
                                    </div>
                                </div>
                                <div className="mt-[50px] flex items-start justify-start">
                                    <img src="assets/Images/user3.jpg" className='rounded-[50%]' alt="" />
                                    <div className="ml-[20px]">
                                        <h5 className='text-[18px] text=lime-500'>Sinkler Jesse</h5>
                                        <span className='flex items-center gap-1 text-[14px] text-lime-900 font-[400]'><FaClock /> August 20, 2024</span>
                                        <p className='mb-[10px] leading-[1.8] font-[400] text-gray-600'>There are many variations of passages the majority have suffered in some injected humour or randomised words which don't look even long established fact that a reader slightly believable.</p>
                                        <Link> <span className='flex items-center text-[16px] text-lime-900 font-[400] gap-2'> <FaReply /> Reply </span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-[50px] p-[30px] bg-gray-200_01 rounded-[10px]" data-aos="fade-up" data-aos-duration="1000">
                            <h3 className='mb-[20px] text-lime-500 font-[500] text-[28px]'>Leave A Comment</h3>

                            <form action="">
                                <div className="flex flex-col gap-4">

                                    <div className="flex flex-wrap sm:gap-2 gap-4 ">
                                        <input name='name'  type="text" className='sm:w-[49%] border border-lime-900 rounded-[10px] p-[10px] ' placeholder='Your Name*' />
                                        <input name='email'  type="text" className='sm:w-[49%] border border-lime-900 rounded-[10px] p-[10px] ' placeholder='Your Email*' />
                                    </div>
                                    <textarea name="" placeholder='Your Comments*' className='w-full h-[120px] border border-lime-900 rounded-[10px] p-[10px] ' ></textarea>

                                    <button className='flex'><span className='bg-lime-900 flex items-center p-[10px] text-white gap-2 font-[400] rounded-[10px]'>Post Comment <span><FaPaperPlane /></span></span> </button>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default BlogDetails