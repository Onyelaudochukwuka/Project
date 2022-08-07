import Image from "next/image";
import React, { FC } from "react";
import Home from "../public/home.svg";
import Account from "../public/account.svg";
import Advert from "../public/megaphone.svg";

import Link from "next/link";

const Navbar: FC = () => {
  return (
    <>
      <div className="w-[8rem]  h-full absolute left-0 z-10 flex ">
        <div className="h-full w-12 bg-[#429EBD] px-8 flex flex-col justify-center items-center gap-6 relative translate-x-[-4rem]">
          <Link href="/home">
            <div className="h-[2.6rem] w-[2.6rem] bg-[#9FE7F5] rounded-full pt-2 cursor-pointer">
              <Home className="fill-[#053F5C] h-6 w-6 m-auto" />
            </div>
          </Link>

          <Link href="/account">
            <div className="cursor-pointer pt-2">
            <Account className="w-12 h-12 fill-[#9FE7F5]" />
            </div>
          </Link>
          <Link href="/advert">
            <div className="h-[2.6rem] w-[2.6rem] bg-[#9FE7F5] rounded-full pt-2 cursor-pointer">
              <Advert className="fill-[#053F5C] h-6 w-6 m-auto" />
            </div>
          </Link>
        </div>
        <div className="w-16 h-9  cursor-pointer  absolute top-4 left-2">
          <span className="w-14 h-1 bg-[#9FE7F5] block" ></span>
          <span className="w-12 h-1 bg-[#9FE7F5] block mt-2 ml-2" ></span>
          <span  className="w-10 h-1 bg-[#9FE7F5] block mt-2 ml-4"></span>
        </div>
      </div>
    </>
  );
};

export default Navbar;
