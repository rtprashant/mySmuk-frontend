import React, { useState, useEffect } from 'react';
import playStore from '../assets/playstore.png';
import appStore from '../assets/appstore.png';
import { footer } from '../constant/LandingPage';
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []); // Empty dependency array to add the event listener only once

    const getVisibleSections = () => {
        if (windowWidth < 580) {
            return ['Company']; // Mobile: Only Company
        } else if (windowWidth < 1024) {
            return ['Company', 'Contact']; // Tablet: Company and Contact
        } else {
            return ['Company', 'Contact', 'Career', 'Social']; // Desktop: All sections
        }
    };

    const visibleSections = getVisibleSections();

    return (
        <div className="w-full  h-[265px] bg-[#FFC7C7] mt-32  flex flex-row items-center justify-between px-8 sm:px-8 md:px-16 lg:px-32">
            {/* Left Section (mySmuk) */}
            {footer.find((itm) => itm.id === 1) && (
                <div className="w-fit flex flex-col items-start">
                    <h1 className="font-outfit text-[40px] md:text-[50px] lg:text-[60px]">mySmuk</h1>
                    <p className="font-outfit text-[14px] md:text-[16px]  -mt-3 sm:-mt-3 md:-mt-4 ml-0 md:ml-8">
                        @2025 mySmuk Limited
                    </p>
                </div>
            )}

            {/* Right Section (Dynamic Sections) */}
            <div className="flex flex-row flex-nowrap gap-8 sm:gap-6 md:gap-12 lg:gap-20 ml-16 sm:ml-16 lg:ml-16 md:ml-16">
                {footer.find((itm) => itm.id === 2)?.part?.map((i) => (
                    <div key={i.pid}>
                        {i.Company && visibleSections.includes('Company') && (
                            <div className='flex flex-col gap-2'>
                                <h3 className="font-roboto text-[18px] md:text-[20px]">{i.Company.title}</h3>
                                <p className='text-[#525252] font-roboto'>{i.Company.aboutUs}</p>
                                <p className='text-[#525252] font-roboto'>{i.Company.legal}</p>
                                <p className='text-[#525252] font-roboto'>{i.Company.terms}</p>
                                <p className='text-[#525252] font-roboto'>{i.Company.privacy}</p>
                            </div>
                        )}
                        {i.Contact && visibleSections.includes('Contact') && (
                            <div className='flex flex-col gap-2'>
                                <h3 className="font-roboto text-[18px] md:text-[20px]">{i.Contact.title}</h3>
                                <p className='text-[#525252] font-roboto'>{i.Contact.help}</p>
                                <p className='text-[#525252] font-roboto'>{i.Contact.partner}</p>
                                <p className='text-[#525252] font-roboto'>{i.Contact.Faq}</p>
                            </div>
                        )}
                        {i.Career && visibleSections.includes('Career') && (
                            <div className='flex flex-col gap-2'>
                                <h3 className="font-roboto text-[18px] md:text-[20px]">{i.Career.title}</h3>
                                <p className='text-[#525252] font-roboto'>{i.Career.job}</p>
                                <p className='text-[#525252] font-roboto'>{i.Career.life}</p>
                            </div>
                        )}
                        {i.Social && visibleSections.includes('Social') && (
                            <div className='flex flex-col gap-2'>
                                <h3 className="font-roboto text-[18px] md:text-[20px]">{i.Social.title}</h3>
                                <div className='flex gap-2'>
                                    <FaLinkedin />
                                    <FaInstagram />
                                    <FaFacebook />
                                    <FaYoutube />
                                    <FaXTwitter />
                                </div>
                                <div>
                                    <img src={playStore} alt="" className='w-[100px] md:w-[129px] h-[35px] md:h-[43px]' />
                                </div>
                                <div>
                                    <img src={appStore} alt="" className='w-[100px] md:w-[129px] h-[35px] md:h-[43px]' />
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Footer;