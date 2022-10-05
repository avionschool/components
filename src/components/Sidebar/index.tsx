import React, { useState } from "react";
import { BiMenuAltRight, BiX } from "react-icons/bi";
import { Link, useLocation } from "react-router-dom";
import { twMerge } from "tailwind-merge";

import AvionLogo from "./avion_logo.svg";
import AvionMobileLogo from "./mobile_avion_logo.svg";

import { SidebarProps } from "./Sidebar.types";
import SidebarItem from "./SidebarItem";

const Sidebar: React.FC<SidebarProps> = ({
  mobileLogo,
  logo,
  items,
  logoAlt,
  mobileLogoAlt,
  className = ''
}) => {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const mobileSidebarMenuClasses = twMerge(
    `
      block
      lg:flex
      flex-col
      right-0
      box-border
      absolute
      lg:relative
      ${isVisible ? 'right-0 z-[1001] w-[75%] sm:w-[60%] md:w-[270px] lg:w-[18%]' : 'w-[0px] fixed overflow-x-hidden -z-20 lg:z-auto'} 
    `
  );

  const logoDivClasses = twMerge(`
    flex 
    flex-row 
    lg:flex-col
    justify-between 
    items-center
    box-border 
    py-0 
    px-6 
    gap-6 
    h-10
  `);

  const sidebarClasses = twMerge(`
    lg:w-1/4
    lg:max-w-sm 
    bg-grayscale-light-white 
    h-full 
    absolute 
    right-0 
    lg:left-0 
    ${mobileSidebarMenuClasses} 
    lg:opacity-100
    lg:block
    absolute
    top-0
    transition-all
    ease-in-out
    delay-100
    drop-shadow-md
  `);

  const topBarClasses = twMerge(
    `
      py-0
      px-6
      box-border
      h-20
      top-0
      fixed
      w-screen
      bg-grayscale-light-white
      lg:hidden
      z-[1]
      drop-shadow-md
    `
  )

  return (
    <>
      <div className="mb-20">
        <div className={topBarClasses}>
          <div className="flex flex-col justify-center py-5 px-0 box-border gap-6 self-stretch grow-0 order-5 w-[100%]">
            <div className="flex justify-between p-0 gap-6 h-10 self-stretch grow-0 order-5">
              <div className="w-10 h-10">
                <Link to="/">
                  <img src={AvionMobileLogo} alt={logoAlt} />
                </Link>
              </div>
              <div
                className="w-10 h-10 order-1"
                onClick={() => setIsVisible(true)}
              >
                <BiMenuAltRight className="text-grayscale-light-header-text" size={40} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${!isVisible ? 'opacity-0 -z-10' : 'opacity-50 z-[2]' } transition-opacity duration-500 absolute h-screen bg-grayscale-light-header-text left-0 w-full lg:opacity-0 lg:-z-10`}
        onClick={() => setIsVisible(false)}
      />
      <div
        className={sidebarClasses}
        role="menubar"
      >
        <div className="nav py-5 lg:py-10 items-center justify-center">
          <div className={logoDivClasses}>
            <div className={`flex flex-col lg:mt-4`}>
              <Link to="/">
                <img className="h-8 p-1 hidden lg:block flex" src={AvionLogo} alt={logoAlt} />
                <img className="lg:hidden" src={AvionMobileLogo} alt={mobileLogoAlt} />
              </Link>
            </div>
            <div
              className="w-10 h-10 order-1 lg:hidden"
              onClick={() => setIsVisible(false)}
            >
              <BiX className="text-grayscale-light-header-text" size={40} />
            </div>
          </div>
          <div
            className={`mt-16 lg:gap-18 ${className} justify-center lg:justify-start`}
          >
            {
              items.map(({ link, name, disabled, icon }) => {
                const isActive: boolean = location.pathname.includes(link);
                return (
                  <SidebarItem
                    isActive={isActive}
                    name={name}
                    icon={icon}
                    link={link}
                    disabled={disabled}
                    key={link}
                    onClick={() => setIsVisible(false)}
                  />
                )
              })
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Sidebar
