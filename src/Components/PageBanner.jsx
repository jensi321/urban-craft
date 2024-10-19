import { Breadcrumb } from 'antd'
import React from 'react'

const PageBanner = ({ value }) => {
    return (
        <>
            <div className="py-[22px] flex justify-center bg-gray-200_03 sm:py-5 pagebanner-outer">
                <div className="mx-auto flex w-full max-w-6xl items-center xl:px-0 px-5">
                    <Breadcrumb
                        separator={<img src="assets/Images/rightarrow.svg" alt="Separator" />}
                        items={value}
                    />
                </div>
            </div>
        </>
    )
}

export default PageBanner
