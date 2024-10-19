import React from 'react'
import { RecentlyItemsData } from '../data'
import RecentlyItems from '../Items/RecentlyItems'

const LikeThisProduct = () => {
    return (
        <>
            <div className=" md:my-[72px] flex flex-col sm:my-[24px] my-[12px]">
                <div className="flex flex-col items-center">
                    <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-8 lg:px-0 px-5">
                        <div className="flex flex-col items-center justify-center gap-0.5">
                            <p className=' text-[38px] sm:text-[44px] md:text-[48px] font-medium text-black-900 '>You may also like this</p>
                            <p className=' text-[16px] font-normal text-gray-600_01 '>Things you are keeping eye on</p>
                        </div>
                        <div className="grid lg:grid-cols-4 w-full justify-center gap-6 sm:grid-cols-2 grid-cols-1">
                            {
                                RecentlyItemsData.map((i, index) => {
                                    return (
                                        <>

                                            <RecentlyItems value={i}/>
                                        </>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LikeThisProduct
