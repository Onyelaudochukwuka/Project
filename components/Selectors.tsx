import React, { FC, PropsWithChildren, useId, useState } from 'react';
import Link from 'next/link';
type Pages = {
    heading: string,
    value: string[]
}

const Selectors = ({ pages }:any) => {
    const newArr: Pages[] = [...pages];
    const Id = useId()
  return (
      <div className="grid grid-cols-3 gap-4">
          {newArr.map(({ heading, value }: Pages, i: number) => {
              const [drop, setDrop] = useState<boolean>(false);
              return (
                  <div className="transition-[height] duration-300 ease-in">
                      <span onBlur={()=>setDrop(false)} tabIndex={5} onClick={() => setDrop(!drop)} className="cursor-pointer bg-light p-3">{heading}</span>
                  
                      <div className={`flex flex-col gap-2 font-bold text-lg text-white ${drop? `h-full`: `h-0`} overflow-y-hidden transition-[height] duration-300 ease-in`}>{value.map((option) => <Link href={option} key={Id + option}>{option}</Link>)}</div>
                  </div>
              )
          }
          )}
        </div>
  )
}

export default Selectors