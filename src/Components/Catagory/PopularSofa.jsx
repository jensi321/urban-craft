import { Tabs } from 'antd'
import Aos from 'aos';
import React from 'react'
import { Link } from 'react-router-dom'
import PopularSofaItems from '../Items/PopularSofaItems';
const operations = <Link className='rounded-[14px] min-w-[96px] px-[15px] gap-2 !border font-medium flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap undefined h-[30px] px-4 text-[12px] border-lime-900 border border-solid text-lime-900'>View all <img src="assets/Images/viewallArrow.svg" alt="" className='w-[12px] h-[12px]' /></Link>;

const PopularSofa = () => {
Aos.init(   )

    return (
        <>
            <div className="flex flex-col items-center lg:mt-[90px] sm:mt-[65px] mt-[45px] popular-outer" data-aos="fade-up" data-aos-duration="1000">
                <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 lg:px-0 px-5">
                    <div className="flex flex-col items-center justify-center gap-0.5" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                        <p className=' text-[38px] sm:text-[44px] md:text-[48px] font-medium text-black-900 '>Popular pick in sofa</p>
                        <p className=' text-[16px] font-normal text-gray-600_01 '>Crafted with love specially for you</p>
                    </div>
                    <div className="px-5">

                        <Tabs
                            defaultActiveKey="1"
                            tabBarExtraContent={operations}
                            items={[
                                {
                                    label: 'All',
                                    key: '1',
                                    children: <PopularSofaItems/>,
                                },
                                {
                                    label: 'Wooden',
                                    key: '2',
                                    children: <PopularSofaItems/>,
                                },
                                {
                                    label: 'Fabric',
                                    key: '3',
                                    children: <PopularSofaItems/>,
                                },
                                {
                                    label: 'L shaped',
                                    key: '4',
                                    children: <PopularSofaItems/>,
                                },
                                {
                                    label: 'Sofa cum beds',
                                    key: '5',
                                    children: <PopularSofaItems/>,
                                },
                                {
                                    label: 'Recliner',
                                    key: '6',
                                    children: <PopularSofaItems/>,
                                },
                            ]}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default PopularSofa
