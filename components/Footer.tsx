import Link from "next/link"
import React, { FC } from 'react'
const data = ["Home", "My Account", "Buy Credit", "Contact"];
const termsNdPrimary = ["Privacy", "terms"];
const Footer: FC = () => {
  
  return (
      <footer className="w-full bg-medium flex flex-col p-8 items-center justify-center gap-8">
      <div className="flex flex-col items-center justify-center gap-8">
        {data.map((data) => <span key={data}>{data}</span>)}
      </div>
      <div className="flex gap-8">{ termsNdPrimary.map((data)=><span>{data}</span>) }</div>
      </footer>
  )
}

export default Footer