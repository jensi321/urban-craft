import Aos from 'aos';
import React, { useEffect, useState } from 'react';
import { FaX } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import ModalPortal from '../ModalPortal';
import { CSSTransition } from 'react-transition-group';

const NewsLetter = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isClass, setClass] =useState();

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsOpen(true);
        }, 5000);

        Aos.init({ once: true });

        // Smooth scroll to the top
        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 100);

        return () => clearTimeout(timer); // Cleanup timer on unmount
    }, []);

    const handleClose = () => {
        setIsOpen(false);
        setClass('modal-exit-active')
    };

    return (
        <>
                <ModalPortal show={isOpen} onClick={handleClose}>
                    <CSSTransition
                        mountOnEnter
                        unmountOnExit
                        in={isOpen}
                        timeout={{ enter: 700, exit: 700 }}
                        classNames="modal"
                    >
                        <div className={`modal modal-enter-active ${isClass}`}>
                            <div className="bg-white rounded-lg p-5 relative shadow-lg sm:w-[75%] md:w-[85%] xl:w-[55%] w-[90%] sm:mx-0 mx-5 transition-all duration-500">
                                <div className="flex items-center md:gap-0 gap-4 sm:flex-row flex-wrap flex-col">
                                    <div className="img-content relative overflow-hidden md:w-[50%] w-full px-[10px]">
                                        <img src="assets/Images/sofa1.png" className='w-full' alt="" />
                                    </div>
                                    <div className="flex flex-col gap-2 md:w-[50%] w-full px-[10px]">
                                        <h2 className="text-lg font-semibold text-center">Newsletter</h2>
                                        <p className="text-center mt-2 font-[400]">Subscribe to Urban Craft to get in touch and receive future updates.</p>
                                        <div className="flex flex-col justify-center mt-4 gap-3">
                                            <input type="email" placeholder='Enter Email' name='email' autoComplete="email" className='w-[100%] p-[10px] border border-lime-900 rounded-[10px]' />
                                            <button
                                                onClick={handleClose}
                                                className="flex items-center relative text-[16px] justify-center bg-lime-900 py-[10px] px-[20px] capitalize font-[500] rounded-[10px] text-white"
                                            >
                                                Subscribe
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <Link className="absolute lg:-right-[30px] right-0 lg:-top-[30px] -top-[50px] bg-white w-[30px] h-[30px] flex items-center justify-center rounded-[50px]" onClick={handleClose}>
                                    <span>
                                        <FaX />
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </CSSTransition>
                </ModalPortal>
          
        </>
    );
};

export default NewsLetter;