import React, { useEffect } from 'react'
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import { teamItems } from '../data'
import Aos from 'aos'

const TeamItems = () => {
    useEffect(() => {
        Aos.init({ once: true }); 

        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 100);
    })
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
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
  return (
    <>
     <div className="flex flex-wrap w-full">
                        <Slider {...settings} className='w-full'>
                            {
                                teamItems.map((i, index) => {
                                    return (
                                        <div className="p-[10px]" key={index} data-aos="fade-up" data-aos-duration={`${index}000`}>
                                            <div className="mb-[20px] relative h-full flex items-center overflow-hidden group">
                                                <div className="transition-all duration-[0.3s] ease-in-out bg-[#fff] rounded-tl-[20px] rounded-bl-[20px] absolute right-[-38px] group-hover:right-0">
                                                    <div className='team-socials relative'></div>
                                                    <ul className="mb-[0] py-[20px] px-[10px]">
                                                        <li className='leading-[28px] pb-[10px]'>
                                                            <Link>
                                                                <span className=''>
                                                                    <FaFacebookF />
                                                                </span>
                                                            </Link>
                                                        </li>
                                                        <li className='leading-[28px] pb-[10px]'>
                                                            <Link>
                                                                <span className=''>
                                                                    <FaInstagram />
                                                                </span>
                                                            </Link>
                                                        </li>
                                                        <li className='leading-[28px] pb-[10px]'>
                                                            <Link>
                                                                <span className=''>
                                                                    <FaWhatsapp />
                                                                </span>
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <img src={i.img} alt="Team" className="w-full rounded-[20px]" />
                                            </div>
                                            <div className="text-center">
                                                <h5 className="tracking-[0.03rem] leading-[1.2] text-[18px] font-bold text-[#3d4750]">Juliat Hilson</h5>
                                                <p className="font-Poppins font-light leading-[28px] tracking-[0.03rem] text-[15px] text-[#686e7d]">Team Leader</p>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </Slider>
                    </div>
    
    </>
  )
}

export default TeamItems