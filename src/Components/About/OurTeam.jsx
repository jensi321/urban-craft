import React, { useEffect } from 'react'
import Aos from 'aos';
import TeamItems from '../Items/TeamItems';

const OurTeam = () => {
    useEffect(() => {
        Aos.init({ once: true }); 

        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 100);
    })
    return (
        <>
            <div className="lg:pb-[70px] lg:pt-0 py-[35px]">
                <div className="mx-auto flex w-full max-w-6xl items-center justify-center gap-6 flex-col xl:px-0 px-5">
                    <div className="flex flex-col items-center gap-2" data-aos="fade-up" data-aos-duration={`1000`}>
                        <h2 className='mb-[15px] font-manrope text-[26px] font-semibold text-lime-500 relative inline p-[0] capitalize leading-[1]'>
                            Our  <span className='text-lime-900'>
                                Team
                            </span>
                        </h2>
                        <p className='text-gray-600 text-center leading-relaxed	font-[400] text-[16px] '>
                            Meet out expert team members. </p>
                    </div>

                   <TeamItems/>
                </div>
            </div>

        </>
    )
}

export default OurTeam