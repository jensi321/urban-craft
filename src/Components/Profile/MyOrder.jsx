import { Tabs } from 'antd'
import React from 'react'
import Upcomingproduct from './ProfileItems/Upcomingproduct'
import ProfileMenu from './ProfileMenu'

const MyOrder = () => {
    return (
        <>
           <div className="flex flex-col items-center mt-[40px] mb-[96px] gap-10" data-aos="fade-up" data-aos-duration="1000">
                <div className="flex justify-center self-stretch">
                    <div className="mx-auto flex w-full max-w-6xl self-end xl:px-0 px-5">
                        <p className=" sm:text-[38px] md:text-[44px] text-[48px] font-medium text-black-900 undefined">Settings</p>
                      </div>
                </div>
                <div className="mx-auto w-full max-w-6xl xl:px-0 px-5" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                    <div className="flex items-start gap-6 lg:flex-row flex-col">
                        <ProfileMenu data-aos="zoom-in" data-aos-duration="800" data-aos-delay="300"/>
                        <div className="flex flex-1 flex-col gap-6 self-stretch">
                            <Tabs
                                defaultActiveKey="1"
                                centered
                                items={[
                                    {
                                        label: 'Upcoming',
                                        key: '1',
                                        children: <Upcomingproduct/>,
                                    },
                                    {
                                        label: 'Delivered',
                                        key: '2',
                                        children: <Upcomingproduct/>,
                                    },
                                    {
                                        label: 'Canceled & returned',
                                        key: '3',
                                        children: <Upcomingproduct/>,
                                    },
                                ]}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MyOrder
