import React, { useRef, useState } from 'react';
import Icon1 from '../../../public/header_icons/Icon1';
import Icon2 from '../../../public/header_icons/Icon2';
import Icon3 from '../../../public/header_icons/Icon3';
import Icon4 from '../../../public/header_icons/Icon4';
import Icon5 from '../../../public/header_icons/Icon5';
import Icon6 from '../../../public/header_icons/Icon6';
import Logo from '../../../public/header_icons/Logo';
import BurgerMenuButton from '../molecules/BurgerScroll';

const Header = () => {
    const navRef = useRef<HTMLDivElement>(null);
    const [isNavVisible, setIsNavVisible] = useState(false);

    const handleBurgerMenuClick = () => {
        setIsNavVisible(!isNavVisible);
        if (navRef.current) {
            navRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header className='bg-background-overlay w-full h-[731px] flex flex-col py-[15px] px-[15px] items-center md:h-[839px] md:px-[25px] md:py-0 xl:px-[105px]'>
            <div className='hidden md:flex justify-between items-center w-full h-[75px]'>
                <div className='flex gap-[30px] text-[17px] text-white font-inter'>
                    <div className='flex gap-[15px] items-center cursor-pointer'><Icon1 />08:00 AM - 08:00 PM</div>
                    <div className='flex gap-[15px] items-center cursor-pointer'><Icon2 />( +62 ) 123 456 789</div>
                </div>
                <div className='flex gap-[15px]'>
                    <div className='cursor-pointer'><Icon3 /></div>
                    <div className='cursor-pointer'><Icon4 /></div>
                    <div className='cursor-pointer'><Icon5 /></div>
                    <div className='cursor-pointer'><Icon6 /></div>
                </div>
            </div>
            <div className='h-[90px] w-full flex items-center justify-between bg-white md:h-[110px] xl:h-[95px] px-[15px] md:px-[25px]'>
                <div>
                    <Logo />
                </div>
                <BurgerMenuButton onClick={handleBurgerMenuClick} />
                <div className='hidden xl:flex h-full gap-[90px]'>
                    <nav className='flex text-[17px] font-inter justify-center items-center'>
                        <a href='#' className='cursor-pointer text-[17px] text-[#6E6E6E] font-semibold px-[15px] h-full flex justify-center items-center hover:text-white hover:bg-[#3DB2FF] transition duration-300 ease-in-out'>Home</a>
                        <a href='#' className='cursor-pointer text-[17px] text-[#6E6E6E] font-semibold px-[15px] h-full flex justify-center items-center hover:text-white hover:bg-[#3DB2FF] transition duration-300 ease-in-out'>About Us</a>
                        <a href='#' className='cursor-pointer text-[17px] text-[#6E6E6E] font-semibold px-[15px] h-full flex justify-center items-center hover:text-white hover:bg-[#3DB2FF] transition duration-300 ease-in-out'>Services</a>
                        <a href='#' className='cursor-pointer text-[17px] text-[#6E6E6E] font-semibold px-[15px] h-full flex justify-center items-center hover:text-white hover:bg-[#3DB2FF] transition duration-300 ease-in-out'>Pricing</a>
                        <a href='#' className='cursor-pointer text-[17px] text-[#6E6E6E] font-semibold px-[15px] h-full flex justify-center items-center hover:text-white hover:bg-[#3DB2FF] transition duration-300 ease-in-out'>Contact Us</a>
                    </nav>
                    <div className='h-full flex items-center justify-center'>
                        <button className='w-[180px] h-[65px] hidden xl:flex bg-[#3DB2FF] items-center justify-center text-white font-semibold transition duration-300 ease-in-out hover:bg-[#1E90FF]'>
                            Get a Quote
                        </button>
                    </div>
                </div>
            </div>
            {isNavVisible && (
                <div ref={navRef} className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50'>
                    <div className='bg-white p-5 rounded-lg flex flex-col justify-center items-center'>
                        <nav className='flex flex-col gap-[10px] text-[17px] font-inter justify-center items-center '>
                            <a href='#' className='cursor-pointer text-[17px] text-white font-semibold px-[15px] py-[2px] h-full flex justify-center items-center rounded-md bg-[#3DB2FF] w-full'>Home</a>
                            <a href='#' className='cursor-pointer text-[17px] text-white font-semibold px-[15px] py-[2px] h-full flex justify-center items-center rounded-md bg-[#3DB2FF] w-full'>About Us</a>
                            <a href='#' className='cursor-pointer text-[17px] text-white font-semibold px-[15px] py-[2px] h-full flex justify-center items-center rounded-md bg-[#3DB2FF] w-full'>Services</a>
                            <a href='#' className='cursor-pointer text-[17px] text-white font-semibold px-[15px] py-[2px] h-full flex justify-center items-center rounded-md bg-[#3DB2FF] w-full'>Pricing</a>
                            <a href='#' className='cursor-pointer text-[17px] text-white font-semibold px-[15px] py-[2px] h-full flex justify-center items-center rounded-md bg-[#3DB2FF] w-full'>Contact Us</a>
                        </nav>
                        <button onClick={handleBurgerMenuClick} className='mt-5 px-4 py-2 bg-[#3DB2FF] text-white rounded-lg'>
                            close
                        </button>
                    </div>
                </div>
            )}
            <div className='max-w-[500px] w-full h-auto text-[45px] text-center text-white font-black leading-[58px] font-inter mt-[50px] md:text-[60px] md:max-w-[600px] xl:max-w-[800px] xl:mt-[150px]'>
                More Clean More Fragrant With Our Laundry
            </div>
            <div className='font-inter max-w-[810px] w-full h-auto text-center text-white text-[17px] leading-[30px] mt-[15px] xl:max-w-[810px]'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </div>
        </header>
    );
};

export default Header;