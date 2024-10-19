import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { cartItems } from '../data';
import Aos from 'aos';


const ShopingCart = () => {
    Aos.init()
    const [count, setCount] = useState(1);

    const countplus = () => {
        setCount(count + 1)
    }

    const countMinus = () => {
        setCount(count - 1)
        if (count === 0) {
            setCount(0)
        }
    }
    return (
                <table className='flex-1 w-full lg:whitespace-nowrap overflow-x-scroll' data-aos="fade-up" data-aos-duration="1000">
                    <thead>
                        <tr>
                            <th >
                                <div className="flex" data-aos="fade-right" data-aos-duration="500">
                                    <p className=" text-[14px] font-normal uppercase text-gray-600_01 undefined">Product</p>
                                </div>
                            </th>
                            <th >
                                <div className="lg:ml-[184px] flex" data-aos="fade-left" data-aos-duration="500">
                                    <p className=" text-[14px] font-normal uppercase text-gray-600_01 undefined">quantity</p>
                                </div>
                            </th>
                            <th >
                                <div className="flex" data-aos="fade-right" data-aos-duration="500">
                                    <p className=" text-[14px] font-normal uppercase text-gray-600_01 undefined">Price</p>
                                </div>
                            </th>
                            <th>
                                <div className="flex" data-aos="fade-left" data-aos-duration="500">
                                    <p className=" text-[14px] font-normal uppercase text-gray-600_01 undefined">Sub total
                                    </p>
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody >
                        {
                            cartItems.map((i, index) => {
                                return (
                                    <tr key={index} data-aos="zoom-in" data-aos-duration="500">
                                        <td>
                                            <div className='flex items-center gap-3'>
                                                    {/* <img src="assets/Images/checkebox.svg" className='w-[24px] h-[24px]' alt="" /> */}
                                                    <input type="checkbox"  className='w-[20px] h-[20px]' />
                                                <img src={i.img} alt="" className='w-[136px] h-[136px] object-cover' />
                                            </div>
                                        </td>
                                        <td>
                                            <div className="lg:ml-[184px] flex flex-1">
                                                <div className="rounded-[22px] flex flex-row items-center gap-4 border border-solid border-gray-200_01 p-3">

                                                    <Link onClick={countMinus}>  <img src="assets/Images/minus.svg" className='w-[20px] h-[20px]' alt="" /></Link>
                                                    <h3 className=' text-[14px] font-plusjakartasans font-semibold text-lime-900'>{count}</h3>
                                                    <Link onClick={countplus}>  <img src="assets/Images/plus.svg" className='w-[20px] h-[20px]' alt="" /></Link>

                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="flex">
                                                <p className=' leading-[22px] text-[18px] w-[54%] font-normal text-gray-900'>
                                                    ${i.price}
                                                </p>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="flex justify-center">
                                                <p className=' leading-[22px] text-[18px] w-full font-normal text-gray-900'>
                                                    ${i.price * count}.00
                                                </p>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </table>

    )
}

export default ShopingCart