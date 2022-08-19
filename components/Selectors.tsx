import React, { FC, PropsWithChildren, useId, useState } from "react";
import Link from "next/link";

export type Pages = {
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
        
      })}
    </div>
  );
};

export default Selectors;
