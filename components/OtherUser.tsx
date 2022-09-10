import Image, { StaticImageData } from "next/image"
import React, { FC } from 'react'

const OtherUser:FC<{img: StaticImageData, text: string}> = ({ img, text}) => {
  return (
    <div>
        <div className='w-9/12 flex flex-col gap-2 basis-1/3'>
        <div className='w-full' >
                <Image src={img} alt="" layout="responsive"/>
            </div>
            <div>
                <p className='text-neutral'>{text}</p>
            </div>
        </div>
    </div>
  )
}

export default OtherUser