import React from 'react'

const OtherUser = (img, text) => {
  return (
    <>
        <div className='w-60 flex flex-col gap-2 '>
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <p className='text-light'>{text}</p>
            </div>
        </div>
    </>
  )
}

export default OtherUser