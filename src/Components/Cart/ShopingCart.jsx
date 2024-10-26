import React, { useEffect, useState } from 'react';
import { cartItems } from '../data';
import Aos from 'aos';
import 'aos/dist/aos.css';


const ShopingCart = () => {
    useEffect(() => {
        Aos.init({ once: true });
    })
    // Initialize quantities based on cartItems
    const initialQuantities = cartItems.reduce((acc, item, index) => {
        acc[index] = 1; // Start with quantity of 1 for each item
        return acc;
    }, {});

    const [quantities, setQuantities] = useState(initialQuantities);

    const countPlus = (index) => {
        setQuantities(prev => ({ ...prev, [index]: prev[index] + 1 }));
    };

    const countMinus = (index) => {
        setQuantities(prev => ({
            ...prev,
            [index]: Math.max(prev[index] - 1, 1) 
        }));
    };

    return (
        <div className='flex-1 w-full lg:whitespace-nowrap' data-aos="fade-up" data-aos-duration="1000">

            <div className='md:flex items-center justify-between flex-row hidden'>
                <div className='w-[30%]'>
                    <div className="flex" data-aos="fade-right" data-aos-duration="500">
                        <p className="text-[14px] font-normal uppercase text-gray-600_01">Product</p>
                    </div>
                </div>
                <div className='flex w-full md:flex-row flex-col md:ml-0px ml-[30px] gap-2 items-center  justify-between'>
                    <div>
                        <div className="lg:ml-[184px] flex" data-aos="fade-left" data-aos-duration="500">
                            <p className="text-[14px] font-normal uppercase text-gray-600_01">Quantity</p>
                        </div>
                    </div>
                    <div>
                        <div className="flex" data-aos="fade-right" data-aos-duration="500">
                            <p className="text-[14px] font-normal uppercase text-gray-600_01">Price</p>
                        </div>
                    </div>
                    <div>
                        <div className="flex" data-aos="fade-left" data-aos-duration="500">
                            <p className="text-[14px] font-normal uppercase text-gray-600_01">Sub Total</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                {
                    cartItems.map((item, index) => (
                        <div key={index} className='flex items-center md:justify-between gap-3 sm:flex-row mb-[20px]' data-aos="zoom-in">
                            <div className='md:w-[30%]'>
                                <div className='flex items-center gap-3'>
                                    <input type="checkbox" className='md:w-[20px] md:h-[20px] w-[15px] h-[15px]' name='cartitem' />
                                    <img src={item.img} alt="" className='md:w-[136px] md:h-[136px] w-[90px] h-[90px] object-cover' />
                                </div>
                            </div>
                            <div className='flex flex-row flex-wrap w-full  gap-2 md:items-center  justify-between'>
                                <div className='flex flex-row md:w-auto w-full items-center justify-between gap-2'>

                                    <p className="text-[14px] font-normal md:hidden block uppercase text-gray-600_01">Quantity :</p>

                                    <div className="lg:ml-[184px] flex justify-end flex-1">
                                        <div className="rounded-[22px] flex flex-row items-center gap-4 border border-solid border-gray-200_01 md:p-3 p-2">
                                            <button onClick={() => countMinus(index)}>
                                                <img src="assets/Images/minus.svg" className='md:w-[20px] md:h-[20px] w-[15px] h-[15px]' alt="" />
                                            </button>
                                            <h3 className='text-[14px] font-plusjakartasans font-semibold text-lime-900'>{quantities[index]}</h3>
                                            <button onClick={() => countPlus(index)}>
                                                <img src="assets/Images/plus.svg" className='md:w-[20px] md:h-[20px] w-[15px] h-[15px]' alt="" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-row items-center md:w-auto w-full justify-between gap-2'>

                                    <p className="text-[14px] font-normal md:hidden block uppercase text-gray-600_01">Price :</p>

                                    <div className="flex">
                                        <p className='leading-[22px] md:text-[18px] w-[54%] font-normal text-gray-900'>
                                            ${item.price}
                                        </p>
                                    </div>
                                </div>
                                <div className='flex flex-row items-center md:w-auto w-full justify-between gap-2'>

                                    <p className="text-[14px] font-normal md:hidden block uppercase text-gray-600_01">Sub Total :</p>

                                    <div className="flex md:justify-center justify-end">
                                        <p className='leading-[22px] md:text-[18px] w-full font-normal text-gray-900'>
                                            ${item.price * quantities[index]}.00
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default ShopingCart;