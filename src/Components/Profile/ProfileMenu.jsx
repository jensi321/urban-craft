import Aos from 'aos';
import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom';

const ProfileMenu = () => {
    const location = useLocation();
    useEffect(() => {
        Aos.init({ once: true }); 
    
        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 100);})
    return (
        <>
            <div className="rounded-[16px] lg:w-[24%] flex flex-col gap-5 border border-solid border-gray-200_01 px-4 py-5 w-full">
                <Link to={'/profile'} className={`flex items-center gap-2 rounded-lg  px-4 py-3 ${location.pathname === '/profile' ? 'bg-yellow-50' : 'bg-white-a700'
                    }`}>
                    {
                        location.pathname === '/profile' ? <img src="assets/Images/person-active.svg" alt="" />
                            : <img src="assets/Images/person.svg" alt="" />

                    }
                    <p className={`text-[16px] font-normal  ${location.pathname === '/profile' ? 'text-lime-900' : 'text-gray-600_01'
                    }`}>My account</p>
                </Link>
                <Link to={'/order'} className={`flex items-center gap-2 rounded-lg  px-4 py-3 ${location.pathname === '/order' ? 'bg-yellow-50' : 'bg-white-a700'
                    }`}>
                    {
                        location.pathname === '/order' ? <img src="assets/Images/cart-active.svg" alt="" />
                            : <img src="assets/Images/cart.svg" alt="" />

                    }
                    <p className={`text-[16px] font-normal  ${location.pathname === '/order' ? 'text-lime-900' : 'text-gray-600_01'
                    }`}>My order</p>
                </Link>
                <Link to={'/payments'} className={`flex items-center gap-2 rounded-lg  px-4 py-3 ${location.pathname === '/payments' ? 'bg-yellow-50' : 'bg-white-a700'
                    }`}>
                    {
                        location.pathname === '/payments' ? <img src="assets/Images/payments-active.svg" alt="" />
                            : <img src="assets/Images/payments.svg" alt="" />

                    }
                    <p className={`text-[16px] font-normal  ${location.pathname === '/payments' ? 'text-lime-900' : 'text-gray-600_01'
                    }`}>Manage payments</p>
                </Link>
                <Link to={'/address'} className={`flex items-center gap-2 rounded-lg  px-4 py-3 ${location.pathname === '/address' ? 'bg-yellow-50' : 'bg-white-a700'
                    }`}>
                    {
                        location.pathname === '/address' ? <img src="assets/Images/location-active.svg" alt="" />
                            : <img src="assets/Images/location-2.svg" alt="" />

                    }
                    <p className={`text-[16px] font-normal  ${location.pathname === '/address' ? 'text-lime-900' : 'text-gray-600_01'
                    }`}>Manage address</p>
                </Link>
                <Link to={'/wishlist'} className={`flex items-center gap-2 rounded-lg  px-4 py-3 ${location.pathname === '/wishlist' ? 'bg-yellow-50' : 'bg-white-a700'
                    }`}>
                    {
                        location.pathname === '/wishlist' ? <img src="assets/Images/heart-active.svg" alt="" />
                            : <img src="assets/Images/heart-2.svg" alt="" />

                    }
                    <p className={`text-[16px] font-normal  ${location.pathname === '/wishlist' ? 'text-lime-900' : 'text-gray-600_01'
                    }`}>Wish list</p>
                </Link>
                <Link to={'/support'} className={`flex items-center gap-2 rounded-lg  px-4 py-3 ${location.pathname === '/support' ? 'bg-yellow-50' : 'bg-white-a700'
                    }`}>
                    {
                        location.pathname === '/support' ? <img src="assets/Images/support-active.svg" alt="" />
                            : <img src="assets/Images/support-2.svg" alt="" />

                    }
                    <p className={`text-[16px] font-normal  ${location.pathname === '/support' ? 'text-lime-900' : 'text-gray-600_01'
                    }`}>Support</p>
                </Link>
                <Link to={'/'} className={`flex items-center gap-2 rounded-lg  px-4 py-3 ${location.pathname === '/logout' ? 'bg-yellow-50' : 'bg-white-a700'
                    }`}>
                    {
                        location.pathname === '/logout' ? <img src="assets/Images/logout-active.svg" alt="" />
                            : <img src="assets/Images/logout.svg" alt="" />

                    }
                    <p className={`text-[16px] font-normal  ${location.pathname === '/logout' ? 'text-lime-900' : 'text-gray-600_01'
                    }`}>Log out</p>
                </Link>

                
            </div>
        </>
    )
}

export default ProfileMenu
