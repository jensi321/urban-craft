import React from 'react'
import Slider from 'react-slick'
import { blogItems } from '../data';
import BlogItems from '../Items/BlogItems';

const Blog = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 990,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };
    return (
        <>
            <div className="flex flex-col items-center  lg:my-[90px] sm:my-[65px] my-[45px] popular-outer" data-aos="fade-up" data-aos-duration="1000">
                <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 lg:px-0 px-5">
                    <div className="flex flex-col items-center justify-center gap-0.5" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                        <p className=' text-[38px] sm:text-[44px] md:text-[48px] font-medium text-black-900 '>Latest Blog</p>
                        <p className=' text-[16px] font-normal text-gray-600_01 '>Things you are keeping eye on</p>
                    </div>
                    <div className="">

                        <Slider {...settings} className='w-full '>
                            {
                                blogItems.map((i,index)=>{
                                    return(
                                        <BlogItems value={i} key={index}/>
                                    )
                                })
                            }
                        </Slider>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Blog