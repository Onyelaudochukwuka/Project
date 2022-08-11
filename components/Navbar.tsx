import Image from "next/image";
import React, { FC, useEffect, useState } from "react";
import { Home, Mega as Advert, Account } from "../public/index";
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
  console.log()

 

  return (
    <>
      <div className={`${!isMobile ? `w-0` : `${isDesktop ? `w-56` : `w-24`}`} transition-all duration-300 ease-in overflow-x-hidden  h-full min-h-screen absolute left-0 top-0 bottom-0 z-10 flex bg-white`}>
        <div className="h-full bg-[#429EBD] px-8 flex flex-col justify-center  w-full items-center gap-16 transition-all ease-in duration-1000"  >
          <Link href="/home">
            <div className={`cursor-pointer w-full ${ isDesktop ? `flex items-center gap-4` : `block`}`} onClick={() => setIsMobile (false)}>
              <span className="bg-[#9FE7F5] w-12 h-12 rounded-full flex items-center justify-center">
              <Home className="cursor-pointer w-8 h-8 flex justify-between items-center" />
              </span>
              {isDesktop && <p className="text-dark font-bold self-center basis-2/3">Home</p>}
            </div>
          </Link>

          <Link href="/account">
            <div className={`cursor-pointer w-full ${isDesktop ? `flex items-center gap-4` : `block`}`}  onClick={() => setIsMobile (false)}>
              <span className="bg-[#9FE7F5] w-12 h-12 rounded-full flex items-center justify-center">
              <Account className="w-12 h-12" />
              </span>
              {isDesktop && <p className="text-dark font-bold self-center basis-2/3">Account</p>}
            </div>
          </Link>
          <Link href="/advert">
            <div className={`cursor-pointer w-full ${isDesktop ? `flex items-center gap-4` : `block`}`}  onClick={() => setIsMobile (false)}>
              <span className="bg-[#9FE7F5] w-12 h-12 rounded-full flex items-center justify-center"><Advert className=" h-6 w-6 m-auto" /></span>
              {isDesktop && <p className="text-dark font-bold self-center basis-2/3">Post Ad</p>}
            </div>
          </Link>
        </div>
      </div>
      <div className={`bg-transparent relative top-4 ${!isMobile ? `left-4` : `left-56`} transition-all duration-500 ease-in`} onClick={navHandler} onBlur={() => setIsMobile(false)} tabIndex={24}>
          <span className="w-14 h-1 cursor-pointer rounded-full  bg-[#9FE7F5] block after:content-[''] after:relative before:w-12 after:h-1 after:bg-[#9FE7F5] after:block after:mt-1 after:float-right after:ml-auto before:content-[''] before:relative after:w-10 before:h-1 before:mt-2 before:float-right before:ml-auto before:bg-[#9FE7F5] before:block self-end before:self-end after:self-end before:rounded-full after:rounded-full"></span>
        </div>
    </>
  );
};

export default Navbar;
