import Aos from 'aos';
import React, { useEffect, useState } from 'react'

const Faq = () => {
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
        title: 'What is the multi vendor services?',
        content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate sint atque pariatur cupiditate beatae voluptates quidem. Et tenetur autem itaque? Eum exercitationem assumenda enim eos voluptas. Ad incidunt laborum aliquam, expedita, voluptatibus quo id adipisci ea ratione ut, dignissimos natus?'
      },
      {
        title: 'How to buy many products at a time?',
        content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate sint atque pariatur cupiditate beatae voluptates quidem. Et tenetur autem itaque? Eum exercitationem assumenda enim eos voluptas. Ad incidunt laborum aliquam, expedita, voluptatibus quo id adipisci ea ratione ut, dignissimos natus?'
      },
      {
        title: 'Refund policy for customer',
        content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate sint atque pariatur cupiditate beatae voluptates quidem. Et tenetur autem itaque? Eum exercitationem assumenda enim eos voluptas. Ad incidunt laborum aliquam, expedita, voluptatibus quo id adipisci ea ratione ut, dignissimos natus?'
      },
      {
        title: 'What is the multi vendor services?',
        content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate sint atque pariatur cupiditate beatae voluptates quidem. Et tenetur autem itaque? Eum exercitationem assumenda enim eos voluptas. Ad incidunt laborum aliquam, expedita, voluptatibus quo id adipisci ea ratione ut, dignissimos natus?'
      },
      {
        title: 'How to buy many products at a time?',
        content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate sint atque pariatur cupiditate beatae voluptates quidem. Et tenetur autem itaque? Eum exercitationem assumenda enim eos voluptas. Ad incidunt laborum aliquam, expedita, voluptatibus quo id adipisci ea ratione ut, dignissimos natus?'
      },
      {
        title: 'Refund policy for customer',
        content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate sint atque pariatur cupiditate beatae voluptates quidem. Et tenetur autem itaque? Eum exercitationem assumenda enim eos voluptas. Ad incidunt laborum aliquam, expedita, voluptatibus quo id adipisci ea ratione ut, dignissimos natus?'
      },
    ];
  
  
    return (
        <>
            <div className="flex flex-col items-center mt-[40px] mb-[40px] gap-10 ">
                <div className=" flex justify-center self-stretch ">
                    <div className="mx-auto items-center flex flex-col w-full max-w-6xl self-end xl:px-0 px-5">
                        <h2 className='mb-[15px] font-manrope text-[26px] font-semibold text-lime-500 relative inline p-[0] capitalize leading-[1]' data-aos="fade-up" data-aos-duration="1000">
                            frequently asked <span className='text-lime-900'>
                                Questions
                            </span>
                        </h2>
                        <p className='text-gray-600 leading-relaxed	font-[400] text-[16px] ' data-aos="fade-up" data-aos-duration="1000">
                            Customer service management.
                        </p>
                    </div>
                </div>
                <div className="block mx-auto w-full max-w-6xl xl:px-0 px-5">
                    <div className="flex flex-wrap -mx-[15px]">
                        <div className="lg:w-[40%] w-full px-[12px]">
                            <div className=" p-[30px]   my-[0] mx-auto bg-[#fff] rounded-[5px]">
                                <img src="assets/Images/about2.jpg" className='w-full' alt="" />
                            </div>
                        </div>
                        <div className="lg:w-[60%] w-full px-[12px]">
                            <div className=" p-[30px]   my-[0] mx-auto bg-[#fff] rounded-[5px]">
                                <div className="flex-col " data-aos="fade-up" data-aos-duration="1000" >
                                    {accordionItems.map((item, index) => (
                                        <div className="accordion__item" key={index} >
                                            <div
                                                className="p-[18px] flex flex-1 flex-col gap-3 border rounded-[10px] border-solid border-gray-200_01 mb-[10px]"
                                                onClick={() => handleAccordionClick(index)}
                                            >
                                                <div className="w-full">
                                                    <div className="">
                                                        <div className="flex items-center justify-between gap-5">
                                                            <p
                                                                className={`md:text-[18px] text-[20px] font-medium text-black-900 ${activeIndexes.includes(index) ? 'active' : ''
                                                                    }`}
                                                            >
                                                                {item.title}
                                                            </p>
                                                            <button
                                                                className={`rounded-[12px] w-[24px] px-1.5 flex flex-row items-center rotate-180  justify-center text-center cursor-pointer whitespace-nowrap rounded-[50%] h-[24px] px-1.5 bg-gray-200_03 ${activeIndexes.includes(index) ? 'active rotate-0' : ''
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
                                                            <p className="text-[16px] font-normal leading-6 text-gray-600_01">
                                                                {item.content}
                                                            </p>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </>
    )
}

export default Faq