import Image from "next/image";
import React, { FC, useState } from "react";
import Home from "../public/home.svg";
import Account from "../public/account.svg";
import Advert from "../public/megaphone.svg";
import Link from "next/link";

const Navbar: FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  const navHandler = () => {
    setIsMobile (!isMobile)
  };

  return (
    <>
      <div className="w-[8rem]  h-full absolute left-0 z-10 flex bg-white">
        <div className="h-full w-0 bg-[#429EBD] px-8 flex flex-col justify-center items-center gap-6 transition-all ease-in duration-1000"  >
          <Link href="/home">
            <div className="h-[2.6rem] w-[2.6rem] bg-[#9FE7F5] rounded-full pt-2 cursor-pointer" onClick={() => setIsMobile (false)}>
              <Home className="fill-[#053F5C] h-6 w-6 m-auto" />
            </div>
          </Link>

          <Link href="/account">
            <div className="cursor-pointer pt-2"  onClick={() => setIsMobile (false)}>
              <Account className="w-12 h-12 fill-[#9FE7F5]" />
            </div>
          </Link>
          <Link href="/advert">
            <div className="h-[2.6rem] w-[2.6rem] bg-[#9FE7F5] rounded-full pt-2 cursor-pointer"  onClick={() => setIsMobile (false)}>
              <Advert className="fill-[#053F5C] h-6 w-6 m-auto" />
            </div>
          </Link>
        </div>
        <div className="w-16 h-9  cursor-pointer bg-black" onClick={navHandler}>
          <span className="w-14 h-1 bg-[#9FE7F5] block"></span>
          <span className="w-12 h-1 bg-[#9FE7F5] block mt-2 ml-2"></span>
          <span className="w-10 h-1 bg-[#9FE7F5] block mt-2 ml-4"></span>
        </div>
      </div>
    </>
  );
};

export default Navbar;
