import React, { FC, useId } from 'react';
import Link from "next/link";
const SelectorDropItem: FC<{ value: string[], drop:boolean }> = ({ value, drop }) => {
    const Id = useId();
  return (
      <div className={`flex flex-col gap-2 font-bold text-lg text-[#D0F7FF] pt-4 ${drop ? `h-full` : `h-0`} overflow-y-hidden transition-[height] duration-500 ease-in`}>
          {value.map((option) => (
              <Link href={option} key={Id + option}>
                  {option}
              </Link>
          ))}
      </div>
  )
}

export default SelectorDropItem