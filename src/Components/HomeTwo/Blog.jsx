import Aos from 'aos';
import React, { useEffect } from 'react'
import BlogItems from '../Items/BlogItems';
import Slider from 'react-slick';

const Blog = () => {
    useEffect(() => {
        Aos.init({ once: true });

        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 100);
    })

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    const blogItems = [
        {
            img: "assets/Images/blog1.jpg"
        },
        {
            img: "assets/Images/blog2.jpg"
        },
        {
            img: "assets/Images/blog3.jpg"
        },
        {
            img: "assets/Images/blog4.jpg"
        },
        {
            img: "assets/Images/blog5.jpg"
        },
        {
            img: "assets/Images/blog6.jpg"
        },
    ]
    return (
        <>
            <div className="lg:pb-[70px] lg:pt-0 py-[35px]">
                <div className="mx-auto flex w-full max-w-6xl items-center justify-center gap-6 flex-col xl:px-0 px-5">
                    <div className="flex flex-col items-center gap-2" data-aos="fade-up" data-aos-duration={`1000`}>
                        <h2 className=' text-[38px] sm:text-[44px] md:text-[48px] font-medium text-black-900 '>
                            Our Team
                        </h2>
                        <p className=' text-[16px] font-normal text-gray-600_01'>
                            Meet out expert team members. </p>
                    </div>

                    <div className="flex flex-wrap w-full">
                        <Slider {...settings} className='w-full'>
                            {
                                blogItems.map((i, index) => {
                                    return (
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