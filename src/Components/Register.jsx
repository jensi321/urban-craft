import { Tabs } from 'antd'
import React, { useContext, useEffect } from 'react'
import { DataContext } from './Context/Dataprovider';
import RegisterForm from './Items/RegisterForm'

const Register = () => {
    const { activeTab, setActiveTab } = useContext(DataContext);
    useEffect(() =>{
        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }, 100); 
     })
    return (
        <>
            <div className="md:py-[124px] md:h-[940px] flex w-full items-center justify-center bg-cover bg-no-repeat h-[100%] py-5 login-outer" >
                <div className="mx-auto flex w-full max-w-6xl justify-center md:px-14 px-5 login-inner">
                    <div className="lg:w-[50%] sm:py-[38px] rounded-[24px] bg-white w-full py-5 item">
                        <div className="gap-[30px] mt-1 flex flex-col items-start px-10 sm:px-5 item-inner">
                            <p className=" text-[48px] font-medium text-black-900 font-rubik ">Register</p>
                            <Tabs
                                className='w-full'
                                defaultActiveKey={activeTab}
                                onChange={(key) => setActiveTab(key)}
                                items={[
                                    {
                                        label: 'Email',
                                        key: '1',
                                        children: <RegisterForm />,
                                    },
                                    {
                                        label: 'Phone',
                                        key: '2',
                                        children: <RegisterForm />,
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

export default Register
