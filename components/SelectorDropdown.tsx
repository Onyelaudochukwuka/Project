import React, { useState, FC, useId, useLayoutEffect } from 'react';
import type { Pages } from "./Selectors";
import { Dropdown } from "../public/icons";
import { motion } from "framer-motion";
import Link from "next/link";
const SelectorDropdown: FC<Pages & { i:number }> = ({ heading, value, icon,i }) => {
  const [drop, setDrop] = useState<boolean>(false);

    const Id = useId();
  return (
        <div className="transition-[height] duration-300 ease-in">
            <div
                onClick={() => setDrop(!drop)}
                className="cursor-pointer bg-neutral py-3  rounded-lg flex items-center gap-2 px-8"
            >
                <span>{icon}</span>
                <span className="text-light font-bold">{heading}</span>
                <span className="ml-8">
                    <Dropdown className={` ${drop ? `rotate-180` : ``} transition-all duration-500`} />
                </span>
            </div>

      <motion.div
        initial={{
          height: 0
        }}
        animate={{
          height: drop ? "auto" : 0
        }}
        transition={{ delay: 0, type: "just" }}
        className={`flex flex-col gap-2 font-bold text-lg text-neutral pt-4 overflow-y-hidden`}>
        {value.map((option) => (
          <Link href={option} key={Id + option}>
            {option}
          </Link>
        ))}
      </motion.div>
        </div>
  )
}

export default SelectorDropdown;