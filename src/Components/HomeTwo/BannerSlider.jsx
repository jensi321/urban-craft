import Aos from 'aos';
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { ClipLoader } from 'react-spinners';

const BannerSlider = () => {
  useEffect(() => {
    Aos.init({ once: true });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    speed: 2000,
    // autoplaySpeed: 3000,
  };

  const items = [
    { img: "assets/Images/banner1.jpg" }, // Non-existent image
    { img: "assets/Images/banner2.jpg" }, // Valid image
    { img: "assets/Images/banner3.jpg" }, // Non-existent image
  ];

  const [imageHeight, setImageHeight] = useState(0);
  const [imageLoadingStates, setImageLoadingStates] = useState(
    items.map(() => true)
  );



  const handleImageLoad = (index, event) => {
    const height = event.target.offsetHeight;
    setImageHeight(height);
    setTimeout(() => {
      setImageLoadingStates((prevStates) => {
        const newStates = [...prevStates];
        newStates[index] = false;
        return newStates;
      });
    }, 1000); // Delay for 1 second
  };
  const handleImageError = (index) => {
    setImageLoadingStates((prevStates) => {
      const newStates = [...prevStates];
      newStates[index] = false; // Set loading state to false on error
      return newStates;
    });
  };

  return (
    <>
      <div className="banner-slider" data-aos="fade-up" data-aos-duration="1500">
        <div className="h-full">
          <Slider {...settings} className='h-full'>
            {
              items.map((item, index) => {
                return (
                  <div className="item flex items-center relative bg-white-a700 bg-cover bg-no-repeat h-[]]" key={index}>
                    {imageLoadingStates[index] && <div className={`loader h-[${imageHeight}px]`}><ClipLoader /></div>}
                    <img
                      src={item.img}
                      className='w-full'
                      alt=""
                      onLoad={(event) => handleImageLoad(index, event)}
                      onError={() => handleImageError(index)}
                      style={{ opacity: imageLoadingStates[index] ? '0' : '1' }}
                    />
                  </div>
                );
              })
            }
          </Slider>
        </div>
      </div>
    </>
  )
}

export default BannerSlider;