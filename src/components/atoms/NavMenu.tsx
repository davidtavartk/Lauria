import { NavMenuProps } from "@/types/propTypes";
import React from "react";

const NavMenu = ({ className }: NavMenuProps) => {
  return (
    <>
      <a href="#" className={className}>
        Home
      </a>
      <a href="#" className={className}>
        Services
      </a>
      <a href="#" className={className}>
        About Us
      </a>
      <a href="#" className={className}>
        Pricing
      </a>
      <a
        href="#"
        className={className}
      >
        Contact Us
      </a>
      </>
  );
};

export default NavMenu;
