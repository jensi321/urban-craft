import React, { useEffect } from 'react';
import Slider from 'react-slick';
import 'aos/dist/aos.css';
import Aos from 'aos';

const Banner = () => {
  useEffect(() => {
    Aos.init({ once: true }); 
}, []);

  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
  };

  const item = [
    { id: "" },
    { id: "" },
    { id: "" },
    { id: "" },
  ];

  return (
    <>
      <div className="banner-outer" data-aos="fade-up" data-aos-duration="1500">
        <div className="">

          <Slider {...settings}>
            {
              item.map((index) => {
                return (
                  <div className="item lg:py-[114px] lg:h-[448px] flex items-center bg-white-a700 bg-cover bg-no-repeat h-auto py-5" key={index}>
                    <div className="mx-auto flex w-full max-w-6xl justify-center lg:px-0 px-5">
                      <div className="flex w-full justify-center md:px-14 px-5">
                        <div className="lg:w-[86%] flex flex-col items-start gap-10 w-full">
                          <div className="flex flex-col items-start gap-0.5 self-stretch" data-aos="zoom-in" data-aos-duration="1500">
                            <p className=" text-[34px] sm:text-[40px] md:text-[44px] font-light text-white ">Summer Collection</p>
                            <h1 className=" text-[46px] sm:text-[52px]  md:text-[60px] font-bold text-white ">FLAT 50% Off</h1>
                          </div>
                          <button className="rounded-[24px] sm:min-w-[392px] sm:px-[34px] font-semibold px-5 flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap  h-[48px] px-[34px] w-[200px] text-[14px] bg-black-900 text-white" data-aos="zoom-in" data-aos-duration="1500">Buy now</button>
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
    </>
  )
}

export default Banner;