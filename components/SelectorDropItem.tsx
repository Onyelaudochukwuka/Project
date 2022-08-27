import React, { FC, useId, useState, useLayoutEffect, useRef } from 'react';
import Link from "next/link";
const SelectorDropItem: FC<{ value: string[], drop:boolean }> = ({ value, drop }) => {
    const Id = useId();
    const [height, setHeight] = useState<number>(0);
    const [sizeHasBeenCalculated, setSizeHasBeenCalculated] = useState<boolean>(false);
    const dropBody = useRef<HTMLDivElement>(null);
    let styleHeight:string = height + "px";
    if (!sizeHasBeenCalculated) {
        styleHeight = "auto";
    }
    useLayoutEffect(() => {
        if (!!dropBody.current) {
            setHeight(dropBody.current.getBoundingClientRect().height);
            setSizeHasBeenCalculated(true);
        }
    }, []);
  return (
      <div ref={dropBody} className={`flex flex-col gap-2 font-bold text-lg text-[#D0F7FF] pt-4 ${drop ? `h-[${styleHeight}]` : `h-0`} overflow-y-hidden transition-[height] duration-1000 ease-in`}>
          {value.map((option) => (
              <Link href={option} key={Id + option}>
                  {option}
              </Link>
          ))}
      </div>
  )
}

export default SelectorDropItem