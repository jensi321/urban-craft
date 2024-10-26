import React, { useEffect, useState } from 'react'
import { productlistItems } from '../data';
import RecentlyItems from './RecentlyItems';
import ReactPaginate from 'react-paginate';

const ProductListItemsTwo = ( {itemsPerPage}) => {
    const [itemOffset, setItemOffset] = useState(0);

    const endOffset = itemOffset + itemsPerPage;
    const currentItems = productlistItems.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(productlistItems.length / itemsPerPage);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % productlistItems.length;
        setItemOffset(newOffset);
    };

    
    useEffect(() =>{
        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }, 100); 
     })
  return (
    <>
         <div className="flex flex-1 flex-col items-center gap-10 self-stretch">
                           
                           <div className={`grid justify-center gap-6 gap-y-6 self-stretch transition-all duration-300  md:grid-cols-2 grid-cols-1`}>
                           {currentItems && currentItems.map((i, index) => {
                                   return (
                                       <RecentlyItems value={i} key={index} />
                                   );
                               })}
                           </div>
                           <ReactPaginate
                               className='pagination'
                               breakLabel="..."
                               nextLabel={<>
                                   <div className="flex items-center gap-1">
                                       <p className='text-[15px] font-medium text-black-900'>Next</p>
                                       <img src="assets/Images/arrowright.svg" alt="" />
                                   </div>
                               </>}
                               onPageChange={handlePageClick}
                               pageRangeDisplayed={5}
                               pageCount={pageCount}
                               previousLabel={<>
                                   <div className="flex items-center gap-1">
                                       <img src="assets/Images/arrowleft.svg" alt="" />
                                       <p className='text-[15px] font-medium text-black-900'>Previous</p>
                                   </div>
                               </>}
                               renderOnZeroPageCount={null}
                           />
                       </div>
    </>
  )
}

export default ProductListItemsTwo