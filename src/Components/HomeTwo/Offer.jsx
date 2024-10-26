import React, { useEffect } from 'react'
import Slider from 'react-slick'
import { offerItems } from '../data';
import { Link } from 'react-router-dom';
import Aos from 'aos';

const Offer = () => {
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
                breakpoint: 1250,
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
            <div className="flex flex-col items-center lg:my-[90px] sm:my-[65px] my-[45px] ">
                <div className="w-full lg:px-0 px-5">
                    <div className="">
                        <Slider {...settings}>
                            {
                                offerItems.map((i, index) => {
                                    return (
                                        <div className="md:px-[15px]" key={index} data-aos="fade-up" data-aos-duration={`${index}000`}>
                                            <div className="relative">
                                                <div className="overflow-hidden">
                                                    <Link>
                                                    <img
                                                        src={i.img}
                                                        className='w-full transition-transform duration-300 ease-in-out hover:scale-[1.01] hover:translate-x-[2px]'
                                                        alt=""
                                                    />
                                                    
                                                    </Link>
                                                </div>
                                                <div className="absolute left-0 top-0 w-full h-full px-[15px] pointer-events-none">
                                                    <div className="md:py-[20px] py-[10px] md:px-[20px]">
                                                        <p className='font-[400] text-[13px] text-white tracking-[.05em] uppercase leading-[2.15em]'>Special offer</p>
                                                        <h4 className='font-[500] text-[24px] text-white leading-[1.33em] mb-[10px]'>
                                                            Recycled metal
                                                        </h4>
                                                        <Link><p className='border inline-block border-lime-900 rounded-[10px] text-lime-900 text-[16px] font-[500] px-[30px] py-[6px]'>Show More</p></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
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

export default Offer