import Image from "next/image";
import React, { FC, useEffect, useState } from "react";
import { Home, Mega as Advert, Account } from "../public/index";
import Link from "next/link";

const Navbar: FC = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const navHandler = ():void => {
    setIsMobile (!isMobile);
  };
  useEffect(()=>{
    console.log(window)
  },[])
  return (
    <>
      <div className={`${!isMobile ? `w-0`: `w-16` } transition-all duration-700 ease-in overflow-x-hidden  h-full min-h-screen absolute left-0 top-0 bottom-0 z-10 flex bg-white`}>
        <div className="h-full w-0 bg-[#429EBD] px-8 flex flex-col justify-center items-center gap-6 transition-all ease-in duration-1000"  >
            <div className="h-[2.6rem] w-[2.6rem] bg-[#9FE7F5] rounded-full pt-2 cursor-pointer" onClick={() => setIsMobile (false)}>
          <Link href="/home">
              <Home className="fill-[#053F5C] h-6 w-6 m-auto" />
          </Link>
            </div>

            <div className="cursor-pointer pt-2"  onClick={() => setIsMobile (false)}>
          <Link href="/account">
              <Account className="w-12 h-12 fill-[#9FE7F5]" />
          </Link>
            </div>
            <div className="h-[2.6rem] w-[2.6rem] bg-[#9FE7F5] rounded-full pt-2 cursor-pointer"  onClick={() => setIsMobile (false)}>
          <Link href="/advert">
              <Advert className="fill-[#053F5C] h-6 w-6 m-auto" />
          </Link>
            </div>
        </div>
      </div>
      <div className={`bg-transparent relative top-4 ${!isMobile? `left-4` : `left-20`} transition-all duration-700 ease-in`} onClick={navHandler}>
          <span className="w-14 h-1 cursor-pointer rounded-full  bg-[#9FE7F5] block after:content-[''] after:relative before:w-12 after:h-1 after:bg-[#9FE7F5] after:block after:mt-1 after:float-right after:ml-auto before:content-[''] before:relative after:w-10 before:h-1 before:mt-2 before:float-right before:ml-auto before:bg-[#9FE7F5] before:block self-end before:self-end after:self-end before:rounded-full after:rounded-full"></span>
        </div>
    </>
  );
};

export default Navbar;
