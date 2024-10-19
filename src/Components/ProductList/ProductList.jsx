import React from 'react'
import LikeThisProduct from './LikeThisProduct';
import ProductPaginatition from './ProductPaginatition';


const ProductList = () => {

  
    return (
        <>
            {/* Title Start */}
            <div className="sm:py-[30px] flex justify-center py-5">
                <div className="mx-auto flex w-full max-w-6xl items-center justify-center xl:px-0 px-5">
                    <p className=' md:text-[22px] text-[24px] font-medium text-black-900'>Sofa set</p>
                    <div className="flex flex-1 flex-wrap gap-2 px-2">
                        <p className=' text-[16px] font-normal text-gray-500 '>-</p>
                        <p className=" text-[16px] font-normal text-gray-600_01 ">2000 items</p>
                    </div>
                </div>


            </div>
            {/* Title End */}


            {/* Content one Start */}
            <ProductPaginatition itemsPerPage={12}/>
            {/* Content one End */}

            {/* Content Two Start */}
            <LikeThisProduct/>

        </>
    )
}

export default ProductList
