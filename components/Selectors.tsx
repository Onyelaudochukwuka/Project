import React, { FC, PropsWithChildren, useId, useState } from "react";
import Link from "next/link";
import { Dropdown } from "../public/index";

type Pages = {
  heading: string;
  value: string[];
  icon: any
};

const Selectors = ({ pages }: any) => {
  const newArr: Pages[] = [...pages];
  const Id = useId();
  return (
    <div className="grid gap-8 lg:gap-24 grid-cols-1 lg:grid-cols-3 mt-8">
      {newArr.map(({ heading, value, icon }: Pages, i: number) => {
        const [drop, setDrop] = useState<boolean>(false);
        return (
          <div className="transition-[height] duration-300 ease-in">
            <div
              onBlur={() => setDrop(false)}
              tabIndex={5}
              onClick={() => setDrop(!drop)}
              className="cursor-pointer bg-[#429EBD] py-3  rounded-lg flex items-center gap-2 px-8"
            >
              <span>{icon}</span>
              <span className="text-[#D0F7FF] font-bold">{heading}</span>
              <span className="ml-8">
                <Dropdown className={` ${ drop ? `rotate-180` : ``} transition-all duration-500`}/>
              </span>
            </div>

            <div
              className={`flex flex-col gap-2 font-bold text-lg text-[#D0F7FF] pt-4 ${
                drop ? `h-full` : `h-0`
              } overflow-y-hidden transition-[height] duration-500 ease-in`}
            >
              {value.map((option) => (
                <Link href={option} key={Id + option}>
                  {option}
                </Link>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Selectors;
