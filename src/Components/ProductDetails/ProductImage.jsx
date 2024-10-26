import Aos from 'aos';
import React, { useState, useRef, useEffect } from 'react';

const ProductImage = ({ scale, image }) => {
  const [transformOrigin, setTransformOrigin] = useState('50% 50%');
  const [isHovered, setIsHovered] = useState(false);
  const imageRef = useRef(null);

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
    setTransformOrigin('50% 50%'); // Reset transform origin on mouse out
  };

  const handleMouseMove = (e) => {
    const { left, top, width, height } = imageRef.current.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;
    setTransformOrigin(`${x}% ${y}%`);
  };

  useEffect(() => {
    Aos.init({ once: true }); 

})
  return (
    <div
      className="relative overflow-hidden	md:w-[580px] md:h-[580px] rounded-[12px] object-cover"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      onMouseMove={handleMouseMove}
      ref={imageRef}
      style={{ margin: '10px' }}
      data-aos="zoom-in" data-aos-duration="1000"
    >
      <img src={image} alt="" style={{
        width:'100%',
        height:'100%',
        objectFit:'cover',
        transform: isHovered ? `scale(${scale})` : 'scale(1)',
        transformOrigin: transformOrigin,
      }} />
    </div>
  );
};

export default ProductImage;