import { useRef, useState } from "react";
import Icon1 from "../../../../public/svgs/header_icons/Icon1";
import Icon2 from "../../../../public/svgs/header_icons/Icon2";
import Icon3 from "../../../../public/svgs/header_icons/Icon3";
import Icon4 from "../../../../public/svgs/header_icons/Icon4";
import Icon5 from "../../../../public/svgs/header_icons/Icon5";
import Icon6 from "../../../../public/svgs/header_icons/Icon6";
import Logo from "../../../../public/svgs/header_icons/Logo";
import BurgerMenuButton from "@/components/molecules/BurgerScroll/BurgerScroll";
import Button from "@/components/atoms/Button/Button";
import NavModal from "@/components/molecules/NavModal/NavModal";
import NavMenu from "@/components/atoms/NavMenu/NavMenu";
import CustomForm from "@/components/molecules/CustomForm/CustomForm";

const Header = () => {
  const navRef = useRef<HTMLDivElement>(null);
  const [isNavVisible, setIsNavVisible] = useState(false);

  const handleBurgerMenuClick = () => {
    setIsNavVisible(!isNavVisible);
    if (navRef.current) {
      navRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="relative flex w-full flex-col items-center bg-background-overlay px-4 pb-40 pt-[15px] lg:px-24">
      <div className="hidden h-[75px] w-full items-center justify-between md:flex">
        <div className="flex gap-[30px] text-[17px] text-white">
          <div className="flex cursor-pointer items-center gap-[15px]">
            <Icon1 />
            08:00 AM - 08:00 PM
          </div>
          <div className="flex cursor-pointer items-center gap-[15px]">
            <Icon2 />( +62 ) 123 456 789
          </div>
        </div>
        <div className="flex gap-[15px]">
          <div className="cursor-pointer">
            <Icon3 />
          </div>
          <div className="cursor-pointer">
            <Icon4 />
          </div>
          <div className="cursor-pointer">
            <Icon5 />
          </div>
          <div className="cursor-pointer">
            <Icon6 />
          </div>
        </div>
      </div>
      <div className="flex h-[90px] w-full items-center justify-between bg-white px-[15px] md:h-[110px] xl:h-[95px]">
        <div>
          <Logo />
        </div>
        <BurgerMenuButton onClick={handleBurgerMenuClick} />
        <div className="hidden h-full gap-[90px] xl:flex">
          <div className="font-inter flex items-center justify-center text-[17px]">
            <NavMenu className="flex h-full cursor-pointer items-center justify-center px-[15px] text-[17px] font-semibold text-[#6E6E6E] transition duration-300 ease-in-out hover:bg-[#3DB2FF] hover:text-white" />
          </div>

          <div className="flex h-full items-center justify-center">
            <Button filled>Get a Quote</Button>
          </div>
        </div>
      </div>
      {isNavVisible && (
        <NavModal isOpen={isNavVisible} closeModal={handleBurgerMenuClick} />
      )}
      <div className="mt-[50px] h-auto w-full max-w-[500px] text-center text-[45px] font-black leading-[58px] text-white md:max-w-[600px] md:text-[60px] xl:mt-[150px] xl:max-w-[800px]">
        More Clean More Fragrant With Our Laundry
      </div>
      <div className="mt-[15px] h-auto w-full max-w-[810px] text-center text-[17px] leading-[30px] text-white xl:max-w-[810px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </div>
      <div className="absolute bottom-[-412px] w-full px-4 sm:bottom-[-200px] lg:right-0 lg:w-auto lg:px-24">
        <CustomForm />
      </div>
    </header>
  );
};

export default Header;
