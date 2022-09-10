import Image from "next/image";
import React, { FC, useEffect, useState } from "react";
import { Home, Advert, Account } from "../public/icons";
import Link from "next/link";

const Navbar: FC = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isDesktop, setIsDesktop] = useState<boolean>(false);
  
  const navHandler = ():void => {
    setIsMobile (!isMobile);
  };
  useEffect(()=>{
    const interval = setInterval(() => {
      if (window.innerWidth > 720) {
        return setIsDesktop(true)
      }
      else {
        return setIsDesktop(false)
      }
    }, 1000);
    
    return ()=>{
      clearInterval(interval);
    }
  }, []);
  return (
    <nav>
      <aside className={`${`${isDesktop ? `w-24 group fixed  left-0 hover:w-56` : `fixed ${!isMobile ? `w-0 -left-full` : `w-24 inset-y-0 left-0`} `}`} cursor-pointer transition-all duration-300 ease-in overflow-x-hidden  h-full  left-0 top-0 bottom-0 z-10 flex bg-[#429EBD] justify-center gap-24 flex-col  w-full items-center content-center`}>
          <Link href="/" className="mx-auto">
            <div className={`cursor-pointer ${isDesktop ? `gap-4 group-hover:flex` : `block`} `} onClick={() => setIsMobile (false)}>
              <span className="bg-[#9FE7F5] w-12 h-12 rounded-full flex items-center justify-center">
              <Home className="w-8 h-8 block" />
              </span>
              {isDesktop && <p className="text-dark font-bold self-center basis-2/3 group-hover:block hidden">Home</p>}
            </div>
          </Link>

          <Link href="/account">
            <div className={`cursor-pointer  ${isDesktop ? `gap-4 group-hover:flex` : `block`}`}  onClick={() => setIsMobile (false)}>
              <span className="bg-[#9FE7F5] w-12 h-12 rounded-full flex items-center justify-center">
              <Account className="w-12 h-12 block" />
              </span>
              {isDesktop && <p className="text-dark font-bold self-center basis-2/3 group-hover:block hidden">Account</p>}
            </div>
          </Link>
          <Link href="/advert">
            <div className={`cursor-pointer ${isDesktop ? `gap-4 group-hover:flex` : `block`}`}  onClick={() => setIsMobile (false)}>
              <span className="bg-[#9FE7F5] w-12 h-12 rounded-full flex items-center justify-center">
              <Advert className="h-6 w-6 block" />
            </span>
              {isDesktop && <p className="text-dark font-bold self-center group-hover:block hidden">Post Ad</p>}
            </div>
          </Link>
      </aside>
      <div className={`bg-transparent relative top-4 lg:hidden ${!isMobile ? `left-4` : `left-56`} transition-all duration-500 ease-in`} onClick={navHandler} onBlur={() => setIsMobile(false)} tabIndex={24}>
          <span className="w-14 h-1 cursor-pointer rounded-full  bg-[#9FE7F5] block after:content-[''] after:relative before:w-12 after:h-1 after:bg-[#9FE7F5] after:block after:mt-1 after:float-right after:ml-auto before:content-[''] before:relative after:w-10 before:h-1 before:mt-2 before:float-right before:ml-auto before:bg-[#9FE7F5] before:block self-end before:self-end after:self-end before:rounded-full after:rounded-full"></span>
        </div>
    </nav>
  );
};

export default Navbar;
