import { Tabs } from 'antd'
import React, { useContext, useEffect } from 'react'
import { DataContext } from './Context/Dataprovider';
import LoginForm from './Items/LoginForm'

const Login = () => {
    const { activeTab, setActiveTab } = useContext(DataContext);
    useEffect(() =>{
        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }, 100); 
     })
    return (
        <>
            <div className="md:py-[124px] w-full  login-outer" >
                <div className="bg-img"></div>
                <div className="mx-auto flex w-full max-w-6xl justify-center md:px-14 my-12 px-5 login-inner relative z-10">
                    <div className="lg:w-[50%] sm:py-[38px] rounded-[24px] bg-white w-full py-5 item">
                        <div className="gap-[30px] mt-1 flex flex-col items-start px-10 sm:px-5 item-inner">
                            <p className=" text-[48px] font-medium text-black-900 font-rubik ">Login</p>
                            <Tabs
                             className='w-full'
                             defaultActiveKey={activeTab}
                             onChange={(key) => setActiveTab(key)}
                                items={[
                                    {
                                        label: 'Email',
                                        key: '1',
                                        children: <LoginForm/>,
                                    },
                                    {
                                        label: 'Phone',
                                        key: '2',
                                        children: <LoginForm/>,
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

export default Login
