import Link from "next/link"
import React, { FC } from 'react'

const Footer:FC = () => {
  return (
      <div>
          <Link href={"/login"}>login</Link>
    </div>
  )
}

export default Footer