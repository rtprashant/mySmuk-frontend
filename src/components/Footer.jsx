import React from 'react';
import playStore from '../assets/playstore.png';
import appStore from '../assets/appstore.png';
import { footer } from '../constant/LandingPage';
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
    return (
        <div className="w-full h-[265px] bg-[#FFC7C7] mt-32 flex">
            {/* Left Section */}
            {footer.find((itm) => itm.id === 1) && (
                <div className="ml-32 w-fit pt-10 ">
                    <h1 className="font-outfit text-[60px]">mySmuk</h1>
                    <p className="font-outfit text-[16px] -mt-4 ml-8">@2025 mySmuk Limited</p>
                </div>
            )}

            {/* Right Section */}
            <div className="flex gap-20 ml-96 pt-20">
                {footer.find((itm) => itm.id === 2)?.part?.map((i) => (
                    <div key={i.pid}>
                        {i.Company && (
                            <div className='flex flex-col gap-2'>
                                <h3 className="font-roboto text-[20px]">{i.Company.title}</h3>
                                <p className='text-[#525252] font-roboto'>{i.Company.aboutUs}</p>
                                <p className='text-[#525252] font-roboto'>{i.Company.legal}</p>
                                <p className='text-[#525252] font-roboto'>{i.Company.terms}</p>
                                <p className='text-[#525252] font-roboto'>{i.Company.privacy}</p>
                            </div>
                        )}
                        {i.Contact && (
                            <div className='flex flex-col gap-2'>
                                <h3 className="font-roboto text-[20px]">{i.Contact.title}</h3>
                                <p className='text-[#525252] font-roboto'>{i.Contact.help}</p>
                                <p className='text-[#525252] font-roboto'>{i.Contact.partner}</p>
                                <p className='text-[#525252] font-roboto'>{i.Contact.Faq}</p>
                            </div>
                        )}
                        {i.Career && (
                            <div className='flex flex-col gap-2'>
                                <h3 className="font-roboto text-[20px]">{i.Career.title}</h3>
                                <p className='text-[#525252] font-roboto'>{i.Career.job}</p>
                                <p className='text-[#525252] font-roboto'>{i.Career.life}</p>
                            </div>
                        )}
                        {i.Social && (
                            <div className='flex flex-col gap-2'>
                                <h3 className="font-roboto text-[20px]">{i.Social.title}</h3>
                                <div className='flex gap-2'>
                                    <FaLinkedin/>
                                    <FaInstagram/>
                                    <FaFacebook/>
                                    <FaYoutube/>
                                    <FaXTwitter/>

                                </div>
                                <div>
                                    <img src={playStore} alt="" className='w-[129px] h-[43px]' />
                                </div>
                                <div>
                                <img src={playStore} alt="" className='w-[129px] h-[43px]' />
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
