import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate';
import { Link } from 'react-router-dom';
import { productlistItems } from '../data';
import RecentlyItems from '../Items/RecentlyItems';


const ProductPaginatition = ({ itemsPerPage }) => {
    const [itemOffset, setItemOffset] = useState(0);

    const endOffset = itemOffset + itemsPerPage;
    const currentItems = productlistItems.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(productlistItems.length / itemsPerPage);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % productlistItems.length;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };

    
    useEffect(() =>{
        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }, 100); 
     })
    return (
        <>
            <div className=" flex flex-col">
                <div className="flex justify-center">
                    <div className="mx-auto flex w-full max-w-6xl items-start justify-center gap-6 lg:flex-row flex-col xl:px-0 px-5">
                        <div className="rounded-[16px] lg:w-[24%] flex flex-col gap-5 border border-solid border-gray-200_01 p-3.5  w-full">
                            <div className="flex flex-col gap-4">
                                <div className="flex flex-wrap items-center justify-between gap-5">
                                    <p className=" text-[20px] font-medium text-black-900 ">Filters</p>
                                    <Link><p className=' text-[16px] font-normal text-lime-900'>Clear all</p></Link>
                                </div>
                                <div className="flex flex-wrap gap-3">
                                    <div className="rounded-[16px] min-w-[116px] text-[14px] h-[34px] flex cursor-pointer flex-row items-center justify-center gap-1 bg-gray-200_03 px-2.5 text-center text-gray-600_01">
                                        <span>Fabric sofa</span>
                                        <img src="assets/Images/close-2.svg" className='h-[16px] w-[16px] cursor-pointer' alt="" />
                                    </div>
                                    <div className="rounded-[16px] min-w-[116px] text-[14px] h-[34px] flex cursor-pointer flex-row items-center justify-center gap-1 bg-gray-200_03 px-2.5 text-center text-gray-600_01">
                                        <span>2 seater</span>
                                        <img src="assets/Images/close-2.svg" className='h-[16px] w-[16px] cursor-pointer' alt="" />
                                    </div>
                                    <div className="rounded-[16px] min-w-[116px] text-[14px] h-[34px] flex cursor-pointer flex-row items-center justify-center gap-1 bg-gray-200_03 px-2.5 text-center text-gray-600_01">
                                        <span>Brown</span>
                                        <img src="assets/Images/close-2.svg" className='h-[16px] w-[16px] cursor-pointer' alt="" />
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="flex flex-col gap-1.5 border-b border-solid border-gray-200_01 py-5">
                                    <div className="flex justify-between gap-5">
                                        <p className=' text-[20px] font-medium text-black-900'>Sort by</p>
                                        <button className='rounded-[12px] rotate-[-180deg] w-[24px] px-1.5 flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap rounded-[50%] h-[24px] px-1.5 bg-gray-200_03'>
                                            <img src="assets/Images/arrowdown.svg" alt="" />
                                        </button>
                                    </div>
                                    <div className="flex flex-col">
                                        <label className='className="text-[16px] w-full gap-2 py-1.5 text-black-900_01 flex items-center gap-[5px] cursor-pointer"'>
                                            <input className=" h-[24px] w-[24px]   " type="radio" name="sortgroup" id="radio_id" />
                                            <span>Price - Low to high</span>
                                        </label>
                                        <label className='className="text-[16px] w-full mt-3 gap-2 py-1.5 text-black-900_01 flex items-center gap-[5px] cursor-pointer"'>
                                            <input className=" h-[24px] w-[24px]   " type="radio" name="sortgroup" id="radio_id" />
                                            <span>Price - High to low</span>
                                        </label>
                                        <label className='className="text-[16px] w-full mt-3 gap-2 py-1.5 text-black-900_01 flex items-center gap-[5px] cursor-pointer"'>
                                            <input className=" h-[24px] w-[24px]   " type="radio" name="sortgroup" id="radio_id" />
                                            <span>Latest</span>
                                        </label>
                                        <label className='className="text-[16px] w-full mt-3 gap-2 py-1.5 text-black-900_01 flex items-center gap-[5px] cursor-pointer"'>
                                            <input className=" h-[24px] w-[24px]   " type="radio" name="sortgroup" id="radio_id" />
                                            <span>Popular</span>
                                        </label>
                                    </div>
                                </div>

                                <div className="py-[18px] flex justify-between gap-5 border-b border-solid border-gray-200_01">
                                    <p className=" text-[20px] self-end font-medium text-black-900">Price range</p>
                                    <button className='rounded-[12px] rotate-[-180deg] w-[24px] px-1.5 flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap rounded-[50%] h-[24px] px-1.5 bg-gray-200_03'>
                                        <img src="assets/Images/arrowdown.svg" alt="" />
                                    </button>
                                </div>
                                <div className="py-[18px] flex justify-between gap-5 border-b border-solid border-gray-200_01">
                                    <p className=" text-[20px] self-end font-medium text-black-900">Materials</p>
                                    <button className='rounded-[12px] rotate-[-180deg] w-[24px] px-1.5 flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap rounded-[50%] h-[24px] px-1.5 bg-gray-200_03'>
                                        <img src="assets/Images/arrowdown.svg" alt="" />
                                    </button>
                                </div>
                                <div className="py-[18px] flex justify-between gap-5 border-b border-solid border-gray-200_01">
                                    <p className=" text-[20px] self-end font-medium text-black-900">Seater</p>
                                    <button className='rounded-[12px] rotate-[-180deg] w-[24px] px-1.5 flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap rounded-[50%] h-[24px] px-1.5 bg-gray-200_03'>
                                        <img src="assets/Images/arrowdown.svg" alt="" />
                                    </button>
                                </div>
                                <div className="py-[18px] flex justify-between gap-5 border-b border-solid border-gray-200_01">
                                    <p className=" text-[20px] self-end font-medium text-black-900">Color</p>
                                    <button className='rounded-[12px] rotate-[-180deg] w-[24px] px-1.5 flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap rounded-[50%] h-[24px] px-1.5 bg-gray-200_03'>
                                        <img src="assets/Images/arrowdown.svg" alt="" />
                                    </button>
                                </div>
                                <div className="py-[18px] flex justify-between gap-5 border-b border-solid border-gray-200_01">
                                    <p className=" text-[20px] self-end font-medium text-black-900">Brand</p>
                                    <button className='rounded-[12px] rotate-[-180deg] w-[24px] px-1.5 flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap rounded-[50%] h-[24px] px-1.5 bg-gray-200_03'>
                                        <img src="assets/Images/arrowdown.svg" alt="" />
                                    </button>
                                </div>
                                <div className="py-[18px] flex justify-between gap-5 border-b border-solid border-gray-200_01">
                                    <p className=" text-[20px] self-end font-medium text-black-900">Design</p>
                                    <button className='rounded-[12px] rotate-[-180deg] w-[24px] px-1.5 flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap rounded-[50%] h-[24px] px-1.5 bg-gray-200_03'>
                                        <img src="assets/Images/arrowdown.svg" alt="" />
                                    </button>
                                </div>
                                <div className="py-[18px] flex justify-between gap-5 ">
                                    <p className=" text-[20px] self-end font-medium text-black-900">Discount</p>
                                    <button className='rounded-[12px] rotate-[-180deg] w-[24px] px-1.5 flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap rounded-[50%] h-[24px] px-1.5 bg-gray-200_03'>
                                        <img src="assets/Images/arrowdown.svg" alt="" />
                                    </button>
                                </div>

                            </div>
                        </div>
                        <div className="flex flex-1 flex-col items-center gap-10 lg:self-center self-stretch">
                            <div className="grid lg:grid-cols-3 justify-center gap-6 gap-y-6 self-stretch sm:grid-cols-2 grid-cols-1">
                                {currentItems && currentItems.map((i, index) => {
                                    return (
                                        <RecentlyItems value={i}/>
                                    )
                                })}
                            </div>
                            <ReactPaginate
                                className='pagination'
                                breakLabel="..."
                                nextLabel={<>
                                    <div className="flex items-center gap-1">
                                        <p className=' text-[15px] font-medium text-black-900 '>Next</p>
                                        <img src="assets/Images/arrowright.svg" alt="" /> </div></>}
                                onPageChange={handlePageClick}
                                pageRangeDisplayed={5}
                                pageCount={pageCount}
                                previousLabel={<><div className="flex items-center gap-1">
                                    <img src="assets/Images/arrowleft.svg" alt="" />
                                    <p className=' text-[15px] font-medium text-black-900 '>Previous</p>
                                </div></>}
                                renderOnZeroPageCount={null}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductPaginatition
