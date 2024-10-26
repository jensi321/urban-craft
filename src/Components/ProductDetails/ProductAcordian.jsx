import Aos from 'aos';
import React, { useEffect, useState } from 'react';


const ProductAcordian = () => {

  const [activeIndexes, setActiveIndexes] = useState([0]); // Track active indexes
  useEffect(() => {
    Aos.init({ once: true });
  })
  const handleAccordionClick = (index) => {
    setActiveIndexes((prevIndexes) => {
      if (prevIndexes.includes(index)) {
        // If index is already active, remove it (close the accordion)
        return prevIndexes.filter((i) => i !== index);
      } else {
        // If index is not active, add it (open the accordion)
        return [...prevIndexes, index];
      }
    });
  };
  const accordionItems = [
    {
      title: 'Product details',
      content:
        'GLOSTAD sofa has a simple design which is also comfortable with its thick seat, padded armrests and soft back cushions that sit firmly in place.<br /><br />The sofa\'s low weight makes it easy to move – in your current home or when moving to a new home.<br /><br />The slightly angled metal legs make the sofa stable, while giving it a personal expression.<br />Designed so that you can quickly and easily assemble it with just 8 screws.<br /><br />Easy to bring home if you choose to do it on your own. The packaging is about 115 cm long, 65 cm wide and weighs just under 20 kg.<br /><br />The design allows us to use the material more efficiently in production, which is good for the planet – and helps us give you a lower price.<br /><br />A sofa with small, neat dimensions which is easy to furnish with, even when space is limited.<br /><br />This cover is made from Knisa fabric in polyester, which is dope-dyed. It’s a durable material which has a soft feel.<br /><br />Designer<br />Jonas Hultqvist<br /><br />Country of Origin<br />China<br /><br />Article number<br />004.888.21',
    },
    {
      title: 'Measurements',
      content:
        'GLOSTAD sofa has a simple design which is also comfortable with its thick seat, padded armrests and soft back cushions that sit firmly in place.<br /><br />The sofa\'s low weight makes it easy to move – in your current home or when moving to a new home.<br /><br />The slightly angled metal legs make the sofa stable, while giving it a personal expression.<br />Designed so that you can quickly and easily assemble it with just 8 screws.<br /><br />Easy to bring home if you choose to do it on your own. The packaging is about 115 cm long, 65 cm wide and weighs just under 20 kg.<br /><br />The design allows us to use the material more efficiently in production, which is good for the planet – and helps us give you a lower price.<br /><br />A sofa with small, neat dimensions which is easy to furnish with, even when space is limited.<br /><br />This cover is made from Knisa fabric in polyester, which is dope-dyed. It’s a durable material which has a soft feel.<br /><br />Designer<br />Jonas Hultqvist<br /><br />Country of Origin<br />China<br /><br />Article number<br />004.888.21',
    },
    {
      title: 'Reviews',
      content:
        'GLOSTAD sofa has a simple design which is also comfortable with its thick seat, padded armrests and soft back cushions that sit firmly in place.<br /><br />The sofa\'s low weight makes it easy to move – in your current home or when moving to a new home.<br /><br />The slightly angled metal legs make the sofa stable, while giving it a personal expression.<br />Designed so that you can quickly and easily assemble it with just 8 screws.<br /><br />Easy to bring home if you choose to do it on your own. The packaging is about 115 cm long, 65 cm wide and weighs just under 20 kg.<br /><br />The design allows us to use the material more efficiently in production, which is good for the planet – and helps us give you a lower price.<br /><br />A sofa with small, neat dimensions which is easy to furnish with, even when space is limited.<br /><br />This cover is made from Knisa fabric in polyester, which is dope-dyed. It’s a durable material which has a soft feel.<br /><br />Designer<br />Jonas Hultqvist<br /><br />Country of Origin<br />China<br /><br />Article number<br />004.888.21',
    },
  ];


  return (
    <div className="flex-col " data-aos="fade-up" data-aos-duration="1000" >
      {accordionItems.map((item, index) => (
        <div className="accordion__item" key={index} >
          <div
            className="py-[18px] flex flex-1 flex-col gap-3 border-b border-solid border-gray-200_01"
            onClick={() => handleAccordionClick(index)}
          >
            <div className="w-full">
              <div className="">
                <div className="flex items-center justify-between gap-5">
                  <p
                    className={`md:text-[22px] text-[24px] font-medium text-black-900 ${activeIndexes.includes(index) ? 'active' : ''
                      }`}
                  >
                    {item.title}
                  </p>
                  <button
                    className={`rounded-[12px] w-[24px] px-1.5 flex flex-row items-center justify-center rotate-180 text-center cursor-pointer whitespace-nowrap rounded-[50%] h-[24px] px-1.5 bg-gray-200_03 ${activeIndexes.includes(index) ? 'active rotate-0' : ''
                      }`}
                  >
                    <img src="assets/Images/arrowdown.svg" className='' alt="" />
                  </button>
                </div>
              </div>
            </div>

            {activeIndexes.includes(index) && (
              <div>
                <div>
                  <p className="text-[16px] font-normal leading-6 text-gray-600_01" dangerouslySetInnerHTML={{ __html: item.content }}>
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductAcordian;