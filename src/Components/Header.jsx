import React, { useEffect, useState } from 'react'
import {
    Dialog,
    DialogPanel,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
} from '@headlessui/react'
import { IoIosArrowDown } from "react-icons/io";
import { Link } from 'react-router-dom';


const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [showTopDiv, setShowTopDiv] = useState(true);


    const handleToggleTopDiv = () => {
        setShowTopDiv(!showTopDiv);
    };
    useEffect(() => {

        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 100);
    })


    return (
        <>
            {showTopDiv && (
                <div className="flex justify-center self-stretch bg-black-900 py-4">
                    <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-5 px-5 sm:flex-row flex-col">
                        <div className="lg:ml-[370px] flex items-center gap-2 flex-row ml-0">
                            <img src="assets/Images/gift.svg" alt="" className="w-[24px] h-[24px]" />
                            <p className=' text-[14px] font-rubik8 font-normal text-white '>
                                Sign up and get 10% off to your first order. <Link className='inline underline' to={'/register'}>SignUp Now</Link>
                            </p>
                        </div>
                        <Link onClick={handleToggleTopDiv}>
                            <img src="assets/Images/close.svg" alt="" className="sm:w-[20px] h-[20px] w-full" />
                        </Link>
                    </div>
                </div>)}
            <header className="flex justify-center self-stretch border-b border-solid border-gray-200_01 bg-white-a700 py-3">
                <nav aria-label="Global" className="mx-auto flex w-full max-w-6xl items-center justify-between gap-5 flex-row xl:px-0 px-5">
                    <div className="flex">
                        <Link to="/">
                            <img src="assets/Images/logo.png" alt="" className='w-[128px] h-[18px] object-contain' />
                        </Link>
                    </div>

                    <PopoverGroup className="hidden lg:flex lg:gap-x-12">

                        <Link to='/' className='flex items-center pb-[10px]'>
                            <p className=' text-[14px] cursor-pointer font-normal text-gray-600_01 hover: hover:text-black-900 '>Home</p>
                        </Link>

                        <Popover className="relative">
                            <PopoverButton className="flex items-center gap-x-1 focus:outline-none">
                                <p className=' flex flex-row items-center text-[14px] cursor-pointer font-normal text-gray-600_01 hover: hover:text-black-900 '>Shop <span className='pl-[3px]'><IoIosArrowDown /> </span></p>
                            </PopoverButton>

                            <PopoverPanel
                                transition
                                className="absolute -left-8 top-full p-[20px] gap-2 z-10 mt-3 w-screen max-w-[450px] overflow-hidden rounded-[10px] bg-white shadow-lg border border-solid border-gray-200_01 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
                            >
                                <div className="flex justify-between">
                                    <div className="gap-[12px] w-[50%] flex flex-col">
                                        <h6 className='text-[20px] font-[700] '>Category</h6>
                                        <div className="gap-[6px] flex flex-col">
                                            <Link className='flex items-center pb-[10px]'>
                                                <span className='mr-[10px] inline-block w-[5px] h-[5px] bg-gray-600_01 rounded-[50%]'></span>
                                                <p className=' text-[14px] cursor-pointer font-normal text-gray-600_01 hover: hover:text-black-900 '>Wooden</p>
                                            </Link>
                                            <Link className='flex items-center pb-[10px]'>
                                                <span className='mr-[10px] inline-block w-[5px] h-[5px] bg-gray-600_01 rounded-[50%]'></span>
                                                <p className=' text-[14px] cursor-pointer font-normal text-gray-600_01 hover: hover:text-black-900 '>Fabric</p>
                                            </Link>
                                            <Link className='flex items-center pb-[10px]'>
                                                <span className='mr-[10px] inline-block w-[5px] h-[5px] bg-gray-600_01 rounded-[50%]'></span>
                                                <p className=' text-[14px] cursor-pointer font-normal text-gray-600_01 hover: hover:text-black-900 '>L shaped</p>
                                            </Link>
                                            <Link className='flex items-center pb-[10px]'>
                                                <span className='mr-[10px] inline-block w-[5px] h-[5px] bg-gray-600_01 rounded-[50%]'></span>
                                                <p className=' text-[14px] cursor-pointer font-normal text-gray-600_01 hover: hover:text-black-900 '>Sofa cum beds</p>
                                            </Link>
                                            <Link className='flex items-center pb-[10px]'>
                                                <span className='mr-[10px] inline-block w-[5px] h-[5px] bg-gray-600_01 rounded-[50%]'></span>
                                                <p className=' text-[14px] cursor-pointer font-normal text-gray-600_01 hover: hover:text-black-900 '>Recliner</p>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="gap-[12px] w-[50%] flex flex-col ">
                                        <h6 className='text-[20px] font-[700] '>Pages</h6>
                                        <div className="gap-[6px] flex flex-col">
                                            <Link to={'/productlist'} className='flex items-center pb-[10px]'>
                                                <span className='mr-[10px] inline-block w-[5px] h-[5px] bg-gray-600_01 rounded-[50%]'></span>
                                                <p className=' text-[14px] cursor-pointer font-normal text-gray-600_01 hover: hover:text-black-900 '>LeftSide Filter 3 column</p>
                                            </Link>
                                            <Link to={'/productlisttwo'} className='flex items-center pb-[10px]'>
                                                <span className='mr-[10px] inline-block w-[5px] h-[5px] bg-gray-600_01 rounded-[50%]'></span>
                                                <p className=' text-[14px] cursor-pointer font-normal text-gray-600_01 hover: hover:text-black-900'>RightSide Filter 3 column</p>
                                            </Link>
                                            <Link to={'/productlistthree'} className='flex items-center pb-[10px]'>
                                                <span className='mr-[10px] inline-block w-[5px] h-[5px] bg-gray-600_01 rounded-[50%]'></span>
                                                <p className=' text-[14px] cursor-pointer font-normal text-gray-600_01 hover: hover:text-black-900'>LeftSide Filter 2 column </p>
                                            </Link>
                                            <Link to={'/productlistfoure'} className='flex items-center pb-[10px]'>
                                                <span className='mr-[10px] inline-block w-[5px] h-[5px] bg-gray-600_01 rounded-[50%]'></span>
                                                <p className=' text-[14px] cursor-pointer font-normal text-gray-600_01 hover: hover:text-black-900'>RightSide Filter 2 column</p>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                            </PopoverPanel>
                        </Popover>

                        <Link to='/productlist'>
                            <p className=' text-[14px] cursor-pointer font-normal text-gray-600_01 hover: hover:text-black-900'>Product List</p>
                        </Link>
                        <Link to='/contact'>
                            <p className=' text-[14px] cursor-pointer font-normal text-gray-600_01 hover: hover:text-black-900'>Contact us</p>
                        </Link>
                        <Link to='/blog'>
                            <p className=' text-[14px] cursor-pointer font-normal text-gray-600_01 hover: hover:text-black-900'>Blog</p>
                        </Link>

                    </PopoverGroup>


                    <div className="lg:w-[20%] sm:w-[45%] flex items-center gap-5 w-auto lg:justify-end">
                        <div className="flex lg:hidden">
                            <button
                                type="button"
                                onClick={() => setMobileMenuOpen(true)}
                                className="inline-flex items-center justify-center rounded-md text-gray-700"
                            >
                                <img src="assets/Images/menu.png" alt="" className='w-[30px] h-[30px]' />
                            </button>
                        </div>
                        <div className="rounded-[18px] flex-grow gap-1 px-2.5 !text-gray-600_01 hidden sm:flex items-center justify-center cursor-text rounded-[18px] bg-gray-200_03 text-gray-500 h-[36px] px-2.5 text-[12px]">
                            <img src="assets/Images/search.svg" alt="" className='w-[20px] h-[20px]' />
                            <input type="text" name="Search Bar" placeholder="Search for products" className='bg-transparent w-full focus:outline-none' />
                        </div>
                        <Link to={'/cart'}>
                            <img src="assets/Images/cart.svg" alt="" className='w-[20px] h-[20px]' />
                        </Link>
                        <Link to={'/profile'} >
                            <img src="assets/Images/person.svg" alt="" className='w-[20px] h-[20px]' />
                        </Link>
                    </div>
                </nav>
                <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                    <div className="fixed inset-0 z-10" />
                    <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white sm:max-w-sm border-l border-solid border-gray-200_01">
                        <div className="flex items-center justify-end">

                            <button
                                type="button"
                                onClick={() => setMobileMenuOpen(false)}
                                className="inline-flex items-center justify-center rounded-md text-gray-700 p-[20px]"
                            >
                                <img src="assets/Images/close.png" alt="" className='w-[30px] h-[30px]' />
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 ">
                                <div className="space-y-2 py-6 gap-[10px] flex flex-col">
                                    <Link to="/">
                                        <p className=' text-[14px] text-black-900 px-[20px]'>Home</p>
                                    </Link>
                                    <Disclosure as="div" className="">
                                        <DisclosureButton className="text-[14px] w-full text-left cursor-pointer font-normal text-gray-600_01 hover: hover:text-black-900 px-[20px]">
                                            Shop
                                        </DisclosureButton>
                                        <DisclosurePanel className="mt-2 space-y-2">
                                            <div className="flex flex-col justify-between]">
                                                <div className="gap-[12px] flex flex-col mb-[10px] p-[20px] border-b border-solid border-gray-200_01">
                                                    <h6 className='text-[20px] font-[700] '>Category</h6>
                                                    <div className="gap-[6px] flex flex-col">
                                                        <Link className='flex items-center pb-[10px]'>
                                                            <span className='mr-[10px] inline-block w-[5px] h-[5px] bg-gray-600_01 rounded-[50%]'></span>
                                                            <p className=' text-[14px] cursor-pointer font-normal text-gray-600_01 hover: hover:text-black-900 '>Wooden</p>
                                                        </Link>
                                                        <Link className='flex items-center pb-[10px]'>
                                                            <span className='mr-[10px] inline-block w-[5px] h-[5px] bg-gray-600_01 rounded-[50%]'></span>
                                                            <p className=' text-[14px] cursor-pointer font-normal text-gray-600_01 hover: hover:text-black-900 '>Fabric</p>
                                                        </Link>
                                                        <Link className='flex items-center pb-[10px]'>
                                                            <span className='mr-[10px] inline-block w-[5px] h-[5px] bg-gray-600_01 rounded-[50%]'></span>
                                                            <p className=' text-[14px] cursor-pointer font-normal text-gray-600_01 hover: hover:text-black-900 '>L shaped</p>
                                                        </Link>
                                                        <Link className='flex items-center pb-[10px]'>
                                                            <span className='mr-[10px] inline-block w-[5px] h-[5px] bg-gray-600_01 rounded-[50%]'></span>
                                                            <p className=' text-[14px] cursor-pointer font-normal text-gray-600_01 hover: hover:text-black-900 '>Sofa cum beds</p>
                                                        </Link>
                                                        <Link className='flex items-center pb-[10px]'>
                                                            <span className='mr-[10px] inline-block w-[5px] h-[5px] bg-gray-600_01 rounded-[50%]'></span>
                                                            <p className=' text-[14px] cursor-pointer font-normal text-gray-600_01 hover: hover:text-black-900 '>Recliner</p>
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="gap-[12px] flex flex-col mb-[10px] p-[20px] border-b border-solid border-gray-200_01">
                                                    <h6 className='text-[20px] font-[700] '>Pages</h6>
                                                    <div className="gap-[6px] flex flex-col">
                                                        <Link to={'/productlist'} className='flex items-center pb-[10px]'>
                                                            <span className='mr-[10px] inline-block w-[5px] h-[5px] bg-gray-600_01 rounded-[50%]'></span>
                                                            <p className=' text-[14px] cursor-pointer font-normal text-gray-600_01 hover: hover:text-black-900 '>LeftSide Filter 3 column</p>
                                                        </Link>
                                                        <Link to={'/productlisttwo'} className='flex items-center pb-[10px]'>
                                                            <span className='mr-[10px] inline-block w-[5px] h-[5px] bg-gray-600_01 rounded-[50%]'></span>
                                                            <p className=' text-[14px] cursor-pointer font-normal text-gray-600_01 hover: hover:text-black-900'>RightSide Filter 3 column</p>
                                                        </Link>
                                                        <Link to={'/productlistthree'} className='flex items-center pb-[10px]'>
                                                            <span className='mr-[10px] inline-block w-[5px] h-[5px] bg-gray-600_01 rounded-[50%]'></span>
                                                            <p className=' text-[14px] cursor-pointer font-normal text-gray-600_01 hover: hover:text-black-900'>LeftSide Filter 2 column </p>
                                                        </Link>
                                                        <Link to={'/productlistfoure'} className='flex items-center pb-[10px]'>
                                                            <span className='mr-[10px] inline-block w-[5px] h-[5px] bg-gray-600_01 rounded-[50%]'></span>
                                                            <p className=' text-[14px] cursor-pointer font-normal text-gray-600_01 hover: hover:text-black-900'>RightSide Filter 2 column</p>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>

                                        </DisclosurePanel>
                                    </Disclosure>
                                    <Link to='/productlist'>
                                        <p className=' text-[14px] cursor-pointer font-normal text-gray-600_01 hover: hover:text-black-900 px-[20px]'>Product List</p>
                                    </Link>
                                    <Link to='/contact'>
                                        <p className=' text-[14px] cursor-pointer font-normal text-gray-600_01 hover: hover:text-black-900 px-[20px]'>Contact us</p>
                                    </Link>
                                    <Link to={'/blog'}>
                                        <p className=' text-[14px] cursor-pointer font-normal text-gray-600_01 hover: hover:text-black-900 px-[20px]'>Blog</p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </DialogPanel>
                </Dialog>
            </header>

        </>
    )
}

export default Header