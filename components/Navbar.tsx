import Image from "next/image";
import React, { FC } from 'react';
import { vercel } from '../public';
const Navbar:FC = () => {
  return (
      <div>
          <span><Image src={vercel} /></span>
       </div>
  )
}

export default Navbar