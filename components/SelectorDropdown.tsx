import React, { useState, FC, useId, useLayoutEffect } from 'react';
import type { Pages } from "./Selectors";
import { Dropdown } from "../public/icons";
import SelectorDropItem from "./SelectorDropItem";
const SelectorDropdown: FC<Pages & { i:number }> = ({ heading, value, icon,i }) => {
  const [drop, setDrop] = useState<boolean>(false);

    const Id = useId();
   
  return (
        <div className="transition-[height] duration-300 ease-in">
            <div
                onClick={() => setDrop(!drop)}
                className="cursor-pointer bg-[#429EBD] py-3  rounded-lg flex items-center gap-2 px-8"
            >
                <span>{icon}</span>
                <span className="text-[#D0F7FF] font-bold">{heading}</span>
                <span className="ml-8">
                    <Dropdown className={` ${drop ? `rotate-180` : ``} transition-all duration-500`} />
                </span>
            </div>

          <SelectorDropItem value={value} drop={drop} />
        </div>
  )
}

export default SelectorDropdown;