import React, { useEffect } from 'react'
import TeamItems from '../Items/TeamItems'
import Aos from 'aos';

const Team = () => {
    useEffect(() => {
        Aos.init({ once: true });

        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 100);
    })
    return (
        <div className="lg:pb-[70px] lg:pt-0 py-[35px]">
            <div className="mx-auto flex w-full max-w-6xl items-center justify-center gap-6 flex-col xl:px-0 px-5">
                <div className="flex flex-col items-center gap-2" data-aos="fade-up" data-aos-duration={`1000`}>
                    <h2 className=' text-[38px] sm:text-[44px] md:text-[48px] font-medium text-black-900 '>
                        Our Team
                    </h2>
                    <p className=' text-[16px] font-normal text-gray-600_01'>
                        Meet out expert team members. </p>
                </div>

                <TeamItems />
            </div>
        </div>
    )
}

export default Team