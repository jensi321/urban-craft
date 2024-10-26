import React, { useEffect } from 'react';
import FliterSidbar from '../ProductList/FliterSidbar';
import ProductListItems from '../Items/ProductListItems';

const ProductPaginatitionTwo = () => {
    useEffect(() =>{
        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }, 100); 
     })
    return (
        <>
            <div className="flex flex-col">
                <div className="flex justify-center">
                    <div className="mx-auto flex w-full max-w-6xl items-start justify-center gap-6 lg:flex-row flex-col xl:px-0 px-5">
                       
                    <ProductListItems itemsPerPage={12}/>

                        <FliterSidbar />
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductPaginatitionTwo;