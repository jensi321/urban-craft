import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import { ProductImages } from '../data'
import ProductAcordian from './ProductAcordian';

const ProductDetails = () => {
    const [count, setCount] = useState(0);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleImageClick = (index) => {
      setCurrentIndex(index);
    };
  
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
        <>

            <div className="mt-10">
                <div className="flex justify-center">
                    <div className="mx-auto flex w-full max-w-6xl items-start justify-center gap-6 lg:flex-row flex-col xl:px-0 px-5">
                        <div className="flex flex-1 flex-col gap-10 md:self-center self-stretch">
                            <div className="flex gap-2 lg:flex-row flex-col">
                                <div className="grid lg:grid-cols-1 justify-center gap-2 self-stretch sm:grid-cols-6 grid-cols-3" data-aos="zoom-in" data-aos-duration="1000">

                                    {
                                        ProductImages.map((i, index) => {
                                            return (
                                                <div className="rounded-[12px] flex flex-1 flex-col items-center border border-solid border-gray-200_01 bg-white-a700" key={index} onClick={() => handleImageClick(index)}>
                                                    <img src={i.img} className='w-[82px] h-[82px] rounded-lg object-cover' alt="" />
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                <img src={ProductImages[currentIndex].img} className='rounded-[12px] lg:w-[86%] sm:h-[580px] h-[100%] object-contain w-full' alt="" data-aos="zoom-in" data-aos-duration="1000"/>

                            </div>
                            <div className="">
                                    <ProductAcordian/>
                            </div>
                        </div>
                        <div className="gap-[30px] lg:w-[40%] flex flex-col w-full" data-aos="zoom-in" data-aos-duration="800">
                            <div className="flex items-start justify-center sm:flex-row">
                                <div className="flex flex-1 flex-col items-start justify-center gap-1.5 self-center sm:self-stretch">
                                    <p className=" text-[20px] font-normal text-black-900">Glodstan premium sofa</p>
                                    <p className=' text-[16px] font-normal text-gray-600_01'>3-seat sofa, Knisa medium blue</p>
                                    <div className="flex items-center self-stretch">
                                        <img src="assets/Images/star.svg" className="rounded-[1px] w-[20px] h-[20px]" alt="" />
                                        <div className="flex flex-1 flex-wrap items-center">
                                            <p className=' text-[16px] font-normal text-black-900 '>4.5</p>
                                            <p className=' text-[14px] self-end font-normal text-gray-600_01'>(345)</p>
                                        </div>
                                    </div>
                                </div>
                                <button className='rounded-[20px] w-[40px] !border px-2.5 flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap rounded-[50%] h-[40px] px-2.5 border-gray-200_01 border border-solid text-gray-600_01'>
                                    <img src="assets/Images/favorite.svg" alt="" />
                                </button>
                            </div>
                            <div className="flex flex-col items-start justify-center gap-0.5">
                                <div className="flex flex-wrap items-center gap-2 self-stretch">
                                    <p className=' text-[20px] font-medium text-black-900 '>$5450</p>
                                    <p className=' text-[16px] self-start font-normal text-gray-600_01 line-through'>$5450</p>
                                </div>
                                <p className=' text-[16px] font-normal text-green-900'>30% OFF</p>
                            </div>
                            <div className="flex flex-col items-start gap-2">
                                <p className=" text-[16px] font-normal uppercase text-gray-600_01">Colour</p>
                                <div className="flex gap-2 self-stretch md:flex-row flex-row">
                                    <div className="rounded-[12px] w-[32%] flex flex-col items-center justify-center gap-2 border border-solid border-gray-200_01 p-1.5 sm:w-full">
                                        <img src="assets/Images/color2.png" className='rounded-[12px] sm:h-[96px] w-full   object-cover' alt="" />
                                        <p className=' text-[16px] font-normal text-gray-600_01 '>Graphite</p>
                                    </div>
                                    <div className="rounded-[12px] w-[32%] flex flex-col items-center justify-center gap-2 border border-solid border-gray-200_01 p-1.5 sm:w-full">
                                        <img src="assets/Images/color1.png" className='rounded-[12px] sm:h-[96px] w-full object-cover' alt="" />
                                        <p className=' text-[16px] font-normal text-gray-600_01 '>Blue</p>
                                    </div>
                                    <div className="rounded-[12px] w-[32%] flex flex-col items-center justify-center gap-2 border border-solid border-gray-200_01 p-1.5 sm:w-full">
                                        <img src="assets/Images/color3.png" className='rounded-[12px] sm:h-[96px] w-full object-cover' alt="" />
                                        <p className=' text-[16px] font-normal text-gray-600_01 '>Olive

</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-8">
                                <div className="flex flex-col items-start gap-2">
                                    <p className="text-[16px] font-normal uppercase text-gray-600_01 ">Size</p>
                                    <div className="flex gap-2 self-stretch sm:flex-row flex-col">
                                        <button className='rounded-[12px] px-[33px] w-full !border sm:px-5 flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap undefined h-[52px] px-[34px] text-[16px] border-gray-200_01 border border-solid text-gray-600_01'>2 seater</button>
                                        <button className='rounded-[12px] px-[33px] w-full !border sm:px-5 flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap undefined h-[52px] px-[34px] text-[16px] border-gray-200_01 border border-solid text-black-900'>3 seater</button>
                                        <button className='rounded-[12px] px-[33px] w-full !border sm:px-5 flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap undefined h-[52px] px-[34px] text-[16px] border-gray-200_01 border border-solid text-gray-600_01'>3+1+1 seater</button>
                                    </div>
                                </div>
                                <div className="h-px bg-gray-200_01"></div>
                            </div>
                            <div className="flex justify-center gap-2 mx-auto sm:flex-row flex-col">
                                <div className="rounded-[24px] sm:w-[38%] flex items-center justify-between gap-5 border border-solid border-gray-200_01 px-5 py-3.5 sm:w-full">

                                    <Link onClick={countMinus}>  <img src="assets/Images/minus.svg" className='w-[20px] h-[20px]' alt="" /></Link>
                                    <h3 className=' text-[14px] font-plusjakartasans font-semibold text-lime-900'>{count}</h3>
                                    <Link onClick={countplus}>  <img src="assets/Images/plus.svg" className='w-[20px] h-[20px]' alt="" /></Link>

                                </div>
                                <Link to={"/cart"} className="rounded-[24px] min-w-[286px] px-[34px] font-semibold sm:px-5 flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap undefined h-[48px] px-[34px] text-[14px] bg-lime-900 text-orange-50 hover:text-white">Add to cart</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductDetails
