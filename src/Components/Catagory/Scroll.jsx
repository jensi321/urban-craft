import React from 'react';

const Scroll = () => {
    return (
        <>
            <div className="marquee-outer">
                <div className="marquee-inner">
                    <div className="item">
                        <ul className="marquee-list">
                            <li className="marquee-item">
                                <span className="text-slider text-color">crafting</span>
                                <span className="text-slider"></span>
                                <span className="text-slider text-color">artistry</span>
                                <span className="text-slider"><img src="assets/Images/sparkle.png" alt="icon-img"/></span>
                                <span className="text-slider"></span>
                                <span className="text-slider text-color-2">handmade</span>
                                <span className="text-slider text-color-2">creations</span>
                                <img src="assets/Images/sparkle.png" alt="icon-img"/>
                                <span className="text-slider"></span>
                                <span className="text-slider text-color">DIY</span>
                                <span className="text-slider text-color">projects</span>
                                <span className="text-slider"></span>
                                <span className="text-slider"><img src="assets/Images/sparkle.png" alt="icon-img"/></span>
                                <span className="text-slider"></span>
                                <span className="text-slider text-color-2">craft supplies</span>
                                <span className="text-slider text-color">inspiration</span>
                                <span className="text-slider"></span>
                                <span className="text-slider text-color">creativity</span>
                                <span className="text-slider text-color-2">imagination</span>
                                <img src="assets/Images/sparkle.png" alt="icon-img"/>
                                <span className="text-slider"></span>
                                <span className="text-slider text-color">upcycling</span>
                                <span className="text-slider text-color">handcrafted</span>
                                <span className="text-slider"></span>
                                <span className="text-slider"><img src="assets/Images/sparkle.png" alt="icon-img"/></span>
                                <span className="text-slider"></span>
                                <span className="text-slider text-color-2">craft fairs</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Scroll;