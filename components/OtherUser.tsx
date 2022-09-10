import React from 'react'

const OtherUser = (id, img, text) => {
  return (
    <>
        <div className='w-60 flex flex-col gap-2 bg-neutralDark h-60 ' key={id}>
            <div>
                <img src={img} alt="" className='w-full' />
            </div>
            <div>
                <p className='text-light'>{text}</p>
            </div>
        </div>
    </>
  )
}

export default OtherUser