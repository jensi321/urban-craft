import Aos from 'aos';
import React, { useEffect } from 'react'
import { RiDoubleQuotesL } from 'react-icons/ri';
import Slider from 'react-slick'

const Testimonial = () => {
    
    useEffect(() => {
        Aos.init({ once: true }); 
    
        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 100);})

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const items = [
        {
            img: "assets/Images/user1.jpg"
        },
        {
            img: "assets/Images/user2.jpg"
        },
        {
            img: "assets/Images/user3.jpg"
        },
    ]
    return (
        <>
            <div className="mt-[0px] mb-[70px] about-outer">
                <div className="mb-[30px]" data-aos="fade-up" data-aos-duration="1000">
                    <h2 className='text-lime-500 font-[700] text-center text-[25px] mb-[10px]'>What Our Client Say's <span className='text-lime-900'>About Us</span></h2>
                    <p className='text-gray-600 text-center leading-relaxed	font-[400] text-[16px] '>It is a long established fact that a reader will be distracted by the readable
                        content of a page words which even slightly when looking at its layout. </p>
                </div>

                <div className="md:w-[50%] w-full px-[15px] md:mx-auto" data-aos="fade-up" data-aos-duration="1000">
                    <Slider {...settings}>

                        {
                            items.map((i, index) => {
                                return (
                                    <div className="block mt-[50px] mb-[30px] px-[10px]" key={index}>
                                        <div className=" pt-[70px] w-full px-[30px] pb-[50px]  border border-lime-900 relative" >
                                            <div className="w-[100px] h-[100px] rounded-[50px] absolute top-[-50px] left-0 right-0 mx-auto overflow-hidden border-[5px] border-lime-500" >
                                                <img src={i.img} alt="" />
                                            </div>
                                            <p className='flex text-[15px] text-gray-600 font-[600] text-center'><span className='text-[30px] mr-[10px] text-[#000]'><RiDoubleQuotesL /></span>
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda deleniti dolor ipsum molestias mollitia ut. Aliquam aperiam corporis cumque debitis delectus dignissimos. Lorem ipsum dolor sit amet, consectetur.
                                            </p>
                                            <h3 className='inline-table p-[10px] mx-auto  bg-white border border-lime-900 text-[20px] font-[700] text-lime-900 tracking-[1px] uppercase absolute -bottom-[22px] left-0 right-0'>williamson <span className='text-[15px] text-lime-500'>- Web Developer</span></h3>
                                        </div>


                                    </div>
                                )
                            })
                        }

                    </Slider>

                </div>
            </div>
        </>
    )
}

export default Testimonial